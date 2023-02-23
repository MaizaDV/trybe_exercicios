import React from 'react';
import Swal from 'sweetalert2';

import './style.css';

import useFormInput from './hooks/useFormInput';

function App() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire(
      'Formulário enviado',
      JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      }),
      'Success'
    );
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label onSubmit={handleSubmit}>
          First name:
          <input value={firstName.value} onChange={firstName.onchange} />
        </label>
        <label>
          Last name:
          <input value={lastName.value} onChange={lastName.onchange} />
        </label>
        <label>
          E-mail:
          <input value={email.value} onChange={email.onchange} />
        </label>
        <button type="submit">Submeter formulário</button>
      </form>
    </div>
  );
}

export default App;
