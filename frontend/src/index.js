import React, { Suspense, lazy, Fragment } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './Shared/Components/App/App';
import Login from './Modules/Org/Components/Login/Login';

const isLogged = true;

const Root = (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Suspense>
          <Route path="/login" render={() => {
            return (!isLogged) ? (
              <Login></Login>
            ) : (
              <Redirect to="/app/exam" ></Redirect>
            )
          }} ></Route>
          <Route path="/app" render={() => {
            return (isLogged) ? (
              <App></App>
            ) : (
              <Redirect to="/login" ></Redirect>
            )
          }} ></Route>
        </Suspense>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

export default Root;