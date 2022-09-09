import {useState} from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  const themeHandler = () => {
    if(theme === 'light') {
      return 'dark';
    }
    else {return 'light'}
  }

  return (
    <div className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button onClick={() => {return setTheme(themeHandler())}}>Change Theme</button>
      {/* <button onClick={() => {return setTheme('dark')}}>Dark</button>
      <button onClick={() => {return setTheme('light')}}>Light</button> */}
      
      <h1>{count}</h1>
      {/* <button onClick = {() => {return setCount(count + 1 )}}>Increment</button> */}
      <button onClick = {() => {return setCount((prevCount) => prevCount + 1 )}}>Increment</button>
      {/* <button onClick = {() => {return setCount(count - 1)}}>Decrement</button> */}
      <button onClick = {() => {return setCount((prevCount) => prevCount - 1 )}}>Decrement</button>
    </div>
  );
};

export default UseState;