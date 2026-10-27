const db = require("../config/db");

const buscarTodos = async () => {
    const [categoria] = await db.query(
        `SELECT * FROM categoria`
    );

    return categoria;
};

const buscarId = async (id) => {
    const [categoria] = await db.query(
        `SELECT * FROM categoria WHERE id=?`,
        [id]
    );

    return categoria[0];
};

const criar = async (nome) => {
    const categoria = await db.query(
        `INSERT INTO categoria (nome) values (?);`,
        [nome]
    );

    return {
        id: categoria.insertId,
        nome
    };
};

const editar = async (id, nome) => {
    const categoria = await db.query(
        `UPDATE categoria SET nome=? WHERE id=?`,
        [nome, id]
    );

    return {
        id: Number(id),
        nome
    }
};

const deletar = async(id) => {
    const [categoria] = await db.query(
        `DELETE FROM categoria WHERE id=?`,
        [id]
    );

    return categoria.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarId,
    criar,
    editar,
    deletar
};