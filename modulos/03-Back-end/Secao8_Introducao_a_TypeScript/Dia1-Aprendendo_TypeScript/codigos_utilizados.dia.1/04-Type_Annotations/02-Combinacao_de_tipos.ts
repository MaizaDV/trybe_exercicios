//?──── Combinação de tipos ───────────────────────────────────────────────────────────────

//^──── Union Types ───────────────────────────────────────────────────────────────────────
// Essa estrutura é formada por dois ou mais tipos que podem ser atribuídos àquele dado
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

//──── Atenção! ──────────────────────────────────────────────────────────────────────────
//? ==> Atenção! Em casos assim, você não pode chamar na variável um método que não existe para todos os tipos que ela pode ter.
// Um exemplo é o toUpperCase(), que é um método do tipo string e não existe no tipo number. Para o id acima, chamar o toUpperCase() resultará em erro.
// function printId2(id: number | string) {
//   console.log(id.toUpperCase());
// }

// printId2(101); // Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.

// se você ainda precisar chamar um método assim, basta verificar o tipo do valor antes da chamada. Desse modo, vai funcionar.
function printId3(id: number | string) {
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printId3(101);

//^──── Type Aliases ──────────────────────────────────────────────────────────────────────
// No caso de haver vários elementos que você precisa tipar da mesma forma, o Type Alias é um modo de reunirmos alguns tipos específicos e chamá-los por um “apelido”.
type PersonalInfo = {
  name: string;
  birthYear: number;
};

// Agora, você pode utilizar o tipo criado para definir os parâmetros da função printPersonalInfo:
function printPersonalInfo(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978});

// Você pode usar type aliases para dar “apelidos” a quaisquer tipos que você queira, utilizando inclusive união de tipos para isso. Exemplos:
type PersonalInfo2 = {
  name: string;
  birthYear: number | string;
};

type ID = number | string;
