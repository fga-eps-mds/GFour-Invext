# GFour- Invext (Gerenciador de Carteira)

- [Video de apresentação do projeto](https://drive.google.com/file/d/1wrIzn__WLxGMot0W1Wr803bQaa8l0IkL/view?usp=sharing)

##  Status do Projeto

<p align="center"> 
 <h3 align="left"> 
     Está finalizado dentro do possível de acordo com o tempo para ser entrege. De fato, ainda há o que ser feito, refatorado e desenvolvido, podendo ser um projeto que continuará sendo feito pela equipe após a finalização da matéria. 
 </h1>
</p>

<br/>  

### 📄 Sobre o projeto
> O Invext é um site 100% gratuito e open source que oferece o gerenciamento de carteira de investimento, facilitando a visualização de sua carteira através de gráficos e tabelas.<br/> 

## ⚙️ Tecnologias utilizadas
<div align="center">
As tecnologias foram determinadas de acordo com a necessidade das atividades a serem desenvolvidas.

Frontend | Backend | Database
:--------- | :------:  | :------:  
[HTML](https://html5.org/)  | [Node Js](https://nodejs.org/en/docs/) | [MySQL](https://dev.mysql.com/doc/)
[CSS](https://www.w3.org/Style/CSS/Overview.en.html) | [JavaScript](https://www.javascript.com/)  
[React](https://pt-br.reactjs.org/)
<br>
<p align="center"> 
  <img  height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img  height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
  <img  height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg">
  <img  height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
  <img  height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  <img  height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
</div>
<br/> 


## 💻 Como Utilizar

>**Warning**
>O Sistema Operacional base para o guia de utilização é o Ubuntu 22.04

### 👨‍💻 Instalação das tecnologias

#### NodeJs
Versão utilizada no projeto: 16.16.0 (LTS)

[Link para instalação do Node](https://nodejs.org/en/download/)

#### Mysql Server
Versão utilizada no projeto: 8.0.30

No terminal, digite:

```
sudo apt-get install mysql-server
```
![image](https://user-images.githubusercontent.com/88516249/182737956-7bf7a0d8-acc7-481a-b116-0ea23f82951a.png)

Após isso, verifique se foi instalado corretamente:

```
systemctl is-active mysql
```
Caso o comando retorne "active", o mysql foi instalado corretamente

### ⚙️ Configurando o MySQL server ⚙️
No terminal do computador, digite:
```
sudo mysql_secure_installation
```
- Pressione "y" para aceitar a validação por senha
- Após isso, digite "0" para o nível de política de validação de senha

Assim, deve aparecer o campo para inserir uma senha. A senha deve ser: 12345678

Pressione "y" para aceitar a senha

E por fim, serão mostradas algumas opções de configuração do mysql, faça como na imagem abaixo:
![image](https://user-images.githubusercontent.com/88516249/182738634-d5195544-6531-4395-9056-b603550fc329.png)

Beleza! Agora só precisamos criar o nosso database, seguindo os seguintes passos:

Entre no mysql pelo terminal, com o seguinte comando:
```
mysql -u root -p
```
Você deve ver a seguinte mensagem:

![image](https://user-images.githubusercontent.com/88516249/182742836-91f52092-5ac8-48b5-82b7-f86a88121b65.png)

Após isso, digite:
```
CREATE DATABASE usuario;
```

E pronto! O banco de dados foi configurado!🎉

### 💽 Rodando a Aplicação
Primeiramente, clone o repositório na máquina local:
```
git clone https://github.com/fga-eps-mds/GFour-Invext.git
```
Após isso entre na pasta do projeto:
```
cd GFour-Invext
```
#### Backend
Para configurar o backend da aplicação, entre na pasta "Back":
```
cd Back
```
Instale todas as dependências:
```
npm install
```
Rode a aplicação:
```
npm start
```
#### Frontend
A partir da pasta do projeto "GFour-Invext na pasta "Front":
```
cd Front
```
Instalar as dependências:
```
npm install
```
Rodar o projeto:
```
npm run dev
```
Será apresentado um link para acessar a aplicação, como no exemplo:

![image](https://user-images.githubusercontent.com/88516249/182744741-1b380baa-973d-4600-9edf-d5c8e56fb32d.png)

Basta colar o link no navegador e aproveitar o projeto!

## Colaboradores

<!-- 
Arquiteto: rosa #FF00FF
PO: azul #
SM: marrom #
Devops: verde-escuro #
Desenvolvedor: amarelo #
-->

<table>
  
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/87709987?v=4" width="100px;" alt="Foto Abritta"/><br>
        <sub>
          <b>Maria Abritta</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/88278278?v=4" width="100px;" alt="Foto Lucas Felipe"/><br>
        <sub>
          <b>Lucas Felipe</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/88175144?v=4" width="100px;" alt="Foto Lucas Gomes"/><br>
        <sub>
          <b>Lucas Gomes</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/62120616?v=4" width="100px;" alt="Foto Leonardo Padre"/><br>
        <sub>
          <b>Leonardo Padre</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/88516249?v=4" width="100px;" alt="Foto Luciano"/><br>
        <sub>
          <b>Luciano Freitas</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/58089751?v=4" width="100px;" alt="Foto Amanda"/><br>
        <sub>
          <b>Amanda Fernandes</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/72047826?v=4" width="100px;" alt="Foto Antonio Junior"/><br>
        <sub>
          <b>Antônio Júnior</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/82157394?v=4" width="100px;" alt="Foto Josué Teixeira"/><br>
        <sub>
          <b>Josué Teixeira</b>
        </sub>
      </a>
    </td>
   </tr>
  <tr>
    
</table>

<br/> 

## Contatos 
<b>lucasfs1007@gmail.com</b>
<b>Amanda.fnodaa@gmail.com</b>
<b>EduardaAbritta@gmail.com</b>
<b>zjosuez@outlook.com</b>
<b>lggomes007@gmail.com</b>
<b>lucianodefreitasmelo@gmail.com</b>
<b>leonardopadre@hotmail.com </b>
<b>juniorleao20@gmail.com</b>


## 📜 Documentação 
🚧
