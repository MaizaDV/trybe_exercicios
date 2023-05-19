const fs = require('fs').promises;
const { join } = require('path');
const path = '../data/activities.json';

const readActivitiesFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    console.error('Erro ao ler o arquivo', e.message);
    return null;
  }
};

const writeActivitiesFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
}

module.exports = { readActivitiesFile, writeActivitiesFile }
