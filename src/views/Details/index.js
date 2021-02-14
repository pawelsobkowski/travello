import { useParams } from 'react-router-dom';

const Details = () => {
  const { placeId } = useParams();

  return <h1>Details about {placeId}</h1>;
};

export default Details;
