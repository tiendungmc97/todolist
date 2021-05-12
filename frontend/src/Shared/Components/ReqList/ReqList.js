import React, { Fragment } from 'react';

import { withRouter } from "react-router-dom";
import { Col, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Util } from '../../Helper/Util';


class ReqList extends React.Component {

    render() {
        let { reqList, model, onDetail } = this.props;
        return (
            <Fragment>
                <div className="reqListContainer">
                    {(reqList && reqList.length) ? (<Row className="titleRow">
                        <Col style={{ padding: '0px' }}><Row>
                            <Col xs="2">#</Col>
                            <Col xs="3">Model</Col>
                            <Col xs="3">Type</Col>
                            <Col xs="4">Created time</Col>
                        </Row></Col>
                        <Col style={{ padding: '0px' }}><Row>
                            <Col>Site Name</Col>
                            <Col>Remarks</Col>
                            <Col>Actions</Col>
                        </Row></Col>
                    </Row>
                    ) : <span>There is no row to show!</span>}
                    {(reqList && reqList.length) ? (
                        reqList.map((req, i) => {
                            return (
                                <Row className="item">
                                    <Col style={{ padding: '0px' }}><Row>
                                        <Col xs="2">{i + 1}</Col>
                                        <Col xs="3">{Util.getModelName(req.model)}</Col>
                                        <Col xs="3">{Util.typeName(req.type)}</Col>
                                        <Col xs="4">{Util.dateString(req.created)}</Col>
                                    </Row></Col>
                                    <Col style={{ padding: '0px' }}><Row>
                                        <Col>{(req.siteInfo && req.siteInfo.name) ? req.siteInfo.name : ''}</Col>
                                        <Col>{req.remarks}</Col>
                                        <Col>
                                            <Button outline color="primary" title="Detail" onClick={() => onDetail(req.id, model)}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                            </Button>
                                        </Col>
                                    </Row></Col>
                                </Row>
                            )
                        })
                    ) : null}
                </div>
            </Fragment>
        );
    }
}

export default withRouter(ReqList);