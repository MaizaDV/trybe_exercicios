const battleMembers = require('./battleMembersData')

const { dragon, mage, warrior } = battleMembers

const dragonAttack = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);
// console.log(dragonAttack());

const warriorAttack = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
// console.log(warriorAttack());

const mageAttack = () => {
  const mageDamage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
  const mageMana = mage.mana;
  if (mageMana < 15) ({ damage: 'Não possui mana suficiente', mana: 0 });
  
  return { damage: mageDamage, mana: mageMana - 15 }
}
// console.log(mageAttack());

//? => Parte 2
const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damage;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
