const express = require('express');
const { readActivitiesFile, writeActivitiesFile } = require('./utils/fsUtils');
const { nameValidation } = require('./middlewares/nameValidation');
const { priceValidation } = require('./middlewares/ priceValidation');
const descriptionValidation = require('./middlewares/descriptionValidation');
const { createdInValidation } = require('./middlewares/createdInValidation');
const { ratingValidation } = require('./middlewares/ratingValidation');
const { difficultyValidation } = require('./middlewares/difficultyValidation');

const app = express();

app.use(express.json());

app.post('/activities',
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdInValidation,
  ratingValidation,
  difficultyValidation,
    async (req, res) => {
      const act = await readActivitiesFile();
      const newActivity = { id: act.nextId, ...req.body };
      console.log('activities => ', act.activities);
      console.log('activity ---> ', act.newActivity);
      act.activities.push(newActivity);
      act.nextId += 1;
      await writeActivitiesFile(act);
      return res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;
