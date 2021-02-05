import React, { Component } from 'react';
import {ProductConsumer} from './UserComponent';
import {Table, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Crud operations </h1>
                <ProductConsumer>
                    {(value) =>
                    {
                        return(
                            <Table size="sm" variant="dark" striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>Indice</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Prioridad</th>
                                    </tr>
                                        {/*value.Alldata.map(product =>{
                                            return(
                                                <tr>
                                                    <td>{product.id}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.email}</td>
                                                    <td>{product.prioridad}</td>
                                                </tr>
                                            )
                                        }

                                    )*/}
                                </tbody>
                            </Table>
                        )
                    }}
                </ProductConsumer>
                
            </div>
        )
    }
}
