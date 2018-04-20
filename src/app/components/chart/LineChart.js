import React from "react";
import {Line} from "react-chartjs-2";

export default class LineChart extends React.Component{
    render(){
        const data = {
            labels: ['13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00'],
            datasets: [
                {
                    label: 'Post',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },{
                    label: 'Engagement',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,19,0.2)',
                    borderColor: 'rgba(75,192,19,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,19,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,19,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [10, 20, 30, 40, 50, 60, 70]
                }
            ]
        };

        return(
            <div>
                <Line data={data} />
            </div>
        );
    }
}