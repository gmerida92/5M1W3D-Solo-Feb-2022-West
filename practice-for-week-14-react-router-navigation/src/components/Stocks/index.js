import {Redirect} from 'react-router-dom'

function Stocks() {
  const loggedIn = true;
  if(!loggedIn) {
    return(
      <Redirect to='/not-logged-in'></Redirect>
    );
  }

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
    </div>
  );
}

export default Stocks;