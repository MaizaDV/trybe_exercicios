const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
// const fs = require('fs');
const connection = require('../../db/connection');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../app');

const mockMissions = [
  { id: '1', name: 'Mariner 2', year: '1962', country: 'Estados Unidos', destination: 'Vênus' },
  { id: '2', name: 'Venera 4', year: '1967', country: 'URSS', destination: 'Vênus' },
  { id: '3', name: 'Mariner 5', year: '1967', country: 'Estados Unidos', destination: 'Vênus' },
];

describe('Rota de missões', function () {
  describe('GET /missions', function () {
    it('Retorna uma lista de missões', async function () {
      sinon.stub(connection, 'execute').resolves([mockMissions]);
      
      const response = await chai.request(app).get('/missions');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('missions');
      expect(response.body.missions).to.be.instanceOf(Array);
      expect(response.body.missions).to.have.lengthOf(3);
      
      sinon.restore();
    });
  });

  describe('POST /missions', function () {
    const mockMission = {
      name: 'trybe',
      year: '2022',
      country: 'Brasil',
      destination: 'Titã',
    };

    const mockId = 42;
    beforeEach(function () {
      sinon.stub(connection, 'execute')
        .onFirstCall()
          .resolves([{ insertId: mockId }])
        .onSecondCall()
          .resolves([{ id: mockId, ...mockMission }]);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('Retorna a missão criada corretamente com um id', async function () {
      // sinon.stub(fs.promises, 'writeFile').resolves();

      const response = await chai
        .request(app).post('/missions').send(mockMission);

        expect(response.status).to.be.equal(201);
        expect(response.body).to.haveOwnProperty('missions');
        expect(response.body.missions).to.haveOwnProperty('id');
        expect(response.body.missions.name).to.equal(mockMission.name);
        expect(response.body.missions.year).to.equal(mockMission.year);
        expect(response.body.missions.country).to.equal(mockMission.country);
        expect(response.body.missions.destination).to.equal(mockMission.destination);
        // sinon.restore();
      });
    it('Escreve a nova missão no banco de dados', async function () {
      // sinon.stub(fs.promises, 'writeFile').resolves();
      await chai.request(app).post('/missions').send(mockMission);
      expect(connection.execute.calledTwice).to.be.equal(true);
      // expect(fs.promises.writeFile.called).to.be.equal(true);
      // sinon.restore();
    });
  });
});