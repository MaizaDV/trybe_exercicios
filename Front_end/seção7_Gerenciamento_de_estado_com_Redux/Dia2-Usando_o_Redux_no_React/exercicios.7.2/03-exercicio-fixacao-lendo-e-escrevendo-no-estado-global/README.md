# Lendo e escrevendo no estado global

Neste exercício, iremos implementar uma aplicação para buscar e exibir as informações de personagens do universo X-Men. Quando selecionado, o nome do X-men deve ser salvo no estado global. Dessa forma, qualquer componente poderá acessar a informação contendo o seu nome.

Além disso, temos uma chave show no estado global que possui um valor booleano. O valor dessa chave irá definir qual componente deve ser renderizado. Essa aplicação está no contexto da série de revistas em quadrinhos X-men, porém essa estratégia é muito comum no desenvolvimento de aplicações e pode ser adotada em diversos contextos diferentes.

A aplicação exibida abaixo está implementada com Redux. Porém, você irá perceber que após selecionar um personagem e clicar no botão Selecionar, nada acontece. Isso ocorre pois as funções dispatch e mapDispatchToProps não foram implementadas corretamente.

**O estado global da aplicação está no seguinte formato:**

state = {
  show: false,
  mutant: 'Absalon Mercator (Mister M)',
}

- show: Possui um valor boolean;
- mutant: Possui o nome de um personagem X-men (também conhecido como mutante).

**Seu objetivo nesse exercício será finalizar a implementação do componente SelectOmega, no arquivo ./src/components/SelectOmega.js, realizando as seguintes ações:**

- Implementar a função mapStateToProps, para que a aplicação tenha acesso à chave show, do estado global;
- Implementar a função onChange() da tag select. Para isso, você precisará realizar o dispatch() da action selectMutant(). Essa action deve receber como parâmetro o nome de um mutante.

💡Dica: O nome do mutante está salvo no value do select, podendo ser acessado por meio do event.target.value;

- Implementar a função onClick() do button. Para isso, você precisará realizar o dispatch() da action showMutant(true), passando como parâmetro o valor true.
- Você deve concluir o desafio apenas implementando o arquivo ./src/components/SelectOmega.js, mas fique à vontade para explorar toda a aplicação.
