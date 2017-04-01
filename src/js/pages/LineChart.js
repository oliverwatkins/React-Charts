import React from "react";

import SimpleChart from "../components/chart/SimpleChart";

export default class LineChart extends React.Component {
    render() {
        return (
            <div>
                <h1>Line Chart</h1>
                <SimpleChart/>
            </div>
        );
    }
}