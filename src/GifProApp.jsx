import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifProApp = () => {
  const [categories, setCategories] = useState(['One Punch Man', 'Naruto']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifProApp</h1>

      <AddCategory onAddCategory={(value) => onAddCategory(value)} />

      <button onClick={onAddCategory}>Add</button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/*   Gif element */}
    </>
  );
};
