import React from 'react';

const Hello = () => {
    return React.createElement(
        'div',
        {id:'hello',className: 'dummyClasss'},
        React.createElement('h1',null,'Hello Component Hello.js with react.CreateElement' )
    )
}
export default Hello
//Using jsx to creat a component at React


/*const Hello =() => {
return(
    <div>
        <h1>Hello Component Hello.js</h1>
    </div>
)

}

export default Hello*/