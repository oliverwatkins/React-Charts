import React from "react";
import SlicesStore from "../../stores/SlicesStore";

export default class PieChartSliceList extends React.Component {
    constructor(props) {
        super(props);
        this.getSlices = this.getSlices.bind(this);
        this.state = {
            slices: SlicesStore.getAll(),
        };
    }

    getSlices() {
        this.setState({
            slices: SlicesStore.getAll(),
        });
    }


    render() {
        var slices = [
            {
                name: "First SliceXXX",
                percent: 12,
                color: "#123123"
            },
            {
                name: "Second SliceYYY",
                percent: 15,
                color: "#423443"
            },
        ];

        return (
            <table className="MyClassName">
                <tbody>
                {this.state.slices.map(function(slice, i) {
                    return (
                        <tr>
                            <td>
                                {slice.name}
                            </td>
                            <td>
                                {slice.percent}
                            </td>
                            <td>
                                {slice.color}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}