const express = require('express');

const router = express.Router();

// router.post('/', (req, res) => {
//   const person = req.body;
//   res.status(201).json(person);
// });

const peopleDB = require('../db/peopleDB');

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

module.exports = router;
