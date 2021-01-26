import React from 'react';

function Hello(){
    const sayHello =()=> {
        console.log("Hello world");
      };
      
    return(
        <div>
            <h3>This is Hello component</h3>
            <button onClick={sayHello}>say Hello</button>
        </div>
    );
}
export default Hello;