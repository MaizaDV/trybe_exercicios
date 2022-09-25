

let word = 'eita';
let reverseWord = "";

for (let i = 0; i < word.length; i += 1) {
  reverseWord += (word[word.length - 1 - i]);
}
console.log(reverseWord);
