const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();

app.use(express.json());

app.get('/teams', async (_req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './teams.json'));
    const teams = JSON.parse(data);
    return res.status(200).json({ teams })
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));
