import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifProApp = () => {
  const [categories, setCategories] = useState(['One Punch Man', 'Naruto']);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifProApp</h1>

      <AddCategory onAddCategory={(value) => onAddCategory(value)} />

      <button onClick={onAddCategory}>Add</button>

      {/* Gif List */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      {/*   Gif element */}
    </>
  );
};
