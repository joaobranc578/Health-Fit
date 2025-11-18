// server/index.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const auth = require('./middleware/auth');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Helpers
const signToken = (user) => {
  const payload = { id: user.id, email: user.email, name: user.name, is_admin: user.is_admin || 0 };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
};

// Register
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) return res.status(400).json({ message: 'Nome, email e senha são obrigatórios' });

  try {
    const [rows] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (rows.length) return res.status(409).json({ message: 'Email já cadastrado' });

    const hash = await bcrypt.hash(password, 10);
    const [result] = await pool.query('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)', [name, email, hash]);

    const user = { id: result.insertId, name, email, is_admin: 0 };
    const token = signToken(user);
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email e senha são obrigatórios' });

  try {
    const [rows] = await pool.query('SELECT id, name, email, password_hash, is_admin FROM users WHERE email = ?', [email]);
    if (!rows.length) return res.status(401).json({ message: 'Credenciais inválidas' });

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: 'Credenciais inválidas' });

    const token = signToken(user);
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, is_admin: user.is_admin }});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// List comments (public)
app.get('/api/comments', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT c.id, c.content, c.created_at, u.id AS user_id, u.name AS user_name
       FROM comments c
       JOIN users u ON c.user_id = u.id
       ORDER BY c.created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar comentários' });
  }
});

// Create comment (authenticated)
app.post('/api/comments', auth, async (req, res) => {
  const { content } = req.body;
  if (!content || !content.trim()) return res.status(400).json({ message: 'Comentário vazio' });

  try {
    const [result] = await pool.query('INSERT INTO comments (user_id, content) VALUES (?, ?)', [req.user.id, content]);
    const commentId = result.insertId;

    // retornar o comentário completo junto com usuário
    const [rows] = await pool.query(
      `SELECT c.id, c.content, c.created_at, u.id AS user_id, u.name AS user_name
       FROM comments c
       JOIN users u ON c.user_id = u.id
       WHERE c.id = ?`, [commentId]);

    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao salvar comentário' });
  }
});

// Delete comment (authenticated) - only owner or admin
app.delete('/api/comments/:id', auth, async (req, res) => {
  const commentId = req.params.id;
  try {
    const [rows] = await pool.query('SELECT user_id FROM comments WHERE id = ?', [commentId]);
    if (!rows.length) return res.status(404).json({ message: 'Comentário não encontrado' });

    const ownerId = rows[0].user_id;
    if (ownerId !== req.user.id && !req.user.is_admin) {
      return res.status(403).json({ message: 'Sem permissão para apagar esse comentário' });
    }

    await pool.query('DELETE FROM comments WHERE id = ?', [commentId]);
    res.json({ message: 'Comentário apagado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao apagar comentário' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
