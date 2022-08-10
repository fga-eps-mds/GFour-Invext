## Como contribuir?
Antes de realizar uma contribuição, conheça um pouco sobre o objetivo do projeto na nossa documentação.

Contribuições ao projeto são muito bem-vindas. Para manter um projeto bem organizado, caso seja um contribuidor externo, faça um fork do repositório e submeta as modificações através de pull request;

Caso encontre um bug ou tenha alguma sugestão de melhoria ao projeto, siga os passos abaixo:

1. Verifique se já existe a issue no repositório;
1. Caso não exista nenhuma issue relacionada, crie uma issue;
1. Escolha o template de issue;
1. Preencha a issue de acordo com a orientação do template;
1. Defina as labels que são pertinentes ao problema ou sugestão;
1. Se aplicável, defina os responsáveis pela issue, o milestone e o projeto.
1. Retire dúvidas através da issue.

Para contribuir com o projeto, observe as políticas adotadas em relação a padronização e organização de código e documentação.

Documentação: [Acesso a documentação](https://fga-eps-mds.github.io/GFour-Invext/#/pages/DocumentoDeArquiteturaDeSoftware)

Issues: [Acesso as issues](https://github.com/fga-eps-mds/GFour-Invext/issues)

## Política de Branches

1. Novas branchs devem ser criadas a partir da dev;
1. Depois de fazer modificações na branch, submete-a por pull request para integrar a branch secundária (Develop);
1. Após aprovado ou recusado o pull request, apague a branch.

### **main:**
main é a branch de produção, onde se encontra a versão que estará disponível para utilização no mercado.

### **Develop:**
develop é a branch de homologação, onde se encontra a versão mais atualizada do projeto.

### **Nome das Branches**
Para criar novas branchs crie com a seguinte estrutura:

      [número-da-issue]-<nome-significativo-da-branch-separada-por-hífens-com-letras-minusculas-sem-acento>

## Política de Commits
Para realizar commits, utilize o template abaixo:

            git commit -m "tipo: Exemplo de commit"

- Os commits devem utilizar o tempo presente. Exemplo: "Adiciona funcionalidade" e não "Adicionada a funcionalidade".

- Escreva o commit de maneira objetiva, descrevendo brevemente o que foi implementado, alterado, etc.

- Utilize os comentários da issue para detalhar mais sobre o que etá sendo implementado.

Os tipos de commits podem ser:
- **feat** (novo recurso)
- **fix** (correção de bug)
- **refactor** (refatorando o código de produção)
- **style** (formatação, falta de ponto e vírgula, etc; sem alteração de código)
- **docs** (alterações na documentação)
- **teste** (adicionando ou refatorando testes; sem alteração do código de produção)

## Política de Merges e Pull Requests
### Pull Requests:
Pull requests serão realizados para controle de estabilidade das branches:

- main
- Develop

Quando disponível uma nova release ou funcionalidade, esta será integrada através de pull request na branch main.

Durante a criação de um pull request, deve-se observar o template definido no repositório.

Após a revisão do código e aceitação do pull request, deve ser realizado o merge.

## Code Review
Na revisão de código de pull request, observe os pontos abaixo:

- O pull request deve ser aceito por pelo menos um membro da equipe;
- O revisor deve clonar a branch do pull request e verificar se as modificações de código ou documentação são coerente;
- Em caso de aceitação do pull request, deve-se fazer a aprovação e realizar o merge;
- Caso o pull request esteja faltando algum requisito, deve-se informar ao contribuidor as mudanças necessárias;
Caso o pull request não faça sentido, já tenha sido resolvido ou seja duplicado, deve ser fechado e feito um comentário a respeito.
