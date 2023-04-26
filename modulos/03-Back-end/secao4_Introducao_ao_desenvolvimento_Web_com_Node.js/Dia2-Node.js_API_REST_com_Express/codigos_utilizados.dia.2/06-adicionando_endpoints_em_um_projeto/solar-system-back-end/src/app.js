const express = require('express');
const { readMissionsData, writeNewMissionData } = require('./utils/fsUtils');

const app = express();
app.use(express.json());

// ──── endpoints ──────────────────────────────────────────────────────────────────────────
app.get('/missions', async (_req, res) => {
  const missions = await readMissionsData();

  return res.status(200).json({ missions });
});

app.post('/missions', async (req, res) => {
  const newMission = req.body;

  const newMissionWithId = await writeNewMissionData(newMission);
  return res.status(201).json({ missions: newMissionWithId });
});

module.exports = app;
