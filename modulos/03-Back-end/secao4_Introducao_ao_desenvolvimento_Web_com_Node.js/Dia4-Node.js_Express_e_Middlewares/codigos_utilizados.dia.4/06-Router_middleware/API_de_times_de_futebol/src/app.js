const express = require('express');
//?──── Lidando com erros assíncronos ─────────────────────────────────────────────────────
require('express-async-errors'); // não precisa definir uma variável
const morgan = require('morgan');

const app = express();

//?──── Gerando logs da aplicação com morgan ──────────────────────────────────────────────
app.use(morgan('dev'));
//?──── Servindo arquivos estáticos com express.static ────────────────────────────────────
// app.use(express.static('./images')); //^ configura para procurar o path no diretório ./images
//?──── Interpretando conteúdo JSON com express.json ──────────────────────────────────────
app.use(express.json());

//*──── Middlewares de segurança ──────────────────────────────────────────────────────────
const helmet = require("helmet");

const validateTeam = require('./middlewares/validateTeam.js');
const existingId = require('./middlewares/existingId.js')

//*──── Limite de taxa de requisições ─────────────────────────────────────────────────────
const rateLimit = require("express-rate-limit");

//? Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
  max: 100, //^ número máximo de requisições
  windowMs: 15 * 60 * 1000, //^ intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: "Muitas requisições originadas desta IP" //^ mensagem personalizada quando atinge o limit rate
});

app.use(limiter);

app.use(helmet());

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

//*──── Liberando acesso ao frontend com cors ─────────────────────────────────────────────
const cors = require('cors');
app.use(cors());

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  return res.status(200).json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  return res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  return res.sendStatus(204);
});

//*──── Retornando 404 com um middleware global customizado ───────────────────────────────
// o Express já vem com um middleware de erro pronto para lidar com a maior parte dos casos comuns. Foi esse middleware que respondeu todos os erros que você experimentou hoje.
// Por padrão, ele responde com HTML para qualquer erro. No entanto, se você quiser customizar sua resposta para rotas não tratadas, basta escrever um middleware global no final das configurações do seu app. Por exemplo, aqui vamos evitar enviar o HTML:

// se ninguém respondeu, vai cair neste middleware
app.use((req, res) => res.sendStatus(404));

module.exports = app;
