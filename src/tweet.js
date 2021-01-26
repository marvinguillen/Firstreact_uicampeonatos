import React from 'react';

function Tweet({name,message}){
    return(
            <div className="Tweet">
                <h3>{name}</h3>
                <p>{message}</p>
                <h3>Number of lines</h3>
            </div>
    );
}
export default Tweet;