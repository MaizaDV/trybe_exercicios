const chai = require('chai');

const { expect } = chai;

//^ o chai-http vai criar seu próprio listen(), escolher uma porta automaticamente, fazer a requisição ao endpoint e, por último, retornar o resultado dessa requisição.
const chaiHttp = require('chai-http');

//^ Após adicionar o plugin ao chai, poderemos consumir o server em express por meio dele, sem que haja a necessidade de subirmos a API manualmente
chai.use(chaiHttp);

//* Aqui, temos uma boa definição de asserções para começarmos, mas que deve falhar, pois além de não existirem funcionalidades da nossa API.
//? minhaRequisicao() é um placeholder (está só de enfeite) sem funcionalidade.
//? Com isso, precisamos de algum recurso que nos ajude na validação à medida que formos construindo a API.
// describe('Usando o método GET em /chocolates', function () {
//     it('Retorna a lista completa de chocolates!', async function () {
//         response = await minhaRequisicao();
//         expect(response.status).to.be.equal(200);
//     });
// });

describe('Usando o método GET em /chocolates', function () {
  it('Retorna a lista completa de chocolates!', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    // Aqui, utilizamos o método request, que foi adicionado ao chai por meio do plugin. Por tanto, ele nos permite chamar diretamente nossos endpoints, simulando chamadas HTTP.
    //^ Internamente, esse método já se encarrega de acessar a API e percorrer o pipeline daquele endpoint no Express, até conseguir os dados da resposta.

    const response = await chai.request(app).get('/chocolates');

    //* Nós iremos dividir a validação desse contrato em duas partes usando o expect.

    //? Na primeira parte, iremos verificar se o código HTTP retornado corresponde ao valor esperado:
    expect(response.status).to.be.equals(200);

    //? Em seguida, validamos se o corpo da mensagem corresponde a lista com todos os chocolates cadastrados na API:
    expect(response.body.chocolates).to.deep.equal(output);      
  });

});

//! Este teste irá falhar, a API ainda não foi construída e, consequentemente, não foi importada. Sendo assim, precisaremos construir nossas funcionalidades até que o teste seja executado com sucesso.