import React from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import './style.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire(
      'Formulário enviado',
      JSON.stringify({
        firstName,
        lastName,
        email,
      }),
      'success'
    );
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label onSubmit={handleSubmit}>
          First name:
          <input value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last name:
          <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <label>
          E-mail:
          <input value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Submeter formulário</button>
      </form>
    </div>
  );
}

export default App;
