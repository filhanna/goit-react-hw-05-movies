import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import TrendList from 'components/TrendList/TrendList';

const Home = () => {
  //eslint-disable-next-line
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMovies()
      .then(({ results }) => setMovies([...results]))
      .catch(err => console.log(err.message))
      .finally();
  }, []);

  const getMovies = async () => {
    const API_KEY = '233807a8ffc50a65007330f29276706a';
    const getMovies = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    return getMovies.data;
  };
  return (
    <div>
      <h1>Trending Today</h1>
      <TrendList getMovies={getMovies} location={location} />
    </div>
  );
};

export default Home;
