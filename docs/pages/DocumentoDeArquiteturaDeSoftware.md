<!-- <p align="center">
  <img 
    src="https://github.com/fga-eps-mds/GFour-Invext/blob/main/docs/assets/msg1187136684-18592.jpg"
    alt: 'Logo Invext'
    width="1000"
    height="150"
  />
</p> -->

<h1 align="center"><b>DOCUMENTO DE ARQUITETURA DE SOFTWARE</b></h1>

&nbsp;

<!-- <p align="center">
  <img 
    src="../assets/Images/FinancialImage.jpeg"
    alt: 'Homem vendo o celular e gráfico financeiro'
    width="765"
    height="380"   
  />
</p> -->

---

## **INTRODUÇÃO**

\- - - - X
1. ### _**VISÃO GERAL**_

   O documento de arquitetura está organizado em informações da seguinte maneira:

   1. Finalidade
   2. Escopo
   3. Configurções, acrônimos e abreviações
   4. Referências Biográficas
   5. Visão Geral
   6.  Representação Arquitetural
   7.  Visão de Implantação
   8.  Visão de implementação
   9.  Tamanho e Desempenho
   10. Qualidade

2. ### _**FINALIDADE**_

   Este documento oferece uma visão geral da arquitetura abrangente do sistema, usando diversas visões arquitetônicas para representar diferentes aspectos do sistema. O objetivo deste documento é capturar e comunicar as decisões ao sistema significativo que foram tomadas em relação ao projeto sobre a carteira digital.

3. ### _**ESCOPO**_

   Esse documento serve de guia para outros objetivos de construção software em questão, a partir de um projeto desenvolvido envolvendo outros softwares e plataformas possíveis, a documentos possíveis da construção do projeto, onde é possível ter uma visão de cada tema.

4. ### _**CONFIGURAÇÕES, ACRÔNIMOS E ABREVIAÇÕES**_

   - API: É um acrônimo para Application Programming Interface(Interface de programação de aplicações). A API é um conjunto de definições e protocolos usados no desenvolvimento e na integração de um software, permitindo a interação com outros produtos sem a necessidade de interação com outro software.
   - UML: É um acrônimo para Unified Modeling Language(linguagem de modelagem unificada). O UML é uma linguagem utilizada para visualizar, especificar, construir e documentar a arquitetura completa de um software, fornecendo informações detalhadas para o desenvolvedor implementar o software.
   - UI: É uma sigla para User Interface(interface do usuário). É a área que está associada a criação das interfaces que interagem diretamente com o usuário do software, promovendo formas fáceis e amigáveis de interação no programa.
   - UX: É uma sigla para User Experience(Experiência do usuário). É uma estratégia que tem como objetivo promover uma melhor experiência para os usuários. Isso é, promover ao usuário que a utilização de um site,aplicativo ou produto ocorra sem obstáculos

5.  ### _**REPRESENTAÇÃO ARQUITETURAL**_

- A Parte Dianteira:
   - React: É um conjunto de bibliotecas de código aberto seguro para a criação de UIs interativas de forma mais fácil. Toda lógica é escrita em JavaScript da Repassagem de dados ao longo da passagem de dados. Essa tecnologia foi escolhida por quantidade de conteúdo disponível na internet, para o treinamento e aprendizado da equipe, outro ponto positivo é a comunidade sempre muito presente quanto a dúvidas e práticas.
- Parte Interna:
   - Node.Js: O Node.Js é uma tecnologia usada para executar código em JavaScript fora do navegador. Com ele podemos construir aplicações web em geral, desde websites até APIs e microsserviços. Isso é possível graças a união do ambiente de execução do JavaScript pelo próprio motor de interpretação Node.Js e execução do JavaScript presente no Google Chrome chamado V8.

6. ### _**METAS E RESTRIÇÕES DA ARQUITETURA**_
- Restrições:
  - Software deve ser desenvolvido nas tecnologias;
  - O ambiente de desenvolvimento do software deve funcionar tanto em windows, linux e MacOS;
  - Para usar o Software é necessário Internet;
  - O escopo final deve ser concluído até o final da disciplina;
- Metas:
   - **Usabilidade** - O Software deve possuir alta aprendizagem e performance para atender os requisitos elicitados pelo grupo;
   - **Manutenção** - O código e as documentações realizadas devem estar num nível de qualidade, seguindo os padrões do projeto e bibliografia, onde sua manutenção seja fácil de ser realizada.

7. ### _**VISÃO DE CASOS DE USO**_

   Para representar os Casos de Uso do sistema especificado, foi criado um diagrama de casos de uso que exibe os pontos principais do sistema.

8. ### _**VISÃO LÓGICA**_

   A visão lógica descreve como o sistema é compatível, em termos de unidade e implementação. Mostra como é uma organização conceitual do sistema em termos de camadas, pacotes, classes e interfaces. O relacionamento entre os elementos mostra como dependências e interface, os relacionamentos parte assim por diante.

