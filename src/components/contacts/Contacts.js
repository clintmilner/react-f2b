import React from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Contact</span> List
                            </h1>
                            {
                                value.users.map((user) => {
                                    if(user.id.value) {
                                        return <Contact key={user.id.value} {...user} />;
                                    }
                                })
                            }
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}