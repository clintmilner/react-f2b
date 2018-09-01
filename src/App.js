import React from 'react';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import { Provider } from './context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <React.Fragment>
                        <Header branding='Contact Manager'/>
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={Contacts} />
                                <Route exact path='/contact/add' component={AddContact} />
                                <Route exact path='/contact/add/:firstname' component={AddContact}/>
                                <Route exact path='/about' component={About} />
                            </Switch>
                        </div>
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}