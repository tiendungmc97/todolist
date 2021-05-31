import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Components/Main/Main';

class Panigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path } = this.props.match;
        return (
            <div className="Panigation">
                <Switch>
                    <Route path={`${path}/panigation`} component={Main} />
                </Switch>
            </div>
        );
    }
}

export default Panigation