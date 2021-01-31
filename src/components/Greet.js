import React from 'react';

/*function Greet(){
    return <h1>Hello Vishwas</h1>
}*/

export const Greet= ({ name, heroName })=> {

    return (
        <div>
        <h1>HELLO {name} a.k.a {heroName}</h1>
    </div>
        )
}
export default Greet