- Diagrama de Aulas

   O diagrama representa como as classes serão programadas, os principais objetos ou realmente como diagrama completo pode ser encontrado na parte de Diagrama de Classes na wiki do projeto.

- Diagrama de Pacotes

   O diagrama de pacotes é um diagrama estático que possibilita uma organização mais adequada ao sistema que representa uma versão de pacotes. O diagrama completo pode ser encontrado na parte de Diagrama de Pacotes da wiki do projeto.

- Diagrama de Comunicação

   O diagrama de comunicação mostra partes de comunicação entre objetos e/ou (representadas pela lifelines usando mensagens sequenciadas um arranjo) de forma livre. O diagrama completo pode ser encontrado na parte de Diagrama de Comunicação na wiki do projeto.

9. ### _**VISÃO DE PROCESSOS**_
- Visão geral:

   De tempo-de-execução como o sistema de execução de tempo-de-execução é construído na forma de um conjunto de tempo-de-execução que tem como modelo de comportamento de execução. Uma estrutura de tempo-de-execução normalmente tem semelhança com uma estrutura de código. Consistência de redes de comunicação rápida de objetos de comunicação.

- Diagrama de Sequência:

   O diagrama de sequência é uma das soluções fornecidas pela UML, que descrevem quimicamente o ciclo de vida do sistema em desenvolvimento. Descrição detalhada. O foco principal deste diagrama é descrito como troca entre os componentes do sistema e módulos que existem de uma maneira determinada e mensagens entre si. Os ciclos de vida podem ser aulas, atores ou mesmo abstrações que ocorrem entre aulas.

10. ### _**VISÃO DE IMPLANTAÇÃO**_
      Descreve como a aplicação é disponibilizada para uso, seja em um ambiente de desenvolvimento, para testes ou em produção.

11. ### _**VISÃO DE IMPLEMENTAÇÃO**_
   - Visão Geral:

Descreve como os defensores do desenvolvimento estão organizados no sistema de arquivos. Os elementos são arquivos e pastas(Quaisquer itens de configuração). Isto inclui as propriedades de desenvolvimento e os riscos de implantação.

   - Diagramas de Aulas:

É uma representação da estrutura e relações das classes que servem de modelo para os objetos. Consiste em um conjunto de objetos com as mesmas características. Dessa forma, consegue-se identificar os objetos agrupá-los, de forma a encontrar suas classes conhecidas

12. ### _**VISÃO DE DADOS**_

   Essa visão é utilizada em projetos onde existe alguma camada de duração, geralmente, um banco de dados racional. É uma visão geral dos dados persistentes, por meio dessa, objetos são mapeados dados persistentes. Essa visão é visualizada com o Modelo Entidade Relacionamento, no caso de banco de dados relacionais.

13. ### _**DIAGRAMA DE CLASSES**_
    Essa é a primeira versão das classes e métodos adotados no diagrama de classe do projeto Invext.
    
    <img src="/GFour-Invext/assets/diagrama_de_classes.png" width="750" height="500" />

14. ### _**DIAGRAMA DE PACOTES**_
    Essa é a primeira versão da implementação do diagrama de pacotes do projeto Invext.

    <img src="/GFour-Invext/assets/diagrama_de_pacotes.png" width="750" height="500" />

    <img src="/GFour-Invext/assets/diagrama_de_pacotesMVC.png" width="750" height="500" />

15. ### _**TAMANHO E DESEMPENHO**_

   Descrição do desempenho e das características do software que impactam na arquitetura de software.

- Requisitos Mínimos
   - É necessário possuir conexão com a internet;
   - Para desenvolver, possuir: Windows, linux ou MacOS;



16. ### _**QUALIDADE**_

   Qualidade de software tem como objetivo atingir os requisitos especificados durante a elaboração do projeto, e como expectativas de usuários de clientes e diretamente relacionados com: Escalabilidade, Manutenção, Confiabilidade, Usabilidade e assim por diante.

17. ### _**REFERÊNCIAS BIOGRÁFICAS**_

   Arquitetura	de	Software.	Disponível	em: <http://repositorio.aee.edu.br/bitstream/aee/1106/3/TCC2_2018_2_GabrielLeiteDias\_MatheusLimadeAlbuquerque\_Apêndice2.pdf> . Acesso em: 30 de abril de 2021.

   O que é UML e Diagramas de Caso de Uso: Introdução Prática à UML. Disponível: <http://www.devmedia.com.br/o-que-e-uml-e-diagramas-de-caso-de-uso-introducao-pratica-a-uml/23408>. Acesso em: 03 de maio de 2021.

   ReactJS Disponível em: https://pt-br.reactjs.org/ Acesso em: 03 de maio de 2021.

   Node.JS Disponível em: https://nodejs.org/en/about/ Acesso em: 03 de maio de 2021.
