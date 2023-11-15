
Toda classe em JavaScript tem acesso a um método chamado constructor(), e, com as classes de React, definidas com class MinhaClasse extends React.Component, não é diferente! Quando um componente React é criado, ou seja, quando é colocado na tela do navegador, a primeira coisa que é executada é a função constructor(). Toda a lógica interna que o React adiciona aos seus componentes começa a ser incluída neles nesse momento.

No JavaScript, o super() refere-se ao construtor da classe pai. (No nosso caso, refere-se à implementação de React.Component.) É importante lembrar que você não pode usar o this em um construtor até que você tenha chamado o construtor da classe pai, pois o JavaScript não vai te deixar fazer isso. Então, por ora, apenas se lembre de que, para usar o this dentro do constructor(), é preciso chamar o super() antes. Ter isso em mente vai ser muito importante ao lidar com estados nas classes!

O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente.

Ao definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...}, você não precisará fazer o bind. Então não precisaremos do construtor nesse caso.
