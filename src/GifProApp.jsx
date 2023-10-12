import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifProApp = () => {
  const [categories, setCategories] = useState(['Naruto']);

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
