import React, { useState } from 'react';

function Form() {

  const [ form, setForm ] = useState({ name: '', age: '', city: '', module: ''})

  const handleChange = ({ target }) => {
    const value = target.type === 'radio' ? target.value : target.value;
    setForm({
      ...form,
      [ target.name ]: value,
    })
  }

  return (
    <form className='form'>
      <fieldset>
        <legend>Dados Pessoais</legend>

        <label htmlFor='name'>
          Nome Completo:
          <input
            id='name'
            name='name'
            type='text'
            value={ form.name }
            onChange={ handleChange }
            placeholder='Digite seu nome aqui'
            />
        </label>

        <label htmlFor='age'>
          Idade:
          <input
            id='age'
            name='age'
            type='number'
            value={ form.age }
            onChange={ handleChange }
            placeholder='Digite a sua idade'
          />
        </label>

        <label htmlFor='city'>
          Cidade:
          <input
            id='city'
            name='city'
            type='text'
            value={ form.city }
            onChange={ handleChange }
            placeholder='Digite a sua Cidade'
          />
        </label>

      </fieldset>

      <fieldset>
        <legend>Módulos</legend>

        <label htmlFor='fundamentals'>
          Fundamentos
          <input
            id='fundamentals'
            name='module'
            type='radio'
            value='Fundamentos'
            onClick={ handleChange }
          />
        </label>
          <br />
        <label htmlFor='front-end'>
          Front-end
          <input
            id='front-end'
            name='module'
            type='radio'
            value='Front-end'
            onClick={ handleChange }
          />
        </label>
          <br />
        <label htmlFor='back-end'>
          Back-end
          <input
            id='back-end'
            name='module'
            type='radio'
            value='Back-end'
            onClick={ handleChange }
          />
        </label>
          <br />
        <label htmlFor='computer Science'>
          Ciência da Computação
          <input
            id='computer Science'
            name='module'
            type='radio'
            value='Ciência da Computação'
            onClick={ handleChange }
          />
        </label>
      </fieldset>

      <button
        type='button'
        onClick={ () => alert('Enviado!') }
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;