const mutantsInfo = {
  hope: `Hope Summers é filha adotiva de Cable, 
    foi a primeira mutante a nascer após a dizimação mutante, que ocorreu 
    quando a Feiticeira Escarlate alterou a realidade para recriar seu 
    filho perdido e transformou todos os mutantes em humanos normais.`,
  gabr: `Gabriel Summers é um irmão perdido do Ciclope e Havok. 
    O nome Vulcano surgiu da admiração pelo Deus do fogo Vulcano. 
    Vulcano consegue manipular energia, meio descontroladamente as vezes. 
    Gabriel absorve e distribui imensa quantidade de energia e magia.`,
  fran: `Franklin Richards é um mutante muito poderoso do universo Marvel Comics. 
    A sua habilidade nível ômega é tão impressionante que ele cria 
    qualquer coisa que imaginar em uma escala universal.`,
  quen: `Aluno da melhor escola depois de Hogwarts, a Escola Xavier 
    para Jovens Superdotados. Quentin é um rebelde sem causa que 
    possui telepatia e telecinese.`,
  benn: `Nascido no século XII mas foi amaldiçoado por Apocalipse, lembra dele? 
    Foi preso em uma cripta ew libertado pelo Magneto. Possui 
    teletransporte, telepatia, cura e telecinese, e sua telecinese 
    consegue superar até mesmo a telecinese da Jean Grey.`,
  oror: `Quem não conhece a poderosa Tempestade? É um membro famoso 
    dos X-Men, controla o clima como nenhum outro mutante e já foi 
    inclusive considerada uma deusa devido às suas habilidades.`,
  absa: `Pode manipular a matéria e energia em nível subatômico! 
    Incrivelmente habilidoso, consegue ganhar super força, 
    se tornar intangível, curar seus ferimentos e ainda melhorar as habilidades de 
    outros murantes.`,
  kevi: `Proteus é extremamente poderoso e um perigo para o universo. 
    Devido à dimensão do seu poder seu corpo foi destruído e passou a 
    existir apenas como uma entidade psiônica, portante tem necessidade 
    constante de trocar de hospedeiros para possuir uma forma física.`,
  erik: `O poderoso Magneto, amigo e rival do professor Xavier, 
    diversas vezes candidato à sabotador master dos X-men e possui incrível 
    habilidade de magnetismo.`,
  davi: `Filho do Professor X, um mutante extremamente forte 
    e completamente descontrolado. Possuí diversas habilidades e 
    diversas personalidades, e cada personalidade possui habilidades 
    diferentes.`,
  jean: `Ilustre membro dos X-Men, recebe destaque em diversos filmes 
    da franquia e consegue ser um mutante nível ômega mesmo sem a participação 
    da Força fênix nessa história. É uma das telepatas mais poderosas do 
    universo, até mais poderosa que o professor X.`,
  josh: `O mutante dourado Josua Foley é brilhante com sua habilidade 
    biocinética, que é capaz de causar dano ou curar qualquer organismo 
    à nível microscópico.`,
  robe: `Homem de Gelo chegou sua vez! Obviamente sua habilidade 
    é manipular a temperatura para baixo, criando esculturas de gelo pelo 
    mundo afora.`,
  jami: `Jamie manipula a realidade em um nível quântico. 
    Seus poderes começaram alterando a área ao seu redor, mas evoluíram ao 
    ponto de controlar a realidade do universo.`,
};

const omegaPower = {
  hope: 'Cópia de Poder',
  gabr: 'Manipulação de Energia',
  fran: 'Manipulação da Realidade (Universal)',
  quen: 'Telepatia',
  benn: 'Telecinese Molecular',
  oror: 'Manipulação Climática',
  absa: 'Manipulação da Matéria',
  kevi: 'Manipulação de Realidade (Psiônico)',
  erik: 'Magnetismo',
  davi: 'Manifestação de Poder',
  jean: 'Telepatia',
  josh: 'Biocinese',
  robe: 'Manipulação de temperatura negativa',
  jami: 'Deformação da realidade',
};

export const selectMutantInfo = (mutant) => {
  const SUBSTRING_START = 0;
  const SUBSTRING_END = 4;
  const selected = mutant
    .substring(SUBSTRING_START, SUBSTRING_END)
    .toLowerCase();
  return mutantsInfo[selected];
};

export const selectMutantPower = (mutant) => {
  const SUBSTRING_START = 0;
  const SUBSTRING_END = 4;
  const selected = mutant
    .substring(SUBSTRING_START, SUBSTRING_END)
    .toLowerCase();
  return omegaPower[selected];
};
