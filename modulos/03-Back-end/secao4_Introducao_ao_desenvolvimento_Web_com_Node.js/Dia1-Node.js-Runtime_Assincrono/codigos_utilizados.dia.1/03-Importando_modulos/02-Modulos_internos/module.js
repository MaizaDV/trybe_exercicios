// Para utilizarmos um módulo interno, devemos passar o nome do pacote como parâmetro para a função require.
// Por exemplo, require('fs') importa o pacote fs, responsável pelo sistema de arquivos.

// Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável da seguinte forma:

// O nome da variável pode ser qualquer um que escolhermos. O importante é o nome do pacote que passamos como parâmetro para o require.
const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');
