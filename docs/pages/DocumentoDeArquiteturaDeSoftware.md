<h1 align="center"><b>DOCUMENTO DE ARQUITETURA DE SOFTWARE</b></h1>

### _**VISÃO GERAL**_

   O documento de arquitetura está organizado em informações da seguinte maneira:

   1. Finalidade
   2. Escopo
   3. Configurações, acrônimos e abreviações
   4. Representação Arquitetural
   5. Metas e Restrições da Arquitetura 
   6. Visão de Casos de Uso
   7. Visão Lógica
   8. Visão de Implementção 
   9. Visão de Dados
   10. Referências Bibliográficas 

### 1. _**FINALIDADE**_

   Este documento oferece uma visão geral da arquitetura abrangente do sistema, usando diversas visões arquitetônicas para representar diferentes aspectos do sistema. O objetivo deste documento é capturar e comunicar as decisões ao sistema significativo que foram tomadas em relação ao projeto sobre a carteira de investimentos digital.

### 2. _**ESCOPO**_

   Esse documento serve de guia para outros objetivos de construção software em questão, a partir de um projeto desenvolvido envolvendo outros softwares e plataformas possíveis, a documentos possíveis da construção do projeto, onde é possível ter uma visão de cada tema.


### 3. _**CONFIGURAÇÕES, ACRÔNIMOS E ABREVIAÇÕES**_

| **Sigla / Termo / Acrônimo** | **Significado**                                                           | **Descrição**                                                                                                                                                                                                           |
| ---------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API                          | Application Programming Interface(Interface de programação de aplicações) | A API é um conjunto de definições e protocolos usados no desenvolvimento e na integração de um software, permitindo a interação com outros produtos sem a necessidade de interação com outro software.                  |
| UML                          | Unified Modeling Language(linguagem de modelagem unificada)               | O UML é uma linguagem utilizada para visualizar, especificar, construir e documentar a arquitetura completa de um software, fornecendo informações detalhadas para o desenvolvedor implementar o software.              |
| UI                           | User Interface(interface do usuário)                                      | É a área que está associada a criação das interfaces que interagem diretamente com o usuário do software, promovendo formas fáceis e amigáveis de interação no programa.                                                |
| UX                           | User Experience(Experiência do usuário)                                   | É uma estratégia que tem como objetivo promover uma melhor experiência para os usuários. Isso é, promover ao usuário que a utilização de um site,aplicativo ou produto ocorra sem obstáculos.                           |
| Open Source                  | Código Aberto                                                             | Um software Open Source deve ter sua distribuição livre e gratuita, bem como disponibilização de seu código-fonte.                                                                                                      |
| ORM                          | Object-Relational Mapping(mapeamento objeto-relacional)                   | É uma técnica que permite fazer uma relação dos objetos com os dados que os mesmos representam, dessa forma é possível manipular o banco de dados por meio da linguagem de programação, ao invés da linguagem do banco. |
|Framework|"Estrutura"|Um framework é um conjunto de códigos genéricos capaz de unir trechos de um projeto de desenvolvimento.|
|CRUD|Create(Criar), Read(Ler), Uptade(Atualizar) e Delete(Deletar)|CRUD é uma sequência de funções de um sistema que trabalha com banco de dados, onde é deve ser possível criar, ler, editar e excluir dados.|


### 4. _**REPRESENTAÇÃO ARQUITETURAL**_
- Modelo:
  - **MVC**: O MVC (sigla do termo em inglês Model (modelo) View (visão) e Controller (Controle)) é um padrão de arquitetura de software, em que o programa é separado em camadas bem definidas.
- A Parte Externa:
   - **React**: É um conjunto de bibliotecas de código aberto seguro para a criação de UIs interativas de forma mais fácil. Essa tecnologia foi escolhida pela quantidade de conteúdo disponível na internet, para o treinamento e aprendizado da equipe.Além disso, outro ponto positivo é a comunidade sempre muito presente quanto a dúvidas e práticas.
