const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const PORT = process.env.API_PORT;

const produtoRoute = require("./routes/produtosRoute");
const categoriaRoute = require("./routes/categoriaRoute");

app.use(express.json());
app.use("/produto", produtoRoute);
app.use("/categoria", categoriaRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});