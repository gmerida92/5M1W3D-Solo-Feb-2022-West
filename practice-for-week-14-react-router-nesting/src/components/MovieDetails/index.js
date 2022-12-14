import { useParams } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  console.log(movieId);

  const movieChoice = movies.find((movieObj) => {return movieObj.id === parseInt(movieId, 10) });

  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;