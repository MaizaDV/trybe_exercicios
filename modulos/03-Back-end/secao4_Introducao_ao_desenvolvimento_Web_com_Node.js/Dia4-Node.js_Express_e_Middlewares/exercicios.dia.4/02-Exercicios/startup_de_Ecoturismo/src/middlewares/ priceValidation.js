function priceValidation(req, res, next) {
  const priceField = req.body.price;
  if (priceField === undefined) {
    return res.status(400).json({ "message": "O campo price é obrigatório" });
  }
  const nPriceField = Number(priceField);
  if (Number.isNaN(nPriceField) || nPriceField < 0 ) {
    return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
  }
  return next();
}

module.exports = { priceValidation };
