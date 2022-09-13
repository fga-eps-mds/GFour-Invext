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
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq9mmzR67YH_kmIGCMPdc-QJdxzcXC6fE",
      nomeAtivo: "ITAUSA",
      preco: 30.0,
      quantidade: 100,
      data: "02/02/2022",
      execucao: "compra",
      sigla: "ITAU",
    });

    const ativoCadastraErr = await request(app).post("/ativo/cadastrar").send({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq",
      nomeAtivo: "ITAUSA",
      preco: 30.0,
      quantidade: 20,
      data: "02/02/2022",
      execucao: "compra",
      sigla: "ITAU",
    });

  });

  it("Vender um ativo", async () => {
    const ativoVenda = await request(app).post("/ativo/vender").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq9mmzR67YH_kmIGCMPdc-QJdxzcXC6fE",
      nomeAtivo: "ITAUSA",
      preco: 30.0,
      quantidade: 10,
      data: "03/02/2022",
      execucao: "venda",
      sigla: "ITAU",
    });

    const ativoVenda2 = await request(app).post("/ativo/vender").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq9mmzR67YH_kmIGCMPdc-QJdxzcXC6fE",
      nomeAtivo: "ITAUSA",
      preco: 40.0,
      quantidade: 500,
      data: "03/02/2022",
      execucao: "venda",
      sigla: "ITAU",
    });
  });

  it("Deve mostrar o historico", async () => {
    const ativoHistorico = await request(app).post("/ativo/historico").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq9mmzR67YH_kmIGCMPdc-QJdxzcXC6fE",
    });
    // expect(ativoHistorico.statusCode).toBe(200);
  });

  it("Deve editar o ativo", async () => {
    const ativoEdita = await request(app).post("/ativo/editar").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq9mmzR67YH_kmIGCMPdc-QJdxzcXC6fE",
      sigla: "ITAU",
      preco: 30.0,
      quantidade: 2,
    });
  });

  it("Deve calcular o patrimonio", async () => {
    const ativoPatrimonio = await request(app).post("/ativo/patrimonio").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq9mmzR67YH_kmIGCMPdc-QJdxzcXC6fE",
    });
  });

  it("Calcula rentabilidade", async () => {
    const ativoRentabilidade = await request(app)
      .post("/ativo/rentabilidade")
      .send({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq9mmzR67YH_kmIGCMPdc-QJdxzcXC6fE",
      });
  });

  it("Deve buscar os ativos", async () => {
    const ativoBusca = await request(app).get("/ativo/buscaativos");
  });

  it("Deve excluir um ativo", async () => {
    const ativoExclui = await request(app).post("/ativo/excluir").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMTAyMDIxfQ.2-V1RYUu3Zlq9mmzR67YH_kmIGCMPdc-QJdxzcXC6fE",
    });
  });
});
