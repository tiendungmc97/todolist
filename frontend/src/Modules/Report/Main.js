import React, { Component, Fragment } from 'react';
import { Bar } from 'react-chartjs-2';
import BarChart from './BarChart';

class Report extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            {
                "id": "A",
                "value": 46
              },
              {
                "id": "B",
                "value": 87
              },
            {
                "id": "A",
                "value": 300
              },
              {
                "id": "B",
                "value": 260
              },
            {
                "id": "A",
                "value": 500
              },
              {
                "id": "B",
                "value": 50
              },
            ]

        const options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        };
        let title = "Thống kê doanh số: "

        return (
            <BarChart
                data={data}
                title={title}
                color="#70CAD1"
          />
            )
    }
}

export default Report