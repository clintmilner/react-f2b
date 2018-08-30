import React from 'react';
import { Consumer } from '../context';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            showContactInfo: false
        };
    }

    handleToggle() {
        this.setState((prevState) => ({ showContactInfo: !prevState.showContactInfo }));
    }
    handleDeleteContact(dispatch) {
        dispatch({ type: 'DELETE_USER', payload: this.props.id });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3 clearfix">
                            <h4>
                                {this.props.name.title} {this.props.name.first} {this.props.name.last}
                                <div className="btn-group btn-group-sm float-right">
                                    <i onClick={this.handleToggle}
                                        className={`fas fa-fw fa-sort-${(this.state.showContactInfo) ? 'up' : 'down'}`}></i>
                                    <i onClick={this.handleDeleteContact.bind(this, dispatch)}
                                        className='text-danger fas fa-fw fa-times'></i>
                                </div>

                            </h4>
                            {
                                (this.state.showContactInfo)
                                    ? <ul className='list-group'>
                                        <li className='list-group-item'>Email: {this.props.email}</li>
                                        <li className='list-group-item'>Phone: {this.props.phone}</li>
                                        <li className='list-group-item'>Cell: {this.props.cell}</li>
                                        <li className='list-group-item'><img src={this.props.picture.large} width='100%' height='auto' /></li>
                                    </ul>
                                    : ''
                            }
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}