import { NavLink, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <nav className='comp nav' >
        <ul>
          <li>
            <a href='/'>Anchor</a>  {/*when you have an anchor, and click the link, the entire page refreshes. Not the case with a link.*/}
          </li>
          <li>
            <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} exact to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} to='/stocks'>Stocks</NavLink>
          </li>
          <li>
            <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} to='/Movies'>Movies</NavLink>
          </li>
        </ul>
      </nav>


      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/not-logged-in'>
          <h1>You Must Be Logged In To Enter</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;