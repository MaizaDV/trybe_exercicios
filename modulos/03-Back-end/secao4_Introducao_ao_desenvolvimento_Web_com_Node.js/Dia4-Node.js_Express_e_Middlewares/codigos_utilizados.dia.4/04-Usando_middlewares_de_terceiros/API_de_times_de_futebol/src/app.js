const express = require('express');

//*──── Lidando com erros assíncronos ─────────────────────────────────────────────────────
require('express-async-errors'); // não precisa definir uma variável

const morgan = require('morgan');

//*──── Middlewares de segurança ──────────────────────────────────────────────────────────
//  O Helmet pode ajudar a proteger seu aplicativo de algumas vulnerabilidades da Web conhecidas, definindo os cabeçalhos HTTP de forma adequada.
// Ele é uma coleção de várias funções de middleware menores que definem cabeçalhos de resposta HTTP relacionados à segurança.
//? O uso básico desse pacote de middlewares consiste em instalá-lo usando npm install helmet@6.0.1 --save-exact e em seguida adicionar as seguintes linhas no seu código:
const helmet = require("helmet");

const validateTeam = require('./middlewares/validateTeam.js');
const existingId = require('./middlewares/existingId.js')

//*──── Limite de taxa de requisições ─────────────────────────────────────────────────────
// O express-rate-limit é um middleware para limitar solicitações repetidas a APIs e/ou endpoints públicos e pode ser instalado através do comando npm install express-rate-limit@6.7.0 --save-exact. Abaixo temos um exemplo de sua aplicação:
const rateLimit = require("express-rate-limit");

//? Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
  max: 100, //^ número máximo de requisições
  windowMs: 15 * 60 * 1000, //^ intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: "Muitas requisições originadas desta IP" //^ mensagem personalizada quando atinge o limit rate
});

const app = express();

app.use(limiter);

app.use(helmet());

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

//*──── Servindo arquivos estáticos com express.static ────────────────────────────────────
// Um outro middleware que já vem com o Express é o express.static. Ele pega o req.path e usa para procurar um arquivo. Se encontrado, ele já responde com esse arquivo. Se não, ele assume que alguém vai responder essa requisição e simplesmente passa para o próximo.

// app.use(express.static('./images')); //^ configura para procurar o path no diretório ./images

//*──── Interpretando conteúdo JSON com express.json ──────────────────────────────────────
// Ele é um middleware que lê o conteúdo da requisição HTTP, interpreta os conteúdos como JSON e cria no objeto req uma propriedade body com o valor encontrado no conteúdo. 
app.use(express.json());

//*──── Gerando logs da aplicação com morgan ──────────────────────────────────────────────
// Depois de instalar com npm install morgan@1.10.0 --save-exact, basta configurar esse middleware e ele vai emitir uma mensagem para cada requisição recebida:
app.use(morgan('dev'));

//*──── Liberando acesso ao frontend com cors ─────────────────────────────────────────────
// Outro middleware bem comum nas aplicações back-end é o cors, que permite que outras aplicações front-end consumam sua API. O uso básico desse módulo consiste em instalá-lo usando npm install cors@2.8.5 --save-exact e em seguida adicionar as seguintes linhas no seu código: 
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
