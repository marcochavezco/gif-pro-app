import { getGifs } from '../helpers/getGifs';

export const GifGrid = async ({ category }) => {
  const gifs = await getGifs(category);
  console.log(gifs);
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
