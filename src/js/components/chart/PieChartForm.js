import React from "react";
import * as PieChartActions from "../../actions/PieChartActions";
import { SketchPicker } from 'react-color';
import { AlphaPicker } from 'react-color';
import { BlockPicker } from 'react-color';
import { PhotoshopPicker } from 'react-color';
import { CirclePicker } from 'react-color';
import { Modal, Button } from 'react-bootstrap';


export default class PieChartForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', value:'', color:''};
        this.state.showModal = true;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    cancel(event) {
        this.setState({ showModal: false });
        // this.state.showModal = false;
        // PieChartActions.changeSliceName(event.currentTarget.value);
    }

    handleSubmit(event) {
        event.preventDefault();

        var slice = {
            name: React.findDOMNode(this.refs.sliceName).value,
            color: React.findDOMNode(this.refs.color).value,
            value: parseInt(React.findDOMNode(this.refs.value).value)
        }

        PieChartActions.createSlice(slice);
    }
    chooseColor(event) {
        // this.state.showModal = false;
        // PieChartActions.changeSliceName(event.currentTarget.value);
    }

    handleChartNameChange(event) {
        PieChartActions.changeSliceName(event.currentTarget.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h3>Enter Chart Title Here : </h3>
                    <input type="text" className="form-control" onChange={this.handleChartNameChange} />
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
                        <input type="number" ref="value" className="form-control"
                               name="newValue" placeholder="Add value"></input>
                    </div>
                    <div className="input-group col-xs-5">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-tint"></i></span>

                        {/*<SketchPicker/>*/}
                        {/*<AlphaPicker/>*/}
                        {/*<BlockPicker/>*/}
                        {/*<CirclePicker/>*/}

                        {/*{this.state.showModal}*/}
                        <Modal show={this.state.showModal} onHide={this.cancel}>
                            <Modal.Header closeButton>
                                <Modal.Title>Pick a Color</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <CirclePicker/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.chooseColor}>OK</Button>
                                <Button onClick={this.cancel}>Cancel</Button>
                            </Modal.Footer>
                        </Modal>

                        <input type="text"  ref="color"  className="form-control"
                               name="color" placeholder="Choose Color"></input>
                    </div>
                    <button type="submit" value="Add Slice" className="button">Add Slice</button>
                </div>
            </form>
        );
    }
}