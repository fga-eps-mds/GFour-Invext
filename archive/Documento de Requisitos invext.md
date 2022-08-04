# **MÉTODOS  PARA  DESENVOLVIMENTO  DE  SOFTWARE**

Faculdade UnB Gama Profa. Carla Rocha

INVEXT - GFOUR

## **LISTA DE OBJETOS, ATRIBUTOS E MÉTODOS**
### **Usuário**
- ***Atributos:*** nome completo, id, senha, cpf, rg, endereço, telefone, Patrimônio, Rendimento.
- ***Métodos***: cadastrar usuário, editar informações, excluir conta.
### **Investimento**
- ***Atributos:*** tipoMoeda (Real, Euro, Dólar...), tipo(Renda Variável, Renda Fixa), categoria(Ação, Fundo Imobiliário, Stock, CDB, Poupança, Tesouro Direto), valor, quantidade, descrição.
- ***Métodos:*** calcular patrimônio geral, calcular rentabilidade ativo, calcular rentabilidade geral, mudarMoeda, cadastrar, excluir e editar.

## **LISTA DE FUNCIONALIDADES DO SOFTWARE**
### **Requisitos Funcionais**
- **RF1:** Deve ser possível realizar o CRUD de Usuário.
- **RF2:** Deve ser possível realizar o CRUD de Investimento.
- **RF3:** Deve ser possível inserir itens, excluir e efetuar  o gerenciamento de carteira de investimentos.
- **RF4:** Deve ser possível inserir itens, editar lista e excluir da Rentabilidade.
- **RF5:** Deve ser possível realizar a busca de investimentos no sistema por valor, quantidade ou descrição.
- **RF6:** Deve ser possível realizar a busca de melhores investimentos no sistema pela sua rentabilidade. 
- **RF7:** Deve ser possível realizar visualização de notícias do mercado de Investimentos(consumir alguma API, inserir algumas notícias específicas no banco de dados ou minerar essas notícias de algum site (infomoney, xp …)).
- **RF8:** Deve ser possível buscar a cotação das principais moedas
- **RF9:** Deve ser possível classificar a carteira por setorização

### **Requisitos Não Funcionais**
- **RNF1:** O software deve ser desenvolvido Front-End: HTML, CSS e React.Js.
- **RNF2:** O software deve ser desenvolvido Back-End: JavaScript, Node.Js.
- **RNF3:** O software deve ser desenvolvido Base de dados: MySQL.
- **RNF4:** A interação com o usuário deve ser feita por meio de interface gráﬁca.
- **RNF5:** O software desenvolvido será para ambiente web.
- **RFN6:** O valor dos produtos devem estar em Real(R$), Dólar($) e Euro(€).

### **Prioridade dos Requisitos**
| Prioridade | Requisitos |
|--- |--- |
| 1 | RF1, RF2, RF3, RF4, RF5, RF6, RF8, RF9, RNF1, RFN2, RFN3, RFN4, RNF5.|
|2 | RNF6, RF7.|

