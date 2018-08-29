import React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


export default class App extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <React.Fragment>
                <Header branding='Contact Manager'/>
                <div className="container">
                    <Contacts/>
                </div>
            </React.Fragment>
        );
    }
}