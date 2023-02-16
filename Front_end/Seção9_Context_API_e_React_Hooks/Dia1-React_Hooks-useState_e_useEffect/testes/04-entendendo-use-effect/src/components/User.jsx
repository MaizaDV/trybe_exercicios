function User({name, age}) {
  const newName = `${ name } da Silva.`
  
  function handleClick() {
    // Aqui eu posso colocar um efeito colateral,
    // como uma chamada da API
  }
  return (
    <section>
      <h1>Dados do usuário:</h1>
      <h2>Nome: { newName }</h2>
      <h2>Idade: { age }</h2>
      <button
      type="button"
      onClick={ handleClick }
      >
        Faça um Fetch
      </button>
    </section>
  );
}

export default User;
