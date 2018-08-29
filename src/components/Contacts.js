import React from 'react';
import Contact from './Contact';

export default class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteContact = this.handleDeleteContact.bind(this);

        this.state = {
            users: []
        };

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((blob) => (blob.json()))
            .then((users) => { this.setState(() => ({users})); });
    }

    handleDeleteContact({props}){
        this.setState((prevState) => {
            return {
                users: prevState.users.filter( (user) => {
                    return user.id !== props.id;
                })
            }
        });
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.users.map( (user) => {
                        return <Contact key={user.id} {...user} handleDeleteContact={this.handleDeleteContact} />
                    })
                }
            </React.Fragment>
        );
    }
}