import React from 'react';

const MutantOptions = () => {
  const omegaLevelMutants = [
    'Hope Summers (Hope)',
    'Gabriel Summers (Vulcano)',
    'Franklin Richards',
    'Quentin Quire (Kid Ômega)',
    'Bennet du Paris (Exodus)',
    'Ororo Munroe (Tempestade)',
    'Absalon Mercator (Mister M)',
    'Kevin MacTaggert (Proteus)',
    'Erik Lehnsherr (Magneto)',
    'David Haller (Legião)',
    'Jean Grey',
    'Joshua Foley (Elixir)',
    'Robert Drake (Homem de Gelo)',
    'Jamie Braddock (Monarca)',
  ];
  const sortedOmegaMutants = omegaLevelMutants.sort();
  const SUBSTRING_START = 0;
  const SUBSTRING_END = 4;

  return sortedOmegaMutants.map((mutant, index) => (
    <option
      key={index}
      data-id={mutant.substring(SUBSTRING_START, SUBSTRING_END).toLowerCase()}
    >
      {mutant}
    </option>
  ));
};

export default MutantOptions;
