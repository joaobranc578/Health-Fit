import createError from "http-errors";
import express from "express";

import { PrismaClient } from "#generated/prisma/index.js";
import verifyToken from "#middlewares/verifyToken.js";

const prisma = new PrismaClient();
const router = express.Router();

// Criar comentário para um produto (usa usuário autenticado)
router.post("/:productId/comments", verifyToken, async (req, res, next) => {
  const productId = Number(req.params.productId);
  const { content, rating } = req.body;

  if (!content || typeof rating === "undefined") {
    return next(
      createError(400, "Os campos content e rating são obrigatórios")
    );
  }

  if (!req.user || !req.user.id) {
    return next(createError(401, "Usuário não autenticado"));
  }

  const authorId = Number(req.user.id);

  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) return next(createError(404, "Produto não encontrado"));

  const author = await prisma.user.findUnique({ where: { id: authorId } });
  if (!author) return next(createError(404, "Autor não encontrado"));

  const comment = await prisma.comment.create({
    data: {
      content,
      rating: Number(rating),
      authorId: authorId,
      productId,
    },
  });

  res.status(201).json(comment);
});

// Listar comentários por produto
router.get("/:productId/comments", async (req, res, next) => {
  const productId = Number(req.params.productId);

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!product) return next(createError(404, "Produto não encontrado"));

  const comments = await prisma.comment.findMany({
    where: { productId },
    include: {
      author: {
        select: { id: true, name: true, username: true, email: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  res.json(comments);
});

export default router;
