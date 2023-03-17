/*  => Componentes de função:
Componentes de função, ou funcionais, são componentes criados apenas com uma função javascript. */

function Greeting(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}

export default Greeting;
