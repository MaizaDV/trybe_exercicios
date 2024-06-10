const elixir =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-elixir.jpeg';
const exodus =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-exodus.jpeg';
const franklinRichards =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-richards.jpeg';
const homemDeGelo =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-iceman.jpeg';
const hopeSummers =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-hope.jpeg';
const jamieBraddock =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-braddock.jpeg';
const jeanGrey =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-jeangrey.jpeg';
const legiao =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-legiao.jpeg';
const magneto =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-magneto.jpeg';
const misterM =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-misterm.jpeg';
const proteus =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-proteus.jpeg';
const quentinQuire =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-quentinquire.jpeg';
const tempestade =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-storm.jpeg';
const vulcano =
  'https://content-assets.betrybe.com/prod/e66d4095-bb1b-44ec-a7fd-3c0118e5b80e-xmen-vulcano.jpeg';

const selectMutantImg = (mutant) => {
  switch (mutant) {
    case 'Hope Summers (Hope)':
      return hopeSummers;
    case 'Gabriel Summers (Vulcano)':
      return vulcano;
    case 'Franklin Richards':
      return franklinRichards;
    case 'Quentin Quire (Kid Ômega)':
      return quentinQuire;
    case 'Bennet du Paris (Exodus)':
      return exodus;
    case 'Ororo Munroe (Tempestade)':
      return tempestade;
    case 'Absalon Mercator (Mister M)':
      return misterM;
    case 'Kevin MacTaggert (Proteus)':
      return proteus;
    case 'Erik Lehnsherr (Magneto)':
      return magneto;
    case 'David Haller (Legião)':
      return legiao;
    case 'Jean Grey':
      return jeanGrey;
    case 'Joshua Foley (Elixir)':
      return elixir;
    case 'Robert Drake (Homem de Gelo)':
      return homemDeGelo;
    case 'Jamie Braddock (Monarca)':
      return jamieBraddock;
    default:
      return '';
  }
};

export default selectMutantImg;
