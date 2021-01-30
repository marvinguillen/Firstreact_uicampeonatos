import React,{useState} from 'react';
import Tweet from './tweet';
import './App.css'; 
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App(){
 const[count,setCount]=useState(0);
  const[user,setUsers]=useState([
    {name:"Elvis",
    age:25,
    message:'my first post'},
    {name:"Jonh",
    age:56,
    message:'my second post'},
    {name:"Hugo",
    age:78,
    message:'my third post'}


  ]);
  
  const increment = () => {
    setCount(count+1);
  };
  return(
   <div className="App">
 
      {/* <Hello />*/}
      {/* <Welcome />*/}
    <Greet name="Bruce" heroName="Batman">
      <p>
        This is children props
      </p>
    </Greet>
    <Greet name="Clark" heroName="Superman">
    <button>Action</button>
    </Greet>
    <Greet name="Diana" heroName="Wonder woman"/>
    <Welcome name="Bruce" heroName="Batman"/>
    <Welcome name="Clark" heroName="Superman"/>
    <Welcome name="Diana" heroName="Wonder woman"/>
    
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