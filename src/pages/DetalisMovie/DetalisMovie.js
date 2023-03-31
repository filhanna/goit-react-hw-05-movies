import { useRef, useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import getMovies from 'servises/getMovies';

const DetalisMovie = () => {
  const [oneMovie, setOneMovie] = useState({});
  const [status, setStatus] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setStatus('pending');
    async function fetchMovies() {
      try {
        const result = await getMovies(movieId);

        setOneMovie(result);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {status === 'resolved' && (
        <div>
          <Link to={backLinkHref.current}> ← Go back </Link>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w780/` + oneMovie.poster_path}
              alt={oneMovie.title}
            ></img>
            <p>{oneMovie.title}</p>
            <p>Use Score : {Math.round(oneMovie.vote_average)}</p>
            <p>Owerview</p>
            <p> {oneMovie.overview}</p>
            <p>Genres</p>
            <ul>
              {oneMovie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default DetalisMovie;
