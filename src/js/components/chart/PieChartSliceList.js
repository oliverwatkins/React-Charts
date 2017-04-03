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

    componentWillMount() {
        SlicesStore.on("change", this.getSlices);
    }

    componentWillUnmount() {
        SlicesStore.removeListener("change", this.getSlices);
    }

    render() {
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