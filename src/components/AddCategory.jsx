import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    setCategories((categories) => [inputValue, ...categories]);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={inputValue}
        placeholder={'Add GIF'}
        onChange={onInputChange}
      />
    </form>
  );
};
