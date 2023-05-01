const express = require('express');

const app = express();

app.get('/people', (_req, res) => {
  return res.status(200).send('Resposta do endpoint GET /people');
});

app.post('/people', (_req, res) => {
  return res.status(200).send('Resposta do endpoint POST /people');
});

app.get('/people/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint GET /people/:id');
});

app.put('/people/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint PUT /people/:id');
});

app.patch('/people/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint PATCH /people/:id');
});

app.delete('/people/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint DELETE /people/:id');
});

app.get('/tasks', (_req, res) => {
  return res.status(200).send('Resposta do endpoint GET /tasks');
});

app.post('/tasks', (_req, res) => {
  return res.status(200).send('Resposta do endpoint POST /tasks');
});

app.get('/tasks/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint GET /tasks/:id');
});

app.put('/tasks/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint PUT /tasks/:id');
});

app.patch('/tasks/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint PATCH /tasks/:id');
});

app.delete('/tasks/:id', (_req, res) => {
  return res.status(200).send('Resposta do endpoint DELETE /tasks/:id');
});

