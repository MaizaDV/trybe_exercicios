import React from 'react';
import { connect } from 'react-redux';
import { selectMutantInfo, selectMutantPower } from '../utils/data';
import selectMutantImg from '../utils/getMutantImg';
import { showMutant } from '../redux/actions';

class Card extends React.Component {
  render() {
    const { dispatch, mutant } = this.props;
    return (
      <div
        className="mutant-card d-flex flex-column align-items-center
        justify-content-center bg-light"
      >
        <img
          src={selectMutantImg(mutant)}
          width="200px"
          height="150px"
          alt="Mutante Selecionado"
        />
        <h3>Informações do Mutante</h3>
        {selectMutantInfo(mutant)}
        <h3>Poder Ômega</h3>
        <p>{selectMutantPower(mutant)}</p>
        <button type="button" onClick={() => dispatch(showMutant(false))}>
          Voltar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mutant: state.mutant,
});

export default connect(mapStateToProps)(Card);
