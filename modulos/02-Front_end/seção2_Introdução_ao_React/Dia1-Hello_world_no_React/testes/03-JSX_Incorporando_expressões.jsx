// Por ser um código Javascript, o JSX permite injeções de algoritmos dentro da estrutura HTML. È possível que se aplique diretamente na estrutura da aplicação códigos que renderizarão outras diversas expressões:
const nome1 = 'Jorge Maravilha';
const element1 = <h1>Hello, {nome1}</h1>;

//  usando uma função para renderizar o elemento
function nomeCompleto (nome2, sobrenome2) {
  return `${nome2} ${sobrenome2}`;
}

const element2 = <h1>Hello, {nomeCompleto('Jorge', 'Maravilha')}</h1>;

// Agora, vamos incorporar a nossa constante element na função helloWorld, retornar um código JSX e encapsulá-la em uma div:
function helloWorld (nome3, sobrenome3) {
  return <h1>Hello, {`${nome3} ${sobrenome3}`}</h1>;
}

const element3 = helloWorld('Jorge', 'Maravilha');
const container = <div>{element3}</div>;

// No JSX é necessário substituir class por className, para evitar conflitos entre o Javascript e o HTML, mas também podemos utilizar expressões Javascript para atribuir valor à este atributo.
const nome4 = 'Jorge Maravilha';
const classe = 'hello-class';
const element4 = <h1 className={classe}>Hello, {nome4}</h1>;
