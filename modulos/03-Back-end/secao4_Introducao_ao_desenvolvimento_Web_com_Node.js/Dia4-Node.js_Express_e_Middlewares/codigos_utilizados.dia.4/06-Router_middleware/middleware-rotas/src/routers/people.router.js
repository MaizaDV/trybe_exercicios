const express = require('express');

const router = express.Router();

router.get('/people', (_req, res) => {
  return res.status(200).send('Resposta do endpoint GET /people');
});

router.post('/people', (_req, res) => {
  return res.status(200).send('Resposta do endpoint POST /people');
});

router.get('/people/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint GET /people/:id');
});

router.put('/people/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint PUT /people/:id');
});

router.patch('/people/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint PATCH /people/:id');
});

router.delete('/people/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint DELETE /people/:id');
});

module.exports = router;
