const { expect } = require('chai');

const { readMissionsData } = require('../../utils/fsUtils');

describe('Função readMissionsData', function () {
  it('Retorna um array', async function () {
    const missions = await readMissionsData();
    expect(missions).to.be.instanceOf(Array);
  });
});
