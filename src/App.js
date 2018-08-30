import React from 'react';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider>
                <React.Fragment>
                    <Header branding='Contact Manager'/>
                    <div className="container">
                        <AddContact />
                        <Contacts />
                    </div>
                </React.Fragment>
            </Provider>
        );
    }
}