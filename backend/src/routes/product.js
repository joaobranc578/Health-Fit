import createError from "http-errors";
import express from "express";

import { PrismaClient } from "#generated/prisma/index.js";

const prisma = new PrismaClient();
const router = express.Router();

// Criar um produto
router.post("/", async (req, res, next) => {
  const { name, description, price, category, image, stock } = req.body;

  if (!name || !description || !price || !category) {
    return next(
      createError(
        400,
        "Os campos nome, descrição, preço e categoria são obrigatórios"
      )
    );
  }

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price: String(price),
      category,
      image: image || null,
      stock: typeof stock === "number" ? stock : Number(stock) || 0,
    },
  });

  res.status(201).json(product);
});

// Listar todos produtos
router.get("/", async (req, res, next) => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  res.json(products);
});

export default router;
