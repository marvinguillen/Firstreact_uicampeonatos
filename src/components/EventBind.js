import React, { Component } from 'react'

export class EventBind extends Component {
   
constructor(props) {
    super(props)

    this.state = {
         message: 'Hello'
    }
   // this.clickHandler=this.clickHandler.bind(this)
}
/*clickHandler(){
    this.setState({
        message:'Good bye'
    })
}*/
clickHandler = ()=>{
    this.setState({
        message:'Good Bye !'
    })
}
    render() {
        return (
            <div>{this.state.message}<p></p>
                {/*<button onClick={this.clickHandler.bind(this)}>
                    Click Event Bind
                </button>*/}
                {/*<button onClick={()=> this.clickHandler()}>
                    Click Event Bind
                </button>*/}
                <button onClick={this.clickHandler}>
                    Click Event Bind
                </button>
            </div>
        )
    }
}

export default EventBind
