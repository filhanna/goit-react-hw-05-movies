import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const location = useLocation();
  const [moviesObject, setMoviesObject] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    getMovies(searchParams.get('query'))
      .then(responce => setMoviesObject(responce))
      .catch(err => console.log(err))
      .finally();
  }, [searchParams]);

  const getMovies = async queryString => {
    const API_KEY = '233807a8ffc50a65007330f29276706a';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const DetalisMovie = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: queryString,
      },
    });
    return DetalisMovie.data;
  };

  const updateSearchParams = e => {
    e.preventDefault();
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ query }, { replace: true });
  };

  return (
    <div>
      <form onSubmit={updateSearchParams}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
      <ul>
        {moviesObject.results?.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
