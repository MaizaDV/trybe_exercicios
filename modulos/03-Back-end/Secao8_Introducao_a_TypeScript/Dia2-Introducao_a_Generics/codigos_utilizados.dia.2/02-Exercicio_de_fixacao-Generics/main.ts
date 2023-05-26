// adiciona o <G> de variável genérica
function addProducts<G>(products: G[], newProduct: G): G[] {
  return [...products, newProduct];
}

//──── Types ─────────────────────────────────────────────────────────────────────────────
type Bread = {
  name: string,
  ingredients: string[],
  gluten: boolean,
};

type Flour = {
  brand: string,
  description: string,
  gluten: boolean,
};

//──── Arrays ────────────────────────────────────────────────────────────────────────────
const breads: Bread[] = [];
const flours: Flour[] = [];

//──── parâmetros passados para a função ─────────────────────────────────────────────────────
const newBread: Bread = {
  name: "Pão de banana",
  ingredients: ['farinha de aveia sem glúten', 'bananas maduras', 'nozes', 'ovos', 'mel'],
  gluten: false,
};

const newFlour: Flour = {
  brand: "Dona Benta",
  description: "Farinha de trigo enriquecida com ferro e ácido fólico.",
  gluten: true,
};

//──── função usando o generics ──────────────────────────────────────────────────────────
const bread = addProducts<Bread>(breads, newBread); // Error: Argument of type 'Bread[]' is not assignable to parameter of type 'string[]'.
const flour = addProducts<Flour>(flours, newFlour); // Error: Argument of type 'Flour[]' is not assignable to parameter of type 'string[]'.

//──── logs do retorno da função ─────────────────────────────────────────────────────────
console.log('bread', bread);
console.log('flour', flour);
