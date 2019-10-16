import React, { Component } from 'react'
import MyForm from './MyForm';
import MyTable from './MyTable';

export default class My extends Component {
    render() {
        return (
            <div>
                <p>My form</p>
                <MyForm/>
                <MyTable/>
            </div>
        )
    }
}
