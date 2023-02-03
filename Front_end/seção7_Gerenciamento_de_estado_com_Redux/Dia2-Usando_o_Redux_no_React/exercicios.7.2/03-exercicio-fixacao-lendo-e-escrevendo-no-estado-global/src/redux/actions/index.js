export const GET_MUTANT = 'GET_MUTANT';
export const SHOW_MUTANT = 'SHOW_MUTANT';

export const selectMutant = (mutant) => ({
  type: GET_MUTANT,
  mutant,
});

export const showMutant = (payload) => ({
  type: SHOW_MUTANT,
  payload,
});
