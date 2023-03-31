import axios from 'axios';

const getReviews = async movieId => {
  const API_KEY = '233807a8ffc50a65007330f29276706a';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const DetalisMovie = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return DetalisMovie.data;
};
export default getReviews;
