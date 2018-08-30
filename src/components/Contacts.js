import React from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

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