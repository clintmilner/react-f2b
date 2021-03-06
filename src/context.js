import React from 'react';

const Context = React.createContext(),

    reducer = (prevState, {type, payload}) => {
        // console.log('reducer called', type, payload, prevState);
        switch(type) {
            case 'DELETE_USER':
                return {
                    ...prevState,
                    users: prevState.users.filter((user) => {
                        return user.id !== payload;
                    })
                };
            case 'ADD_USER':
                return {
                    ...prevState,
                    users: [payload, ...prevState.users]
                };
            default:
                return prevState;
        }
    };

export const Consumer = Context.Consumer;

export class Provider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            dispatch: (action) => {
                this.setState((prevState) => {
                    return reducer(prevState, action);
                });
            }
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then((blob) => (blob.json()))
            .then(({results}) => {
                this.setState(() => ({users: results}));
            });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
