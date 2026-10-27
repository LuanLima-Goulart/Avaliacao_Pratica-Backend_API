const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtosController");

router.get("/", produtoController.listarProdutos);
router.get("/:id", produtoController.buscarProdId);
router.post("/", produtoController.criarProduto);
router.put("/:id", produtoController.editarProduto);
router.delete("/:id", produtoController.deletarProduto);

module.exports = router;