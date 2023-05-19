//──── middleware de verificação do id ───────────────────────────────────────────────────
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    return next();
  } else {
    return res.sendStatus(404);
  }
};

module.exports = existingId;
