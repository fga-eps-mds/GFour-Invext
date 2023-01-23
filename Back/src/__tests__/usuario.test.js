const request = require("supertest");
const { response } = require("../app");
const app = require("../app");
const db = require("../models/db");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const AtivosB3 = require("../util/AtivosB3Util");

describe("Testes de usuario", () => {
  beforeEach(async () => {
    console.log("Iniciando os Testes");
  });
  // afterEach(async () => {
  //   await app.close();
  // })
  afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error  
  });
  jest.setTimeout(90000);
  it("E possivel criar um novo usuario", async () => {
    var novo_usuario = {
      nomeCompleto: "asd",
      dataNascimento: "02/02/2002",
      telefone: "61998753416",
      email: "asd@gmail.com",
      senha: "123456789",
    };
    const novo_usuario2 = {
      nomeCompleto: "asd",
      dataNascimento: "02/02/2002",
      telefone: "61998753416",
      email: "asd25@gmail.com",
      senha: "123456789",
    };

    const response = await request(app).post("/usuario/cadastrar").send({
      nomeCompleto: novo_usuario.nomeCompleto,
      dataNascimento: novo_usuario.dataNascimento,
      telefone: novo_usuario.telefone,
      email: novo_usuario.email,
      senha: novo_usuario.senha,
    });
    const response2 = await request(app).post("/usuario/cadastrar").send({
      nomeCompleto: novo_usuario2.nomeCompleto,
      dataNascimento: novo_usuario2.dataNascimento,
      telefone: novo_usuario2.telefone,
      email: novo_usuario2.email,
      senha: novo_usuario2.senha,
    });

    const usuario = await User.findOne({
      where: { email: novo_usuario.email },
    });

    const userLogin = await request(app).post("/usuario/login").send({
      email: novo_usuario.email,
      senha: novo_usuario.senha,
    });

    const userLoginErr = await request(app).post("/usuario/login").send({
      email: "",
      senha: novo_usuario.senha,
    });

    const userLoginErr2 = await request(app).post("/usuario/login").send({
      email: novo_usuario.email,
      senha: "33625919595",
    });
    await AtivosB3.updateAtivosB3();
  });

  
});
