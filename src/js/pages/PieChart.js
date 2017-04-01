import React from "react";
import SimplePieChart from "../components/chart/SimplePieChart";
import PieChartForm from "../components/chart/PieChartForm";




export default class PieChartPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Pie Chart</h1>

                <PieChartForm/>

                <SimplePieChart/>
            </div>
        );
    }
}