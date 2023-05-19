const fs = require('fs').promises;

//──── Exercício 6 - A ───────────────────────────────────────────────────────────────────
async function readAll() {
  // lê o arquivo
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  
  // Converte o conteúdo do arquivo de JSON para um array utilizando JSON.parse
  const simpsons = JSON.parse(fileContent);
  
  // Mapeia cada objeto do array para uma string no formato correto.
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  
  // Exibe as strings na tela.
  strings.forEach((string) => console.log(string));
}

//──── Exercício 6 - B ───────────────────────────────────────────────────────────────────
async function getSimpsonById(id) {
  // lê o arquivo
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  // Converte o conteúdo do arquivo de JSON para um array utilizando JSON.parse
  const simpsons = JSON.parse(fileContent);

  // acha o id certo
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  // caso não ache o id, lança um erro
  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  // retorna o personagem que foi pego pelo id
  return chosenSimpson;
}

//──── Exercício 6 - C ───────────────────────────────────────────────────────────────────
async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtra o array para remover as personagens que devem ser removidas.
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  
  // Escreve no arquivo o novo array filtrado.
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

//──── Gabarito Exercício 6 - D ──────────────────────────────────────────────────────────
async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  // aqui convertemos o ID pra número, já que ele está salvo no JSON como string
  const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

//──── Exercício 6 - E ───────────────────────────────────────────────────────────────────

async function addNelsonToFamily() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);

  // Adiciona uma nova pessoa ao array de simpsonsFamily.
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  // Escreve o novo conteúdo no arquivo.
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  
}

//──── Exercício 6 - F ───────────────────────────────────────────────────────────────────
async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtram o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Cria um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  //^ com spread seria assim:
  //^ const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escreve o novo array no arquivo e retorna a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

async function main() {
  const simpson = await getSimpsonById(5);
  console.log(simpson);
  await filterSimpsons();
  await createSimpsonsFamily();
  await addNelsonToFamily();
  await replaceNelson();
  await readAll();

}

main();
