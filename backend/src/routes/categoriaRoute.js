const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.get("/", categoriaController.listarCategorias);
router.get("/:id", categoriaController.buscarCategoriaId);
router.post("/", categoriaController.criarCategoria);
router.put("/:id", categoriaController.editarCategoria);
router.delete("/:id", categoriaController.deletarCategoria);

module.exports = router;