import React from 'react';

const Context = React.createContext();

const reducer = (prevState, {type, payload}) => {
    console.warn('reducer called', type, payload, prevState);
    switch(type) {
        case 'DELETE_USER':
            return {
                ...prevState,
                users: prevState.users.filter( (user) => {
                    return user.id !== payload;
                })
            };
        default:
            return state;
    }
};

export const Consumer = Context.Consumer;
export class Provider extends React.Component {
    constructor(props){
        super(props);
        this.dispatch = this.dispatch.bind(this);

        this.state = {
            users: [],
            dispatch: this.dispatch
        };

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((blob) => (blob.json()))
            .then((users) => { this.setState(() => ({users})); });
    }

    dispatch(action){
        console.log(action);
        this.setState((prevState) => {
            reducer( prevState, action );
        })
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

