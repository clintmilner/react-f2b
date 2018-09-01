/**
 * User: clint
 * Date: 01/09/2018
 * Time: 07:13
 *
 * Rebasoft - Network Intelligence
 */
import React from 'react';

export default class FourOhFour extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="display-4"><span className="text-danger">404</span> Page Not Found</h1>
                <p className="lead">Sorry, that page does not exist</p>
                <h1>💩</h1>
            </React.Fragment>
        );
    }
}