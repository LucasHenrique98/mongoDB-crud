<h1 align='center'>MongoDB API CRUD</h1>

<p align='center'>Esta aplicação teve o intuito de consumir um banco de dados através do MongoDB Atlas e fazer um CRUD através dos endpoints criados</p>



:hammer_and_wrench: Métodos:

- GET/customer : Retornará todas os documentos da coleção 'customers' do banco de dados 'sample_analytics' contendo os camps id, name e username.
- POST/customer : Criará um novo documento na coleção tendo como pré requisito os campos name e username.
- PUT/customer/:id : Atualizará um documento com base no id passado nos parâmetros da requisição.
- DELETE/customer/:id : Irá deletar um documento com base no id passado nos parâmetros.

