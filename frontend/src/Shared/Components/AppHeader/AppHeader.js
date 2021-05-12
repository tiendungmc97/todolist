import React, { Fragment } from 'react';

import { withRouter } from "react-router-dom";
import { Col, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class AppHeader extends React.Component {
    state = {
        dropdownOpen: false
    }


    goTo = (url = '') => {
        this.props.history.push(url);
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        })
    }

    render() {
        const endPoint = window.location.href.split('/').pop();
        const isReqList = endPoint.indexOf('request') >= 0;
        let reqStatus = 0;
        let index = endPoint.indexOf('status=');
        if (index >= 0) {
            reqStatus = endPoint.split('').splice(index + 7, 1)[0];
        }
        return (
            <Fragment>
                <Row className="appHeaderContainer" style={{ margin: '0px' }}>
                    <Col xs="3"></Col>
                    <Col className="navBar">
                        <span>this is nav bar</span>
                    </Col>
                    <Col xs="3" className="userInfo">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                            <DropdownToggle caret>User Name</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>User Infor</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Managerment</DropdownItem>
                                <DropdownItem>Account</DropdownItem>
                                <DropdownItem>Role</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default withRouter(AppHeader);