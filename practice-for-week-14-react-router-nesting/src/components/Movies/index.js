import { Route, Switch, NavLink } from 'react-router-dom';
import MovieDetails from '../MovieDetails';

function Movies({ movies }) {
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movieObj) => {
          return (
            <NavLink style={{padding:'10px'}} key={movieObj.id} to={`/movies/${movieObj.id}`}>{movieObj.title}</NavLink>
          )
        })}
      </nav>

      <Switch>
        <Route path='/movies/:movieId'>
          <MovieDetails movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;