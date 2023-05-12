Quando queremos importar um módulo local, precisamos passar para o require o caminho do módulo, seguindo a mesma assinatura.

Por exemplo: require('./meuModulo').

Note que a extensão (.js) não é necessária. Por padrão, o Node já procura por arquivos terminados em .js ou .json e os considera como módulos.


Além de importarmos um arquivo como módulo, podemos importar uma pasta. Isso é útil, pois muitas vezes um módulo está dividido em vários arquivos, porém, desejamos importar todas as suas funcionalidades de uma única vez. Nesse caso, a pasta precisa conter um arquivo chamado index.js, o qual importa cada um dos arquivos do módulo e os exporta da forma mais conveniente.