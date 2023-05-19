require('dotenv').config();

const app = require('./app');
const connection = require('./db/connection');

app.listen(3005, async () => {
  console.log('Back-end rodando na porta 3005');
  const [result] = await connection.execute('SELECT 1;');

  console.log(result);
  if (result) {
    console.log('MySQL connection OK!');
  }
});
