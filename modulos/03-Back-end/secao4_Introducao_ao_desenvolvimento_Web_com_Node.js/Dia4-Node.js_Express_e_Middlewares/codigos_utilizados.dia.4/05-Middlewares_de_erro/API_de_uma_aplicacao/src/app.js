const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();

app.use(express.json());

//^──── emprego de middlewares para tratamento de erros ───────────────────────────────────
//* É importante ressaltar que essa lógica deve estar dentro do escopo de um try catch, pois caso aconteça algum erro, o catch irá passá-lo como parâmetro para nosso next.
app.get('/teams', async (_req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './teams.json'));
    const teams = JSON.parse(data);
    return res.status(200).json({ teams })
  } catch (error) {
    //* Quando passamos qualquer parâmetro para o next, o Express entende que é um erro e deixa de executar middlewares comuns, passando a execução para o próximo middleware de erro registrado para aquela rota, router ou aplicação.
    return next(error);
  }
});

//* middleware de erro, que será chamado sempre que tiver um next(error) em nosso código.
app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));
