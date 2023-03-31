import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getCast from 'servises/getCast';

const Cast = () => {
  const [oneMovie, setOneMovie] = useState({});
  const [status, setStatus] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    setStatus('pending');
    async function fetchMovies() {
      try {
        const result = await getCast(movieId);

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
          {' '}
          <ul>
            {' '}
            {oneMovie.cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <img
                  src={`http://image.tmdb.org/t/p/w780/` + profile_path}
                  alt={name}
                ></img>
                <p>{name}</p>
                <p> Character : {character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
