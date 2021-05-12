import React, { Component, Fragment } from 'react';
import { Http } from '../../../../Helper/Http';
import { Col, Row, Input, Button } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    login() {
        const { userName, password } = this.state;
        Http.post('/login', { userName, password }).then(res => {
            console.log('aaaaaaaaaaaaaaaaaaaa');
        }).catch(err=> {
            console.log('bbbbbbbbbbbbbbbbbbb');
        })
    }

    render() {
        const { userName, password } = this.state;
        return (
            <Fragment>
                <div className="loginCard">
                    <h2>Login</h2>

                    <Row>
                        <Col xs="4">User Name: </Col>
                        <Col><Input type="text" placeholder="User Name" value={userName}></Input></Col>
                    </Row>
                    <Row>
                        <Col xs="4">Password: </Col>
                        <Col><Input type="password" placeholder="Password" value={password}></Input></Col>
                    </Row>
                    <Row>
                        <Col className="end">
                            <Button outline color="primary" title="Login" onClick={() => this.login()}>Login</Button>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default Login;