const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const userController = require('../src/controller/UserController.js');
const ativoController = require('./controller/AtivoController.js');

app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "GFour Invext"
    });
});

app.use('/usuario', userController);
app.use('/ativo', ativoController);

module.exports = app;