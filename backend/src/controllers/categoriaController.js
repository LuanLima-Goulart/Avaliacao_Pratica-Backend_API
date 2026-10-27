const listaCategoria = require("../models/categoriaModel");

const listarCategorias = async (req, res) => {
    try {
        const categoria = await listaCategoria.buscarTodos();
        res.json(categoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar categorias!" });
    }
};

const buscarCategoriaId = async (req, res) => {
    try {
        const id = req.params.id;
        const categoria = await listaCategoria.buscarId(id);

        if (!categoria) {
            return res.status(404).json({
                mensagem: "Categoria não encontrada!"
            });
        }

        res.json(categoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar Categorias!" });
    }
};

const criarCategoria = async (req, res) => {
    try {
        const { nome } = req.body;
        const novaCategoria = await listaCategoria.criar(nome);

        res.status(201).json(novaCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar Categorias!" });
    }
};

const editarCategoria = async (req, res) => {
    try {
        const id = req.params.id;
        const { nome } = req.body;
        const categoria = await listaCategoria.buscarId(id);

        if (!categoria) {
            return res.status(404).json({
                mensagem: "Categoria não encontrada!"
            });
        }

        const categoriaAtualizado = await listaCategoria.editar(id, nome);
        res.json(categoriaAtualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar Categorias!" });
    }
};

const deletarCategoria = async (req, res) => {
    try {
        const id = req.params.id;
        const categoria = await listaCategoria.buscarId(id);

        if (!categoria) {
            return res.status(404).json({
                mensagem: "Categoria não encontrado!"
            });
        }

        await listaCategoria.deletar(id);

        res.json({
            mensagem: "Categoria deletada!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar categorias!" });
    }
};

module.exports = {
    listarCategorias,
    buscarCategoriaId,
    criarCategoria,
    editarCategoria,
    deletarCategoria
}