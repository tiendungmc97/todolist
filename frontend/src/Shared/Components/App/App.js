import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Exam from '../../../Modules/Exam/Exam';
import Customer from '../../../Modules/Customer/Customer';
import Location from '../../../Modules/Location/Location';
import Org from '../../../Modules/Org/Org';
import Service from '../../../Modules/Service/Service';
import User from '../../../Modules/User/User';
import Report from '../../../Modules/Report/Main';
import Panigation from '../../../Modules/Panigation/Panigation';

class App extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="App">
                <AppHeader></AppHeader>
                <Switch>
                    <Route path={`${path}/exam`} component={Exam} />
                    <Route path={`${path}/customer`} component={Customer} />
                    <Route path={`${path}/location`} component={Location} />
                    <Route path={`${path}/org`} component={Org} />
                    <Route path={`${path}/service`} component={Service} />
                    <Route path={`${path}/user`} component={User} />
                    <Route path={`${path}/panigation`} component={Panigation} />
                    <Route path={`${path}/report`} component={Report} />

                </Switch>
            </div>
        );
    }
}

export default withRouter(App);