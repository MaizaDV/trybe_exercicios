function nameValidation (req, res, next) {
  const nameField = req.body.name;
  if(!nameField || nameField === undefined) {
    return res.status(400).json({ "message": "O campo name é obrigatório" });
  }
  if (nameField.length < 4) {
    return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  }
  return next();
};

module.exports = { nameValidation };
