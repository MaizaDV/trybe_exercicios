function wordReversed(param1) {
  let reversed = param1.split('').reverse().join('')
    if (reversed === param1) {
      return true;
    } else {
      return false;
    }
  }
console.log(wordReversed('arara')); //true
console.log(wordReversed('desenvolvimento')); //false
