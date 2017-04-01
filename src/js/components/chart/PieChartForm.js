import React from "react";

export default class PieChartForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h3>Enter Chart Title Here : </h3>
                    <input type="text" className="form-control"/>
                </div>
                <div className="css-form">
                    <div className="col-xs-10">
                        <div className="col-xs-9">
                            <h3>Add Sections Here :</h3>
                        </div>
                    </div>
                    <div className="input-group col-xs-9">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input type="text" className="form-control"
                               name="newSlice" placeholder="Add Pie Slice Name"></input>
                    </div>
                    <div className="input-group col-xs-9">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                        <input type="number" className="form-control"
                               name="newValue" min="1" max="5" placeholder="Add value"></input>
                    </div>

                    <div className="input-group col-xs-5">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-tint"></i></span>
                        <input type="text" className="form-control" name="color" placeholder="Choose Color"></input>
                    </div>

                    <button type="submit" value="Add Slice" className="button">Add Slice</button>

                </div>
            </form>

        );
    }
}