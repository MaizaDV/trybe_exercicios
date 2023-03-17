import { useEffect, useState } from 'react';

function User({ age }) {
const [name, setName] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setName(data.name);
      })
  }, []);

  useEffect(() => {

    const intervalId = setInterval(() => {
      document.title = (new Date()).toLocaleTimeString();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }

  }, []);
  
  function handleClick() {
    // Aqui eu posso colocar um efeito colateral,
    // como uma chamada da API
  }
  return (
    <section>
      <h1>Dados do usuário:</h1>
      <h2>Nome: { name }</h2>
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
