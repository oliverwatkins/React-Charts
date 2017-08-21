import React from "react";


import AppStore from "../../AppStore";

export default class PieChartSliceList extends React.Component {
    constructor(props) {
        super(props);

        // this.getSlices = this.getSlices.bind(this);


        //
        // this.state = {
        //     slices: SlicesStore.getAllSlices(),
        // };
    }

    // getSlices() {
    //     this.setState({
    //         slices: AppStore.getAllSlices(),
    //     });
    // }

    componentWillMount() {
        // SlicesStore.on("change", this.getSlices);
    }

    componentWillUnmount() {
        // SlicesStore.removeListener("change", this.getSlices);
    }

    render() {
        return (
            <table className="table">
                <tbody>

                {this.props.app.pie.data.map(function(slice, i) {

                  var key = 'xx_' + i;

                  return (
                    <tr key={key}>
                        <td>
                          {slice.name}
                        </td>
                        <td>
                          {slice.value}
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
