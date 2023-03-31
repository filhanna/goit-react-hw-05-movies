import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TrendList = ({ getMovies }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies()
      .then(({ results }) => setMovies([...results]))
      .catch(err => console.log(err.message))
      .finally();
  }, []);
  console.log('location:', location);

  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                id={id}
                key={id}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrendList;
