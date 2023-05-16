const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
      // include: [{ model: Address, as: 'addresses' }],
      // o campo include pode manipular os dados que serão retornados. Por exemplo, se não quisermos o acesso ao número do endereço
      include: [{
        model: Address, as: 'addresses', attributes: { exclude: ['number'] }, // o campo number será excluído do retorno da requisição.
      }],
    });
  return employee;
}


module.exports = { getAll, getById };
