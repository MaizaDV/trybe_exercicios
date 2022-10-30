const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareNumbers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  } 
  return 0.5;
}

const countPoints = (rightAnswers, studentAnswers, compare) => {
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const compareReturn = compare(rightAnswers[index], studentAnswers[index]);
    count += compareReturn;
  }
  return `Resultado final: ${count} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareNumbers ));
