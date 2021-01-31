import React, { Component } from 'react'

class ClassClick extends Component {
    clicHandler(){
        console.log('Clicked the buttom')
    }
    render() {
        return (
            <div>
                <button onClick={this.clicHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
