const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student1));

// Com Object.values
console.log(listSkillsValuesWithValues(student1));

//? a função listSkillsValuesWithValues é bem mais simples e resolve o problema da listagem de valores de forma mais direta.