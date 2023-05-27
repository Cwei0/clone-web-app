// Request to be made

const API_KEY = import.meta.env.VITE_API_KEY;

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const title = {
  netflixOriginals: "Netflix Original",
  trending: "Trending Now",
  topRated: "Top Rated",
  actionMovies: "Action Movies",
  comedyMovies: "Comedy Movies",
  horrorMovies: "Horror Movies",
  romanceMovies: "Romance Movies",
  documentaries: "Documentaries",
};
