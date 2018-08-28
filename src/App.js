import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            users: []
        };

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((blob) => (blob.json()))
            .then((users) => { this.setState(() => ({users})); });
    }

    render(){
        return (
            <React.Fragment>
                <Header branding='Contact Manager'/>
                <div className="container">
                    {
                        this.state.users.map( (user) => {
                            return <Contact key={user.id} {...user} />
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}