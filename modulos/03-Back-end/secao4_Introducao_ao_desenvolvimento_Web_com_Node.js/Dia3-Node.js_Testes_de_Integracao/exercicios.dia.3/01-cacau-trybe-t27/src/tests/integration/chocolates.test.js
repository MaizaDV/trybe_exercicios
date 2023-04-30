const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../app');
const fs = require('fs');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    { id: 1, name: "Lindt & Sprungli" },
    { id: 2, name: "Ferrero" },
    { id: 3, name: "Ghirardelli" },
  ],
  chocolates: [
    { id: 1, name: "Mint Intense", brandId: 1 },
    { id: 2, name: "White Coconut", brandId: 1 },
    { id: 3, name: "Mon Chéri", brandId: 2 },
    { id: 4, name: "Mounds", brandId: 3 },
  ],
  nextChocolateId: 5,
});

describe('Testando a API Cacau Trybe', function () {

  beforeEach(function() {
    sinon.stub(fs.promises, 'readFile').returns(mockFile);
    sinon.stub(fs.promises, 'writeFile').returns();
  });

  afterEach(function(){
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método POST em /chocolates', function() {
    it('Cria um chocolate', async function() {
      const response = await chai.request(app).post('/chocolates').send({
        name: "Mint Not So Intense",
        brandId: 2,
      });

      expect(response.status).to.be.equal(201);
      expect(response.body.chocolate).to.deep.equal({
        id: 5,
        name: "Mint Not So Intense",
        brandId: 2,
      });
    });
  });

  describe('Usando o método DELETE em /chocolates/:id', function() {
    it('Remove um chocolate', async function() {
      const response = await chai.request(app).delete('/chocolates/1');
      expect(response.status).to.be.equal(204);
      expect(response.body).to.deep.equal({});
    });

    it('Se o chocolate não existe, gera um erro', async function() {
      const response = await chai.request(app).delete('/chocolates/555');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: 'chocolate not found',
      })
    })
  })
});
