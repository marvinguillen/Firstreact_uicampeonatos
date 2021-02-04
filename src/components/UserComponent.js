import React, { Component } from 'react'
import {rowData} from './appData';

const ProductContext=React.createContext();

 class ProductProvider extends Component {
    state={
        allData:rowData
    }
    /*componentDidMount(){
        this.refs.name.focus();
    }
    fsubmit =(e)=>{
        e.prefentDefault();
       // console.log('try')
        let datas=this.state.datas;
        let name =this.refs.name.value;
        let email = this.refs.email.value;
        let prioridad = this.refs.prioridad.value;

        let data={
            name,email,prioridad
        }
        datas.push(data);
        this.setState({

            datas:datas
        });
        this.refs.myformsave.reset();
        this.refs.name.focus();

        

    }*/
    render() {
       // console.log(this.state.allData);
        //let datas= this.state.datas;
        return (
           <div>
               <ProductContext.Provider 
               value={{...this.state}}
               >
                   {this.props.children}
               </ProductContext.Provider>
           {/*<div className="UserComponent">
                <h2>{this.state.title}</h2>
                <form ref="myForm" className="myForm">
                <input type="text" ref="name" placeholder="Your name" className="formField"/>
                <input type="text" ref="email" placeholder="Your email" className="formField"/>
                <input type="text" ref="prioridad" placeholder="Your prioridad" className="formField"/>
                <button onClick={(e)=>this.fsubmit(e)} className="myButton" >Submmit</button>
                </form>
                <pre>
                    {
                        datas.map((data,i)=>
                        <li key={i} className="ListUsers">
                            {i+1}.{data.name}, {data.email},{data.prioridad}
                            <button onClick={()=>this.fRemove(i)} className="myButton" >Remove</button>
                            <button onClick={()=>this.fedit(i)} className="myButton" >Edit</button>
              
                        </li>
                        )
                    }
                </pre>*/}
            </div>
                

        )
    }
}

//export default UserComponent;
const ProductConsumer =ProductContext.Consumer;
export {ProductProvider,ProductConsumer}