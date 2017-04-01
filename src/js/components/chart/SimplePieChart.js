import React from "react";
import {PieChart, Pie, Tooltip} from 'recharts'


export default class SimplePieChart extends React.Component {
    constructor() {
        super();
        this.data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
            {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
            {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]
    }

    render () {
        return (
        <PieChart width={800} height={400}>
            <Pie data={this.data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
            <Tooltip/>
        </PieChart>
        );
    }
}