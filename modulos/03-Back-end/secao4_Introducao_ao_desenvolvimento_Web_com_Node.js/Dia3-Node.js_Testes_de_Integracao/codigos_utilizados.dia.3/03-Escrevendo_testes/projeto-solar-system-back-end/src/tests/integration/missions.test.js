const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../app');

describe('Rota de missões', function () {
  describe('GET /missions', function () {
    it('Retorna uma lista de missões', async function () {
      const response = await chai.request(app).get('/missions');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('missions');
      expect(response.body.missions).to.be.instanceOf(Array);
    });
  });

  describe('POST /missions', function () {
    it('Retorna a missão criada corretamente com um id', async function () {
      const mockMission = {
        name: 'trybe',
        year: '2022',
        country: 'Brasil',
        destination: 'Titã',
      };

      const response = await chai
        .request(app).post('/missions').send(mockMission);

        expect(response.status).to.be.equal(201);
        expect(response.body).to.haveOwnProperty('missions');
        expect(response.body.missions).to.haveOwnProperty('id');
        expect(response.body.missions.name).to.equal(mockMission.name);
        expect(response.body.missions.year).to.equal(mockMission.year);
        expect(response.body.missions.country).to.equal(mockMission.country);
        expect(response.body.missions.destination).to.equal(mockMission.destination);
    });
  });
});