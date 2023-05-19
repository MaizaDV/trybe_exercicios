const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    // aqui inserimos o datatype da coluna criada
    phoneNum: DataTypes.STRING,
  });
  (async () => {
    //^ toda vez que o servidor for iniciado, a tabela será recriada.
    await sequelize.sync({ force: true }); // Isso é útil para testes, mas não deve ser usado em produção.

    //* ──── método build ──────────────────────────────────────────────────────────────────────
    // Podemos usar essa função quando queremos criar um objeto que vai armazenar dados temporários.
    // essa função cria uma instância de um model, que representa os dados que irão ser salvos no banco de dados, mas não os salva.
    //? O método build não é assíncrono, pois ele não se comunica com o banco de dados.
    const sara = User.build({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@trybe.com',
    });
    
    console.log(sara instanceof User); // true
    console.log(sara.fullName); // "Sara Silva Santos"

    //* Para salvar os dados no banco de dados, o método save deve ser utilizado
    //? O método save é assíncrono, pois ele se comunica com o banco de dados.
    await sara.save();
    console.log('Pessoa salva no banco de dados!');

    //* ──── método create ─────────────────────────────────────────────────────────────────────
    // combina o build e o save em uma única função
    //? método create é assíncrono, pois ele se comunica com o banco de dados para criar a instância do model.
    const sarah = await User.create({
      fullName: 'Sarah Silva Santos',
      email: 'sarah.ss@trybe.com',
    });
    
    console.log(sarah instanceof User); // true
    console.log(sarah.name); // "Sarah Silva Santos"

    //* ──── Modificando informações no banco de dados ─────────────────────────────────────────
    // Quando trocamos informações de um model, precisamos salvar essas alterações no banco de dados. Para isso, podemos usar o método save
    console.log(sarah.fullName); // "Sarah Silva Santos"

    sarah.fullName = "Jane Doe";
    // O nome ainda está "Sarah Silva Santos" no banco de dados!
    
    await sarah.save();
    // Agora o nome foi atualizado para "Jane Doe" no banco de dados!

    //* ──── método set ────────────────────────────────────────────────────────────────────────
    // Atualiza diversos campos de uma vez
    const lucas = await User.create({
      fullName: 'Lucas Silva Santos',
      email: 'lucas.ss@trybe.com',
    });

    lucas.set({
      fullName: "Pedro Silva Santos",
      email: "pedro.ss@trybe.com"
    });
    // O nome ainda está "Lucas Silva Santos" no banco de dados!    
    
    // vai atualizar todos os campos que foram alterados, não apenas os que foram modificados através do método set
    await lucas.save();
    // Agora o nome foi atualizado para "Pedro Silva Santos", e o email para pedro.ss@trybe.com no banco de dados!
    //* ──── método update ─────────────────────────────────────────────────────────────────────
    // Atualizar apenas campos específicos que foram modificados
    const jane = await User.create({
      fullName: "Jane Doe",
      email: "jane.doe@trybe.com",
    });
      
    jane.email = "ada.doe@trybe.com";

    await jane.update({ fullName: "Ada Joe" });
    // O banco de dados agora tem "Ada Joe" para o nome, mas o email ainda é "jane.doe@trybe.com".

    await jane.save();
    // O banco de dados agora tem "ada.doe@trybe.com" para o email.
    
    //* ──── método destroy ────────────────────────────────────────────────────────────────────
    // Excluir um model do banco de dados
    const mario = await User.create({ fullName: "Mario Bors" });

    console.log(mario.fullName); // "Mario Bors"
    
    await mario.destroy();
    
    // Agora essa entrada não existe mais no banco de dados!
  })();

  return User;
};

module.exports = UserModel;
