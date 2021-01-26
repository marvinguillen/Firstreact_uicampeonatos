import React,{useState} from 'react';
import Tweet from './tweet';
import './App.css'; 

function App(){

  const [IsRed,setRed]=useState(false);
  const [count,setCount]=useState(0);
  const[user,setUser]=useState({
    name:"Elvis",
    age:25,
    post:['my first post','my lovely summer']
  });
  
  const increment = () => {
    setCount(count+1);
  };
  return(
   <div className="App">
     <h1>Hello React APP component</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    <Tweet name="DEV ED" message="This is random message"/>
    <Tweet name="LIVERPOL" message="This is random message2"/>
    <Tweet name="CHELSEA " message="This is random message3"/>
    <Tweet name="EVERTON" message="This is random message4"/>
   </div> 
  );
}
export default App;













/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/