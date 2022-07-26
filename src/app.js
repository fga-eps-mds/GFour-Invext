const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require('../models/db');
const User = require('../models/User');

app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "GFour Invext"
    });
});

app.post("/cadastrar", async (req, res) => {
    console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            message: "Usuario cadastrado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            message: "Usuario nao cadastrado com sucesso"
        })
    });
})

module.exports = app;