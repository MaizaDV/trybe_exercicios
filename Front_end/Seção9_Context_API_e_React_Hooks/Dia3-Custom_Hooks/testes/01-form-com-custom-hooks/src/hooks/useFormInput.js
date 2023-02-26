import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange({ target }) {
    setValue(target.value);
  };

  return {
    value: value,
    onchange: handleChange,
  };
};

export default useFormInput;
