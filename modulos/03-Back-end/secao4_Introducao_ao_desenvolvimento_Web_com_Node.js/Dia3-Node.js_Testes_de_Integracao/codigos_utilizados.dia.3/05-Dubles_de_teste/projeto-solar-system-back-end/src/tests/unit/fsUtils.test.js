const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const { readMissionsData } = require('../../utils/fsUtils');

const mockMissions = JSON.stringify([
  { id: '1', name: 'Mariner 2', year: '1962', country: 'Estados Unidos', destination: 'Vênus' },
  { id: '2', name: 'Venera 4', year: '1967', country: 'URSS', destination: 'Vênus' },
  { id: '3', name: 'Mariner 5', year: '1967', country: 'Estados Unidos', destination: 'Vênus' },
]);

describe('Função readMissionsData', function () {
  it('Retorna um array com todos os elementos do arquivo json', async function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockMissions);

    const missions = await readMissionsData();
    
    expect(missions).to.be.instanceOf(Array);
    expect(missions).to.have.lengthOf(3);
    expect(missions).not.to.have.lengthOf(5);
  });
});
