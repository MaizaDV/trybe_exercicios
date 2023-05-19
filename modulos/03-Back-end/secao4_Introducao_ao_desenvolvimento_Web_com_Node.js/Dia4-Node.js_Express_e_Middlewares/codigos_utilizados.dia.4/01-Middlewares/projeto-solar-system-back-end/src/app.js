const express = require('express');
const {
  readMissionsData,
  writeNewMissionData,
  updateMissionsData,
  deleteMissionData,
} = require('./utils/fsUtils');

const app = express();
app.use(express.json());

// ──── middleware para validação de id ───────────────────────────────────────────────────
const validateMissionId = (req, res, next) => {
  const { id } = req.params;
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) {
    return res.status(400).send({ message: 'ID inválido! Precisa ser um número' });
  }
  return next();
};

// ──── middleware para validação de atributos ────────────────────────────────────────────
const validateMissionData = (req, res, next) => {
  const requiredProperties = ['name', 'year', 'country', 'destination'];
  if (requiredProperties.every((property) => property in req.body)) {
    return next();
  }
  return res.status(400)
    .send({ message: 'A missão precisa receber os atributos name, year, country e destination' });
};

// ──── endpoints ──────────────────────────────────────────────────────────────────────────
app.get('/missions', async (_req, res) => {
  const missions = await readMissionsData();

  return res.status(200).json({ missions });
});

app.post('/missions', validateMissionData, async (req, res) => {
  const newMission = req.body;

  const newMissionWithId = await writeNewMissionData(newMission);
  return res.status(201).json({ missions: newMissionWithId });
});

// ──── endpoint de atualização ───────────────────────────────────────────────────────────
app.put('/missions/:id', validateMissionId, validateMissionData, async (req, res) => {
  const { id } = req.params;
  const updatedMissionData = req.body;

  const updatedMission = await updateMissionsData(Number(id), updatedMissionData);
  return res.status(201).json({ mission: updatedMission });
});

// ──── endpoint para deletar uma missão ──────────────────────────────────────────────────
app.delete('/missions/:id', validateMissionId, async (req, res) => {
  const { id } = req.params;
  await deleteMissionData(Number(id));

  return res.status(204).end();
});

module.exports = app;
