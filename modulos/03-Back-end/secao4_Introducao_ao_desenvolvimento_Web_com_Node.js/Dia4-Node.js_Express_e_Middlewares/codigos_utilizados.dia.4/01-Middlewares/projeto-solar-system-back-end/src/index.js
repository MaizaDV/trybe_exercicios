const readline = require('readline-sync');

const { writeNewMissionData } = require('./utils/fsUtils');

async function main() {
  const name = readline.question('Qual é o nome da missão? ');
  const year = readline.questionInt('Qual é o ano da missão? ');
  const country = readline.question('Qual é o país da missão? ');
  const destination = readline.question('Qual é o destino da missão? ');

  const newMission = { name, year, country, destination };

  writeNewMissionData(newMission);
  console.log('Nova missão registrada com sucesso!');
}

main();
