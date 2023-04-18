const express = require('express');

const app = express();

app.use(express.json()); // Dentro do app.use(), passamos uma outra função é ela que habilita a possibilidade de recebermos dados pelo corpo (body) de nossa requisição.

//  ──── um array contendo informações ─────────────────────────────────────────────────────
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World!' }));

//  ──── Listando times por meio do método GET ─────────────────────────────────────────────
app.get('/teams', (req, res) => res.status(200).json({ teams })); // Endpoint do tipo GET com a rota /teams. 

// ──── Cadastrando times por meio do método POST ─────────────────────────────────────────
// ? json usado
// ? {
// ?   "id": 3,
// ?   "name": "Clube de Regatas do Flamengo",
// ?   "initials": "FLA"
// ? }
// Endpoint do tipo POST com a rota /teams
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body }; // recebe os dados do corpo na requisição
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// ──── Editando times por meio do método PUT ─────────────────────────────────────────────
// ? json usado
// ? {
// ?   "id": "1",
// ?   "name": "Fortaleza Esporte Clube",
// ?   "initials": "FOR"
// ? }
// Endpoint do tipo PUT com a rota /teams/:id
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

// ──── Deletando times por meio do método DELETE ─────────────────────────────────────────
// Endpoint do tipo DELETE com a rota /teams/:id
app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

// ──── Para fixar ────────────────────────────────────────────────────────────────────────
//? Endpoint do tipo GET com a rota /teams/:id.
app.get('/teams/:id', (req, res) => {
  const team = teams.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(team);
});

module.exports = app;
