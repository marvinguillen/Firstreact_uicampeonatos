import React,{useState} from 'react';
import Tweet from './tweet';
import './App.css'; 

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
     <h1>Hello React APP component</h1>
      {user.map(user =>(
        <Tweet name ={user.name} message={user.message}></Tweet>
      ))}
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