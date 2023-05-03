const conn = require('./connection');

const insert = (person) => conn.execute(
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
  );

  
const findAll = () => conn.execute('SELECT * FROM people');

const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById
};
