import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifProApp = () => {
  const [categories, setCategories] = useState(['One Punch Man', 'Naruto']);

  const onAddCategory = () => {
    setCategories(['Berserk', ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifProApp</h1>

      <AddCategory setCategories={setCategories} />

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
