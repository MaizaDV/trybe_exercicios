const battleMembers = require('./battleMembersData')

const { dragon, mage ,warrior } = battleMembers

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);
console.log(dragonDamage());

const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
console.log(warriorDamage());

const mageDamage = () => {
  const mageDamage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
  const mageMana = mage.mana;
  if (mageMana < 15) ({ damage: 'Não possui mana suficiente', mana: 0 });
  
  return { damage: mageDamage, mana: mageMana - 15 }
}
console.log(mageDamage());
