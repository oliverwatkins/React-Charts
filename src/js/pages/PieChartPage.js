import React from "react";
import SimplePieChart from "../components/chart/SimplePieChart";
import PieChartForm from "../components/chart/PieChartForm";
import PieChartSliceList from "../components/chart/PieChartSliceList";




export default class PieChartPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Pie Chart</h1>
                <div class="col-md-5">
                    <PieChartForm/>
                </div>
                <div class="col-md-5">
                    <PieChartSliceList/>
                </div>
                <div class="col-md-5">
                    <SimplePieChart/>
                </div>
            </div>
        );
    }
}