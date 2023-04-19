const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

//──── Exercício 4 ───────────────────────────────────────────────────────────────────────
const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    // lê o arquivo pelo fs
    const movies = await fs.readFile(moviesPath);

    // retorna a leitura do arquivo em formato JSON
    return JSON.parse(movies);
  } catch (error) {
    // lança um erro
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

//──── Exercício 10 - bônus ──────────────────────────────────────────────────────────────
//todo Por conta do endpoint(rota), ela precisa ficar acima
app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFile();
    if(q) {
      // passa pra letra minúscula e filtra
      const filteredMovies = movies.filter((element) => element.movie.toLowerCase().includes(q.toLowerCase()));
      return res.status(200).json(filteredMovies);
    }
    return res.status(200).end();
  } catch(e) {
    return res.status(500).send({ message: e.message })
  }
});

//──── Exercício 5 ───────────────────────────────────────────────────────────────────────
app.get('/movies/:id', async (req, res) => {
  try {
    // usa a função criada para pegar o array do arquivo
    const movies = await readFile();

    // acha o id compatível com o passado pela rota /movies/:id
    const movie = movies.find(({ id }) => id === Number(req.params.id));

    // caso obtenha sucesso devolve o status 200
    return res.status(200).json(movie)
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//──── Exercício 6 ───────────────────────────────────────────────────────────────────────
app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
});

//──── Exercício 7 ───────────────────────────────────────────────────────────────────────
app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      // acessamos a chave id do ultimo objeto do array de maneira dinâmica e incrementamos + 1 em seu valor
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    // guardar as informações dos filmes já existentes mais o novo filme que estamos cadastrando, fazendo a conversão (parse) dessas informações de JavaScript para uma string JSON.
    const allMovies = JSON.stringify([...movies, newMovie]);
    // escreve no arquivo, fazendo a modificação
    await fs.writeFile(moviesPath, allMovies);
    // retorna status de modificado com sucesso
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

//──── Exercício 8 ───────────────────────────────────────────────────────────────────────
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    // acha o id correto para fazer a alteração
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    return res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

//──── Exercício 9 ───────────────────────────────────────────────────────────────────────
app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    return res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;
