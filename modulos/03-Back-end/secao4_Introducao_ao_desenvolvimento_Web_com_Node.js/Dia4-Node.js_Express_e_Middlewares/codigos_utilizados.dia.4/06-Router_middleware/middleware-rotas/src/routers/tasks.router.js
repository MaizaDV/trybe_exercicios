const express = require('express');

const router = express.Router();

router.get('/tasks', (_req, res) => {
  return res.status(200).send('Resposta do endpoint GET /tasks');
});

router.post('/tasks', (_req, res) => {
  return res.status(200).send('Resposta do endpoint POST /tasks');
});

router.get('/tasks/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint GET /tasks/:id');
});

router.put('/tasks/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint PUT /tasks/:id');
});

router.patch('/tasks/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint PATCH /tasks/:id');
});

router.delete('/tasks/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint DELETE /tasks/:id');
});

module.exports = router;