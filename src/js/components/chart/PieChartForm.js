import React from "react";
import * as PieChartActions from "../../actions/PieChartActions";

import SlicesStore from "../../stores/SlicesStore";


export default class PieChartForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', percent:'', color:''};

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        alert('on text change')
        PieChartActions.changeSliceName(123);
    }

    handleSubmit(event) {
        // alert('XXA name was submitted: ' + this.state.value);
        event.preventDefault();

        var slice = {
            name: React.findDOMNode(this.refs.sliceName).value,
            color: React.findDOMNode(this.refs.color).value,
            percent: React.findDOMNode(this.refs.percent).value
        }

        // alert(React.findDOMNode(this.refs.color).value);
        // alert(React.findDOMNode(this.refs.percent).value);
        // alert();

        PieChartActions.createSlice(slice);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h3>Enter Chart Title Here : </h3>
                    <input type="text" className="form-control" onChange={this.handleChange} />
                </div>
                <div className="css-form">
                    <div className="col-xs-10">
                        <div className="col-xs-9">
                            <h3>Add Sections Here :</h3>
                        </div>
                    </div>
                    <div className="input-group col-xs-9">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input type="text" ref="sliceName" className="form-control"
                               name="newSlice" placeholder="Add Pie Slice Name"></input>
                    </div>
                    <div className="input-group col-xs-9">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                        <input type="number" ref="percent" className="form-control"
                               name="newValue" min="1" max="5" placeholder="Add value"></input>
                    </div>
                    <div className="input-group col-xs-5">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-tint"></i></span>
                        <input type="text"  ref="color"  className="form-control"
                               name="color" placeholder="Choose Color"></input>
                    </div>
                    <button type="submit" value="Add Slice" className="button">Add Slice</button>
                </div>
            </form>
        );
    }
}