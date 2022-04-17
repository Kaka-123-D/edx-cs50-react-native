export const searchMovies = async (title) => {
  let res = await fetch("http://www.omdbapi.com/?s=" + title + "&apikey=8bfc6faf");
  let resjson = await res.json();
  let movies = await resjson.Search;
  return movies;
};

export const getMovie = async (title) => {
  let res = await fetch("http://www.omdbapi.com/?t=" + title + "&apikey=8bfc6faf");
  let movie = await res.json();
  return movie;
};
