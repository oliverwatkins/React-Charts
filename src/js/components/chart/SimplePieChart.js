import React from "react";
import {PieChart, Pie, Tooltip} from 'recharts'
import SlicesStore from "../../stores/SlicesStore";

export default class SimplePieChart extends React.Component {
    constructor() {
        super();

        this.getChartName = this.getChartName.bind(this);
        this.getChartData = this.getChartData.bind(this);

        this.state = {
            chartName: SlicesStore.getChartName(),
            data01 : [{name: 'Group A', value: 400},
                {name: 'Group B', value: 300},
                {name: 'Group C', value: 300},
                {name: 'Group D', value: 200},
                {name: 'Group E', value: 278},
                {name: 'Group F', value: 189}]
        };
    }


    getChartName() {
        this.setState({
            chartName: SlicesStore.getChartName(),
        });
    }

    getChartData() {


        this.setState({
            data01: SlicesStore.getChartData(),
        });
    }


    componentWillMount() {
        SlicesStore.on("change", this.getChartName);
        SlicesStore.on("change", this.getChartData);

    }
    componentWillUnmount() {
        SlicesStore.removeListener("change", this.getChartName);
        SlicesStore.removeListener("change", this.getChartData);
    }

    render() {
        return (

            <div>
                <div id="canvasTitle">
                    <h1 class="text-center">{this.state.chartName}</h1>
                </div>

                <PieChart width={800} height={400}>
                    <Pie data={this.state.data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                    <Tooltip/>
                </PieChart>
            </div>
        );
    }
}