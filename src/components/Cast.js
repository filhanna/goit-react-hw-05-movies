import { useParams } from 'react-router-dom';

const Cast = () => {
  // useEffect(() => {

  // },[])
  const { movieId } = useParams();
  return <div> Cast info : {movieId}</div>;
};

export default Cast;
