const request = require("supertest");
const app = require("../app");
const db = require("../models/db");
const auth = require("../middleware/auth");

describe("Teste dos ativos", () => {
  beforeEach(async () => {
    console.log("Iniciando os Testes");
  });
  afterAll(async () => {
    db.close();
  });

  it("Deve criar um ativo", async () => {
    const logaUsuario = await request(app).post("/usuario/login").send({
      email: "teste1@gmail.com",
      senha: "12345678",
    });

    const ativoCadastra = await request(app).post("/ativo/cadastrar").send({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyMTIzODI3fQ.3lQBO3qx2fx2f7XjREYwnHnnuCwpjkd9d34ngS65s08",
      nomeAtivo: "ITAUSA",
      preco: 30.00,
      quantidade: 10,
      data: "02/02/2022",
      execucao: "compra",
      sigla: "ITAU"
    });

    const ativoCadastraErr = await request(app).post("/ativo/cadastrar").send({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaW",
      nomeAtivo: "ITAUSA",
      preco: 30.00,
      quantidade: 10,
      data: "02/02/2022",
      execucao: "venda",
      sigla: "ITAU"
    });

  });

  it('Vender um ativo', async () => {
    const ativoVenda = await request(app).post("/ativo/vender").send({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyMTIzODI3fQ.3lQBO3qx2fx2f7XjREYwnHnnuCwpjkd9d34ngS65s08",
      nomeAtivo: "ITAUSA",
      preco: 30.00,
      quantidade: 10,
      data: "03/02/2022",
      execucao: "venda",
      sigla: "ITAU"
    });

    const ativoVenda2 = await request(app).post("/ativo/vender").send({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyMTIzODI3fQ.3lQBO3qx2fx2f7XjREYwnHnnuCwpjkd9d34ngS65s08",
      nomeAtivo: "ITAUSA",
      preco: 30.00,
      quantidade: 500,
      data: "03/02/2022",
      execucao: "venda",
      sigla: "ITAU"
    });
  });

  it('Deve mostrar o historico', async () => {
    const ativoHistorico = await request(app).get("/ativo/historico").send({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyMTIzODI3fQ.3lQBO3qx2fx2f7XjREYwnHnnuCwpjkd9d34ngS65s08"
    });
    // expect(ativoHistorico.statusCode).toBe(200);
  });

  it('Deve editar o ativo', () => {
    
  });

});
