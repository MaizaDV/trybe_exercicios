const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (e) {
  console.error(`Erro ao ler o arquivo: ${e.path}`);
  console.log(e);
}