- Parte Interna:
   - **Node.Js**: O Node.Js é uma tecnologia usada para executar código em JavaScript fora do navegador. Com ele podemos construir aplicações web em geral, desde websites até APIs e microsserviços. Isso é possível graças a união do ambiente de execução do JavaScript pelo próprio motor de interpretação Node.Js e execução do JavaScript presente nos navegadores da web.
   
   - **MySQL**: O MySQL é um dos gerenciadores de **Banco de Dados Relacional** mais famosos para desenvolvimento web, principalmente por ser Open Source, pela sua facilidade de uso e pelo alto desempenho.
   
   - **Sequilize**: O Sequilize é um ORM de Node.JS, que pode ser aplicado em MySQL, e foi selecionado por ser compatível com as tecnologias escolhidas para o projeto e por suas diversas funcionalidades a disposição.

### 5. _**METAS E RESTRIÇÕES DA ARQUITETURA**_
- Metas:
   - **Usabilidade** - O Software deve possuir alta aprendizagem e performance para atender os requisitos elicitados pelo grupo;
   - **Manutenção** - O código e as documentações realizadas devem estar num nível de qualidade, seguindo os padrões do projeto e bibliografia, onde sua manutenção seja fácil de ser realizada.
- Restrições:
  - Software deve ser desenvolvido nas tecnologias;
  - O ambiente de desenvolvimento do software deve funcionar em qualquer sistema operacional Linux;
  - Para usar o Software é necessário Internet;
  - O escopo final deve ser concluído até o final da disciplina;

### 6. _**VISÃO DE CASOS DE USO**_

   Para representar os Casos de Uso do sistema especificado, foi criado um diagrama de casos de uso que exibe os pontos principais do sistema.

   <img src="/GFour-Invext/assets/diagramaDeCasosDeUso.png" width="750" height="500" />


### 7. _**VISÃO LÓGICA**_

- Visão Geral
  
  As ações do usuário são interpretadas pelo Javascript através do componentes React, por meio de eventos. Estes, podem ser de dois tipos:
   1) Eventos com Manipulação de dados:
   
      É feita uma requisição para o backend da aplicação (HTTP Request), a qual faz a validação e manipulação (CRUD) dos dados no Banco, o qual é todo manipulado pelo próprio backend através do framework Sequilize. 
   
      Em alguns casos, há uma interação com uma API da Bolsa de Valores Brasileira (B3). Nessas situações é feita a manipulação com o próprio banco de dados da aplicação, que já fez uma requisição previamente à API da B3.

   2) Eventos sem manipulação de dados:
   
      Ocorrem em interações que ocorrem somente na interface gráfica, dessa forma, o evento é executado somente no componente React do frontend.

  

   <img src="/GFour-Invext/assets/diagrama_de_implementação.png" width="750" height="500" />
  


- Diagrama de Pacotes

   <img src="/GFour-Invext/assets/diagrama_de_pacotes.png" width="750" height="500" />

   <img src="/GFour-Invext/assets/diagrama_de_pacotesMVC.png" width="750" height="500" />

### 8. _**VISÃO DE IMPLEMENTAÇÃO**_
   - Diagrama de Classes:
 
      <img src="/GFour-Invext/assets/diagrama_classe_invext.png" width="750" height="500" />


### 9. _**VISÃO DE DADOS**_

   Essa visão é utilizada para explicitar a organização do banco de dados racional do projeto. É uma visão geral dos dados persistentes, por meio dessa, os objetos do software são mapeados.
   
- Diagrama de Banco de Dados

   <img src="/GFour-Invext/assets/DiagramaDeBancoDeDados.png" width="750" height="500" />



### 10. _**REFERÊNCIAS BIOGRÁFICAS**_

   Arquitetura	de	Software.	Disponível	em: <http://repositorio.aee.edu.br/bitstream/aee/1106/3/TCC2_2018_2_GabrielLeiteDias\_MatheusLimadeAlbuquerque\_Apêndice2.pdf> . Acesso em: 30 de junho de 2022.

   Documento de arquitetura, Acacia. Disponível em: <https://fga-eps-mds.github.io/2019.2-Acacia/#/architecture_document>. Acesso em: 10 de setembro de 2022.

   O que é UML e Diagramas de Caso de Uso: Introdução Prática à UML. Disponível: <http://www.devmedia.com.br/o-que-e-uml-e-diagramas-de-caso-de-uso-introducao-pratica-a-uml/23408>. Acesso em: 03 de julho de 2022.

   ReactJS Disponível em: https://pt-br.reactjs.org/ Acesso em: 03 de julho de 2022.

   Node.JS Disponível em: https://nodejs.org/en/about/ Acesso em: 03 de julho de 2022.
