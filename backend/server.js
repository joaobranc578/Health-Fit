import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Conexão MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno",
  database: "comments_app" // coloque o nome do seu banco
});

// Teste conexão
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("MySQL conectado!");
});

// 📌 Rota para salvar comentário
app.post("/comments", (req, res) => {
  const { productId, userId, userName, comment } = req.body;

  if (!productId || !userId || !userName || !comment) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  const sql = `
    INSERT INTO comentarios (productId, userId, userName, comment)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [productId, userId, userName, comment], (err, result) => {
    if (err) {
      console.log("Erro SQL:", err);
      return res.status(500).json({ error: "Erro ao salvar comentário" });
    }
    res.json({ success: true, id: result.insertId });
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
