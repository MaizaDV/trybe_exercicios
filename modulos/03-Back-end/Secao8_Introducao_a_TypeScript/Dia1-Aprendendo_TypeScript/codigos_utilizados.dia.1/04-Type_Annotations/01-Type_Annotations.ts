//?──── Type Annotations ──────────────────────────────────────────────────────────────────

//^──── Anotações de tipo em variáveis ────────────────────────────────────────────────────
const firstName: string = "Joel";
const age: number = 38;
const brazilian: boolean = false;

//^──── Funções ───────────────────────────────────────────────────────────────────────────
// É importante explicitar, o tipo dos valores de entrada

//&──── Exemplo de anotação de tipo em parâmetros ────────────────────────────────────────
// Se você executar a função acima no `Typescript Playground` usando uma string como argumento, verá que tudo funcionará perfeitamente.
// No entanto, se você tentar passar um número, por exemplo, receberá o erro *“`Argument of type ‘number’ is not assignable to parameter of type ‘string’.`”*.

function greet(name: string) {
  console.log(`Olá, ${name.toUpperCase()}!`);
};

//&──── Exemplo de anotação de tipo em retornos ───────────────────────────────────────────
// anotação de tipo em retornos aparece após a lista de parâmetros da função.
function getFavoriteNumber(): number {
  return 26;
}

//&──── quando a função não retorna nenhum valor ──────────────────────────────────────────
// ==> o tipo de retorno será void
// A função greet, apresentada acima, é um exemplo de função que não tem um valor de retorno, pois apenas imprime algo no console. Vamos tipar seu retorno explicitamente:
function greet2(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
}

//^──── Listas e objetos ──────────────────────────────────────────────────────────────────

//&──── object type ───────────────────────────────────────────────────────────────────────
// Em TypeScript, o tipo objeto é basicamente qualquer valor que não seja um tipo primitivo (string, number, bigint, boolean, symbol, null, ou undefined) e que tenha propriedades.
// Para tipar um objeto, é necessário apenas listar suas propriedades e seus tipos, como no exemplo a seguir.
// Não precisa tipar cada propriedade, mas, caso você não o faça, o TypeScript assumirá que elas são do tipo any. Isso pode causar o noImplicitAny.
function printPersonalInfo(data: { name: string; birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });

//&──── tipar o array ─────────────────────────────────────────────────────────────────────
// é possível especificar o tipo dos elementos de um array, o que é tipar o array em si.
// Para isso, basta inserir os colchetes depois do tipo dos elementos do array.
const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

// não é possível adicionar novos elementos a um array se eles não corresponderem aos tipos previamente determinados.
evenNumbers.push(8) // Funciona
// evenNumbers.push('8') // Erro

// Outra sintaxe possível para fazer a mesma tipagem é Array<number>, sintaxe usada quando estiver no conteúdo sobre Generics.
