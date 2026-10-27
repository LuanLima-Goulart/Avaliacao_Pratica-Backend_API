const db = require("../config/db");

const buscarTodos = async () => {
    const [produto] = await db.query(
        `SELECT * FROM produto`
    );

    return produto;
};

const buscarId = async (id) => {
    const [produto] = await db.query(
        `SELECT * FROM produto WHERE id=?`,
        [id]
    );

    return produto[0];
};

const criar = async (nome, valor, quantidade, idCategoria) => {
    const produto = await db.query(
        `INSERT INTO produto (nome, valor, quantidade, idCategoria) values (?,?,?,?);`,
        [nome, valor, quantidade, idCategoria]
    );

    return {
        id: produto.insertId,
        nome,
        valor,
        quantidade,
        idCategoria
    };
};

const editar = async (id, nome, valor, quantidade, idCategoria) => {
    const produto = await db.query(
        `UPDATE produto SET nome=?, valor=?, quantidade=?, idCategoria=? WHERE id=?`,
        [nome, valor, quantidade, idCategoria, id]
    );

    return {
        id: Number(id),
        nome,
        valor,
        quantidade,
        idCategoria
    }
};

const deletar = async(id) => {
    const [produto] = await db.query(
        `DELETE FROM produto WHERE id=?`,
        [id]
    );

    return produto.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarId,
    criar,
    editar,
    deletar
};