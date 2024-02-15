const request = require("supertest");
const { response } = require("../app");
const app = require("../app");
const db = require("../models/db");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const AtivosB3 = require("../util/AtivosB3Util");
const { Sequelize } = require('sequelize');

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

  var novo_usuario = {
    nomeCompleto: "asd",
    cpf: "12345678900",
    dataNascimento: "02/02/2002",
    telefone: "61998753416",
    email: "asd@gmail.com",
    senha: "12345678",
  };

  // it("E possivel criar um novo usuario", async () => {
    
  //   const novo_usuario2 = {
  //     nomeCompleto: "asd",
  //     cpf: "98765432109",
  //     dataNascimento: "02/02/2002",
  //     telefone: "61998753416",
  //     email: "asd25@gmail.com",
  //     senha: "123456789",
  //   };

  //   const response = await request(app).post("/usuario/cadastrar").send({
  //     nomeCompleto: novo_usuario.nomeCompleto,
  //     cpf: novo_usuario.cpf,
  //     dataNascimento: novo_usuario.dataNascimento,
  //     telefone: novo_usuario.telefone,
  //     email: novo_usuario.email,
  //     senha: novo_usuario.senha,
  //   });
  //   const response2 = await request(app).post("/usuario/cadastrar").send({
  //     nomeCompleto: novo_usuario2.nomeCompleto,
  //     cpf: novo_usuario2.cpf,
  //     dataNascimento: novo_usuario2.dataNascimento,
  //     telefone: novo_usuario2.telefone,
  //     email: novo_usuario2.email,
  //     senha: novo_usuario2.senha,
  //   });

  //   const usuario = await User.findOne({
  //     where: { email: novo_usuario.email },
  //   });

  //   const userLogin = await request(app).post("/usuario/login").send({
  //     email: novo_usuario.email,
  //     senha: novo_usuario.senha,
  //   });

  //   const userLoginErr = await request(app).post("/usuario/login").send({
  //     email: "",
  //     senha: novo_usuario.senha,
  //   });

  //   const userLoginErr2 = await request(app).post("/usuario/login").send({
  //     email: novo_usuario.email,
  //     senha: "33625919595",
  //   });
  //   await AtivosB3.updateAtivosB3();
  // });

  

  it('Deve cadastrar um novo usuário com cpf', async () => {
    
    const response = await request(app).post("/usuario/cadastrar").send({
      nomeCompleto: novo_usuario.nomeCompleto,
      cpf: novo_usuario.cpf,
      dataNascimento: novo_usuario.dataNascimento,
      telefone: novo_usuario.telefone,
      email: novo_usuario.email,
      senha: novo_usuario.senha,
    });

    const usuario = await User.findOne({
      where: { email: novo_usuario.email },
    });
    
    expect(usuario).toBeDefined();
    expect(usuario.cpf).toBe(novo_usuario.cpf);
  });
  
  it('CPF deve ter 11 caracteres', async () => {
    const usuario = await User.findOne({
      where: { email: novo_usuario.email },
    });
    
    usuario.set('cpf', 'aaa');

    // verifica se a validação do CPF lança um erro
    await expect(usuario.save()).rejects.toThrow('O CPF deve ter 11 caracteres');
    
  });

  it('CPF deve ter caracteres numéricos', async () => {
    const usuario = await User.findOne({
      where: { email: novo_usuario.email },
    });
    
    usuario.set('cpf', '1234567890a');

    // verifica se a validação do CPF lança um erro
    await expect(usuario.save()).rejects.toThrow('O CPF deve conter apenas caracteres numéricos');
    
  });
  
  it('CPF deve ser único para cada usuário', async () => {
    // criar um novo usuário com um CPF válido
    const novo_usuario1 = {
      nomeCompleto: "Usuario 1",
      cpf: "12345678901",
      dataNascimento: "02/02/2002",
      telefone: "61998753416",
      email: "usuario1@gmail.com",
      senha: "12345678",
    };
    await User.create(novo_usuario1);

    // tentar criar um segundo usuário com o mesmo CPF
    const novo_usuario2 = {
      nomeCompleto: "Usuario 2",
      cpf: "12345678901",
      dataNascimento: "03/03/2003",
      telefone: "61998753417",
      email: "usuario2@gmail.com",
      senha: "87654321",
    };

    let error;
    try {
      await User.create(novo_usuario2);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(Sequelize.UniqueConstraintError);
    
  });

  afterAll(async () => {
    // exclui todos os usuários criados durante a sessão de testes
    await User.destroy({ where: {} });
  });

  
});
