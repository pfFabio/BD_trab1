INTRODUÇÃO

esse é um programa experimental feito para apresentar especificas habilidades durante a matéria de banco de dados

usei MySQL para criar o banco de dados e introduzir os valores iniciais

depois com SQLalchemy acessei o banco de dados atraves de arquivos python

então com fastAPI criei a conexão entre o banco de dados e o front-end

finalmente com React criei o front-end para fazer a interface
===============================
o trabalho é primariamente dividio em 3 pastas(banco, Backend, site_pokemon):

-Banco: onde o arquivo SQL guarda a origem do banco de dados e seu desenvolvimento


-Backend:
--conexão: cria a engine onde tudo vai rodar, é impirico saber que o login e senha do banco estão a mostra nesta URL mas devido ao cronograma e a natureza dos dados guardados
            decidi não fazer um sistema de segurança
--modelo: firma a estrutura do objeto que guardarei no banco de dados, como se fosse um molde

--CRUD: Aqui eu crio todas as funções que irão interagir com o banco de dados, assim podemos usar o main com mais clareza

--main: nesse script eu libero o acesso da api pra porta 3000 e crio as rotas para que o front possa acessar as funções



-Site_pokemon: alem dos documentos clássicos do react vale olhar para:
--paginas: essa pasta abriga o CSS e o JSX da home, essa pagina organiza e e chama os outros componentes

--funcoes: dentro da pasta esta o api.js, esse arquivo usa o axios para fazer a leitura da API criada pela pasta backend e usa as rotas criadas no main pra fazer a ponte entre o front e o back

--componentes: podemos observar os 2 componentes que compoem a pagina e seu CSS. ambos usam funções do api.js para enviar e buscar informações do banco de dados atraves da api

==============================
INSTRUÇÕES DE USO

note que neste repositório não esta salvo a pasta do node de forma que será necessárrio instalar ele
entre na pasta backend atraves do terminal e digite "uvicorn main:app --reload" para lançar a API
entre na pasta site_pokemon atraves do terminal e digite "npm start" para lançar a pagina
ela deve abrir automaticamente mas caso não abra use o endereço http://localhost:3000/ no seu navegador de preferência 

===============================
dependências
no backend:
fastapi==0.115.12
pydantic==2.11.2
PyMySQL==1.1.1
SQLAlchemy==2.0.40
uvicorn==0.34.0 

no frontend:
"npm": "^11.2.0",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"

decidi por não usar styled-components pois suas funções internas estavam entrando em conflito com o react

