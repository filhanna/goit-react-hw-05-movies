import { useRef } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const DetalisMovie = () => {
  // useEffect(() => {

  // },[])
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  console.log('movieId:', movieId);
  console.log('location:', location);
  return (
    <div>
      <Link to={backLinkLocationRef.current}> ← Go back </Link>
      <h3>Детали о фильме</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...1</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DetalisMovie;
