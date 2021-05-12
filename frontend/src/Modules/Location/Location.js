import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from './Components/Test/Test'

class Location extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path } = this.props.match;
        return (
            <div className="Location">
                <Switch>
                    <Route path={`${path}/test`} component={Test} />
                </Switch>
            </div>
        );
    }
}

export default Location