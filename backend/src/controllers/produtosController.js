const listaProduto = require("../models/produtosModel");

const listarProdutos = async (req, res) => {
    try {
        const produto = await listaProduto.buscarTodos();
        res.json(produto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar produtos!" });
    }
};

const buscarProdId = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await listaProduto.buscarId(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado!"
            });
        }

        res.json(produto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar produtos!" });
    }
};

const criarProduto = async (req, res) => {
    try {
        const { nome, valor, quantidade, idCategoria } = req.body;
        const novoProduto = await listaProduto.criar(nome, valor, quantidade, idCategoria);

        res.status(201).json(novoProduto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar produtos!" });
    }
};

const editarProduto = async (req, res) => {
    try {
        const id = req.params.id;
        const { nome, valor, quantidade, idCategoria } = req.body;
        const produto = await listaProduto.buscarId(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado!"
            });
        }

        const produtoAtualizado = await listaProduto.editar(id, nome, valor, quantidade, idCategoria);
        res.json(produtoAtualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar produtos!" });
    }
};

const deletarProduto = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await listaProduto.buscarId(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado!"
            });
        }

        await listaProduto.deletar(id);

        res.json({
            mensagem: "Produto deletado!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar produtos!" });
    }
};

module.exports = {
    listarProdutos,
    buscarProdId,
    criarProduto,
    editarProduto,
    deletarProduto
}