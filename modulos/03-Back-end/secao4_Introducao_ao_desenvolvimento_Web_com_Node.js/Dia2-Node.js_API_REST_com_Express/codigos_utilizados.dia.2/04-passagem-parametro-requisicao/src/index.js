const express = require('express');

const app = express();
const port = 3000;

app.use(express.json()); //^ permite ler o corpo da requisição

//──── Query string ──────────────────────────────────────────────────────────────────────
app.get('/search', (req, res) => {
  //? http://localhost:3000/search?name=maiza&age=22
  //^ req.query sempre serão valores do tipo string
  console.log(req.query.name);
  console.log(req.query.age);
  res.status(200).send('Search done!');
});

//──── Parâmetros de rota ────────────────────────────────────────────────────────────────
app.post('/people/:id/:name', (req, res) => {
  //? http://localhost:3000/people/1/maiza
  //^ req.params sempre serão valores do tipo string
  console.log(req.params.id);
  console.log(req.params.name);
  res.status(200).send('People ok!');
});

//──── Corpo da requisição ───────────────────────────────────────────────────────────────
app.post('/tasks', (req, res) => {
  //? {
  //?  "name": "Maiza",
  //?  "age": 22
  //? }
  console.log('Got body:', req.body);
  console.log(req.body.name);
  console.log(req.body.age);
  res.status(200).send('Tasks ok!');
});

app.listen(port, () => {
  console.log(`Aplicação execução na porta ${port}`);
});
