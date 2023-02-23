import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange({ target }) {
    setValue(target.value);
  };

  const clear = () => setValue('');

  return {
    value: value,
    onchange: handleChange,
    functionClear: clear,
  };
};

export default useFormInput;
