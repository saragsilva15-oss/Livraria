## API Reference

### Livros

#### GET /Livros

- **Descrição**:Obtém uma lista de Livros
- **Parameters**: ?titulo="tituloExemplo obtém um filtro do livro buscando por titulo
- **Response**: Array de Livros

#### Post /Livros

- **Descrição**: Cadastra um novo livro
- **Body**: 
```
{
	"tituloLivro":"Diario de um banana",
	"anoLivro":"2010",
	"qtdeLivro":"20",
	"nomeAutor":"Jeff Kinney"
}
```
- **Response**:
```
{
    "message":"Livro cadastrado com sucesso"
}
```

### Autores

#### GET /autores

- **Descrição**:Obtém uma lista de Autor
- **Response**: Array de autores

#### Post /autores

- **Descrição**: Cadastra um novo Autor
- **Body**: 
```
{
	"nomeAutor":"homero",
	"nacionalidadeAutor":"grecia"
}
```
- **Response**:
```
{
    "message":"Autor cadastrado com sucesso"
}
```