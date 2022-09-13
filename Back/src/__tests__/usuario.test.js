const request = require("supertest");
const { response } = require("../app");
const app = require("../app");
const db = require("../models/db");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

describe("Testes de usuario", () => {
  beforeEach(async () => {
    console.log("Iniciando os Testes");
  });
  // afterAll(async () => {
  //   db.close();
  // });
  
  it("E possivel criar um novo usuario", async () => {

    const novo_usuario = {
      nomeCompleto: "asd",
      dataNascimento: "02/02/2002",
      telefone: "61998753416",
      email: "asd223@gmail.com",
      senha: "123456789",
  }
  const novo_usuario2 = {
    nomeCompleto: "asd",
    dataNascimento: "02/02/2002",
    telefone: "61998753416",
    email: "asd25@gmail.com",
    senha: "123456789",
}
    
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

    // expect(response.status).toBe(200);

    const usuario = await User.findOne({ where: { email: novo_usuario.email}  });

    if (usuario === null){
        await User.create(novo_usuario)
        .then(() => {
            return res.json({
                erro: false,
                message: "Usuario cadastrado com sucesso!"
            }).expect.assertions(1)
        }).catch((error) => {
            expect(res.json.status).toBe(400);
            // done(error);
        });
    }

  });

  it("E possivel Logar", async () => {

    const usuario = await User.findOne({
      attributes: ["id", "email", "senha"],
      where: {
          email: "asd7@gmail.com",
         
      }
  });
    const senha = await bcrypt.getSalt(usuario.senha);
    const response2 = await request(app).post("/usuario/login").send({
  
      email: usuario.email,
      senha: senha,
    });

    const usuario2 = null;
    const senha2 = await bcrypt.getSalt(usuario.senha);
    const response3 = await request(app).post("/usuario/login").send({
  
      email: usuario2,
      senha: senha2,
    });
    

  });
  
});
