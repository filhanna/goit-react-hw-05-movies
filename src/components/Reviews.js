import { useParams } from 'react-router-dom';

const Reviews = () => {
  // useEffect(() => {

  // },[])
  const { movieId } = useParams();
  return <div> Reviews Info : {movieId}</div>;
};

export default Reviews;
