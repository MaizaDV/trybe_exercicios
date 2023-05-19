const { Address, Employee } = require('../models');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);


const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  // Eager Loading
  // const employee = await Employee.findOne({
  //     where: { id },
  //     // include: [{ model: Address, as: 'addresses' }],
  //     // o campo include pode manipular os dados que serão retornados. Por exemplo, se não quisermos o acesso ao número do endereço
  //     include: [{
  //       model: Address, as: 'addresses', attributes: { exclude: ['number'] }, // o campo number será excluído do retorno da requisição.
  //     }],
  //   });

  // Lazy Loading
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
};

// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const employee = await Employee.create({ firstName, lastName, age });

//   await Address.create({ city, street, number, employeeId: employee.id });
//   return employee;
// };

//* ──── Unmanaged transactions ────────────────────────────────────────────────────────────
/* const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();
    return employee;
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
}; */

//* ──── Managed transactions ──────────────────────────────────────────────────────────────
const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const result = await sequelize.transaction(async (t) => {
    const employee = await Employee.create({
      firstName, lastName, age,
    }, { transaction: t });

    await Address.create({
      city, street, number, employeeId: employee.id
    }, { transaction: t });
    return employee;
  });
  /* se ocorrer algum problema com a transaction, o Sequelize lançará um erro,
  e nesse caso, como estamos tratando todos os erros a nível de Controller,
  faz sentido deixar esse erro da transaction serem tratados e capturados por meio de um try/catch na camada de controle. */

  return result;
  // Se chegou até aqui é porque as operações foram concluídas com sucesso,
  // não sendo necessário finalizar a transação manualmente.
  // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
};

module.exports = { getAll, getById, insert };
