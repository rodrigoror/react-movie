# react-movie
a simple test to manage modules and prototype of React and NodeJS

### Executar o Projeto

#### Iniciar o Backend

Navegue até a pasta backend:
`cd backend`

Crie um arquivo com o nome `.env`
Adicione a chave no arquivo
`TMDB_API_KEY=TOKEN`

Cadastre-se em https://developer.themoviedb.org/reference/intro/authentication

Inicie o servidor:
`node index.js`
#### Iniciar o Frontend
Navegue até a pasta frontend:
`cd ../frontend`
Inicie o servidor de desenvolvimento:
`npm start`

### Resultado
Acesse o frontend em http://localhost:3000.
O frontend exibirá um catálogo de filmes, buscando os dados do backend, que por sua vez consome a API do TMDb.