import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getReviews from 'servises/getReviews';

const Reviews = () => {
  const [reviewsObject, setReviewsObject] = useState({});

  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovies() {
      try {
        const responce = await getReviews(movieId);
        setReviewsObject(responce);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {!!reviewsObject.id && (
        <div>
          {!!reviewsObject.results.length ? (
            <ul>
              {reviewsObject.results.map(({ id, author, content }) => (
                <li key={id}>
                  <p>Author :{author} </p>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div>We dont have any reviews for this moovie</div>
          )}
        </div>
      )}
    </>
  );
};

export default Reviews;
