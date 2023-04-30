
const { expect } = require('chai');
const calculaSituacao = require('../examples/calculaSituacao');

const resposta = calculaSituacao(4);

//^ No código, estamos chamando nossa função. Logo em seguida, afirmamos que seu retorno armazenado na constante resposta, deve ser igual (equals) a reprovação.
expect(resposta).equals('reprovação');

describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    const resposta = calculaSituacao(4);
    
    //* Para tornar nosso teste ainda mais legível e elegante, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético.
    //? Por exemplo, o `to` e o `be`, que nos permitem escrever nossa assertion da seguinte maneira:
    
    expect(resposta).to.be.equals('reprovação');
    
    //& O to e o be não alteraram em nada a validação realizada, porém a leitura fica muito mais fluida e natural. É como se estivéssemos dizendo que nosso teste espera a resposta ser igual a “reprovação”.
  });
});

