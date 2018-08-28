import React from 'react';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card card-body mb-3">
                <h4>{this.props.name}</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>Email: {this.props.email}</li>
                    <li className='list-group-item'>Phone: {this.props.phone}</li>
                </ul>
            </div>

        );
    }
}