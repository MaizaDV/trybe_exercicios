const authdata = require('../authdata.json')

module.exports = async function apiCredentials(req, res, next) {
  //...
  const authorized = JSON.parse(authdata);
  if (token in authorized) {
    // modifica o req para guardar a informação importante
    req.teams = authorized[token];
    next();
  } else {
    res.status(401).json({ message: 'Token inválido ou expirado.'});
  }
};
