export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Pj2obV7Sh7kxOT2X00tR9Tt6eYS23GJx&limit=10&q=${category}`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  console.log(gifs);

  return gifs;
};
