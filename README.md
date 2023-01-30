  Uma API utilizando a arquitetura MSC (model-service-controller)!

  A API a ser construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas utilizando o banco de dados MySQL para a gestão de dados. Além disso, a API deve ser RESTful.

 Rodando no Docker:

Seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  - Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
  - Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
  - A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code.

  - Use o comando `docker exec -it store_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  - Instale as dependências [**Caso existam**] com `npm install`
  

  Rodando sem Docker:

  - Instale as dependências [**Caso existam**] com `npm install`

  - Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem.
  - Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
  - A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

Passos do projeto:



01 - Crie endpoints para listar produtos

02 - Crie endpoint para cadastrar produtos

03 - Crie validações para produtos

04 - Crie endpoint para validar e cadastrar vendas

05 - Crie endpoints para listar vendas

06 - Crie endpoint para atualizar um produto

07 - Crie endpoint para deletar um produto

08 - Crie endpoint para deletar uma venda

09 - Crie endpoint para atualizar uma venda

10 - Crie endpoint products/search?q=searchTerm

11 - desenvolver testes

