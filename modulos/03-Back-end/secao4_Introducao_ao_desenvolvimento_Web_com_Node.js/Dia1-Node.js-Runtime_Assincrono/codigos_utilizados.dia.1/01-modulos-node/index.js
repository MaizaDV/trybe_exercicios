// TESTANDO MÓDULOS INTERNOS, módulo path

// Importa o módulo path
const path = require('path');

// apenas imprime uma string hello world no terminal ao executar o node index.jx
console.log('Hello world!');

// retorna um nome de diretório do caminho
console.log(path.dirname('/usr/share/gnome'));

// resolve recebe uma lista de strings, ela retorna o diretório atual e complementa com as informações que foram passadas para gerar um caminho
console.log(path.resolve('usr' ,'share', 'gnome'));

// mesmo caminho de cima, mas gerado a partir da raiz do sistema linux
console.log(path.resolve('/', 'usr' ,'share', 'gnome'));

// resolve => passa um conjunto de nomes e ele vai juntar isso para gerar um caminho
// dirname => passa um caminho e ele vai extrair o nome do diretório
