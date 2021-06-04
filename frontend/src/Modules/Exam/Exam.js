import React, { Component, Fragment } from 'react';
import './Exam.scss';
class Exam extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <div className="row mxx-10">
                        <div className="col-12 pt-10 pr-10 mr-10">
                            <div className="card ">
                                
                                {/* /.card-header */}
                                <div className="table-responsive" style={{ height: 200 }}>
                                    <table className="table table-head-fixed table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="dw-4">ID</th>
                                                <th className="dw-10">User</th>
                                                <th className="dw-20">Date</th>
                                                <th style={{width: '10%'}}>Status</th>
                                                <th >Reason</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>183</td>
                                                <td>John Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-success">Approved</span></td>
                                                <td>Bacon ipsum dolor sit Bacon ipsum dolor sitBacon ipsum dolor sitBacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>219</td>
                                                <td>Alexander Pierce</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-warning">Pending</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>657</td>
                                                <td>Bob Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-primary">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>175</td>
                                                <td>Mike Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-danger">Denied</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>134</td>
                                                <td>Jim Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-success">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>494</td>
                                                <td>Victoria Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-warning">Pending</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>832</td>
                                                <td>Michael Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-primary">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>982</td>
                                                <td>Rocky Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-danger">Denied</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default Exam