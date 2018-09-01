import React from 'react';
import uuid from 'uuid';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

export default class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.handleInputOnChange = this.handleInputOnChange.bind(this);

        this.state = {
            name: (this.props.match.params.firstname) ? this.props.match.params.firstname : '',
            email: '',
            phone: '',
            picture: { large: '' },
            errors: {}
        };
    }

    handleAddContact(dispatch, e) {
        e.preventDefault();
        const { name, email, phone, picture: pic } = this.state;

        if(name === '') {
            this.setState(() => {
                return {
                    errors: { name: 'Name is Required.' }
                };
            });
            return;
        }
        if(email === '') {
            this.setState(() => {
                return {
                    errors: { email: 'Email is Required.' }
                };
            });
            return;
        }
        if(phone === '') {
            this.setState(() => {
                return {
                    errors: { phone: 'Phone is Required.' }
                };
            });
            return;
        }

        dispatch({ type: 'ADD_USER', payload: { name, email, phone, picture: { large: pic.large }, id: { value: uuid() } } });

        this.setState(() => {
            return (
                {
                    name: '',
                    email: '',
                    phone: '',
                    picture: { large: '' },
                    errors: {}
                }
            );
        });

        this.props.history.push('/'); // Redirect to home page using BrowserRouter
    }

    handleInputOnChange(e) {
        const input = e.target;
        this.setState(() => {
            return {
                picture: { large: `https://randomuser.me/api/portraits/med/men/${Math.floor(Math.random() * 30 + 1)}.jpg` },
                [input.name]: input.value
            };
        });
    }

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.handleAddContact.bind(this, dispatch)}>
                                    <TextInputGroup
                                        name='name'
                                        placeholder='Enter Full Name'
                                        value={name}
                                        type='text'
                                        label='Name'
                                        error={errors.name}
                                        onChange={this.handleInputOnChange} />

                                    <TextInputGroup
                                        name='email'
                                        placeholder='Enter Email'
                                        value={email}
                                        type='email'
                                        label='Email'
                                        error={errors.email}
                                        onChange={this.handleInputOnChange} />

                                    <TextInputGroup
                                        name='phone'
                                        placeholder='Enter Phone Number'
                                        value={phone}
                                        type='text'
                                        label='Phone'
                                        error={errors.phone}
                                        onChange={this.handleInputOnChange} />
                                    <hr />
                                    <input type="submit" value='Add Contact' className="btn btn-sm btn-outline-dark btn-block"/>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}