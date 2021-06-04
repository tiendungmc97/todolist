import React, { Component } from 'react';
import './Table.scss';
import { Route, Switch } from 'react-router-dom';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path } = this.props.match;
        const colums = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'firstName', headerName: 'First name', width: 130 },
            { field: 'lastName', headerName: 'Last name', width: 130 },
            { field: 'age', headerName: 'Age', width: 90 },
        ]
        const rows = [
            { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
            { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
            { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
            { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
            { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
            { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
            { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
            { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        ]

        /////////////
        const fieldHeader = colums ? colums.filter.value : '';
        return (
            <div className="Table">
                <table>
                    <thead>
                        <tr>
                            {colums.map((colum, i) => {
                                return <th key={i}>{colum.headerName}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => {
                            return (
                                <tr key={i}>
                                    {colums.map((colum, i)=>{
                                       return <td>{row.colum.field}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table