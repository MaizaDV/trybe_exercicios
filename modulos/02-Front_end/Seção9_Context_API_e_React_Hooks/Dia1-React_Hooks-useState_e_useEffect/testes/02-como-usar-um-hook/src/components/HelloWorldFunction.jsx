// import { useState } from 'react';

function HelloWorldFunction() {
/* //? chamada de um hook na raiz da função, modo correto
  const [state, setState] = useState(0);
*/

/* //! Não usar hooks assim
  if(algumaCoisa) {
    const [state, setState] = useState(0); // chamada errada de um hook dentro de um if
  };

  for (let i; i < 10; i++) {
    const [state, setState] = useState(0); // chamada errada de um hook dentro de um loop
  };
*/

  return (
    <h1>Olá Mundo! - Componente de Função</h1>
  );
}

export default HelloWorldFunction;
