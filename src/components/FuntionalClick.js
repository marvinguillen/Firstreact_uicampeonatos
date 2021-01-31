import React from 'react'

function FuntionalClick() {
    function clickHandler(){
        //
        console.log('click Button')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FuntionalClick

