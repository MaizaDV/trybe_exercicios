const readline = require('readline-sync');

function handleBMI(weight, height) {
  console.log('===================');
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

function main() {
  const weightInKg = readline.questionFloat('What"s your weight? ');
  const heightInCm = readline.questionInt('What"s your height? ');

  const bmi = handleBMI(weightInKg, heightInCm);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();
