import React, { Component, useState, useEffect, useRef } from 'react';
import axios from 'axios';

export class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myState: true
        }
    }

    componentDidMount(){
        console.log('mounted')
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( response => {
            console.log(response)
        }).catch( error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}
