// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true

// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function word(stringWord, stringEnd) {
	stringEnd = stringEnd.split('');
	stringWord = stringWord.split('');
	let controle = true;
	for (let index = 0; index < stringEnd.length; index += 1) {
		if (stringWord[stringWord.length - stringEnd.length + index] != stringEnd[index]) {
      controle = false;
    }
	}
	return controle;
}

console.log(word('trybe', 'be')); //true
console.log(word('joaofernando', 'fernan')); //false
