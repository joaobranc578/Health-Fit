import bcrypt from 'bcrypt';
import createError from 'http-errors';
import express from 'express';
import jwt from 'jsonwebtoken';
import ms from 'ms';

import { PrismaClient } from '#generated/prisma/index.js';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/register', async (req, res, next) => {
    const { name, username, password, email, birthday, gender } = req.body;

    if (!name || !username || !password || !email) {
        return next(createError(400, 'Os campos nome, usuario, senha e email são obrigatórios'));
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
        return next(createError(409, 'O nome de usuário já está em uso'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            username,
            email,
            password: hashedPassword,
        },
    });

    res.status(201).json({ message: 'O usuário foi cadastrado com sucesso', user });
});

router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(createError(400, 'Nome de usuário e senha são obrigatórios'));
    }

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
        return next(createError(401, 'Nome de usuário ou senha inválidos'));
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return next(createError(401, 'Nome de usuário ou senha inválidos'));
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: ms(process.env.JWT_EXPIRES_IN),
    });

    res.json({ message: 'Login realizado com sucesso', token });
});

router.post('/logout', async (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logout realizado com sucesso' });
});

export default router;
