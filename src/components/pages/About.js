import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className='display-4'>About Contact Manager</h1>
                <p className='lead'>Simple App to manage contacts.</p>
                <p className="text-secondary">v1.0.0</p>
            </div>
        );
    }
}