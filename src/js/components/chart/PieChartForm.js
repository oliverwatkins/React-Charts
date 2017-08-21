import React from "react";
import * as PieChartActions from "../../actions/PieChartActions";
import {SketchPicker} from 'react-color';
import {AlphaPicker} from 'react-color';
import {BlockPicker} from 'react-color';
import {PhotoshopPicker} from 'react-color';
import {CirclePicker} from 'react-color';
import {Modal, Button} from 'react-bootstrap';



import ReactDOM from "react-dom";

export default class PieChartForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChartSliceChange = this.handleChartSliceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.popupPicker = this.popupPicker.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }

  cancel(event) {
    this.setState({showModal: false});
    // this.state.showModal = false;
    // PieChartActions.changeSliceName(event.currentTarget.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    const val = ReactDOM.findDOMNode(this.refs.sliceName).value;
    const color = ReactDOM.findDOMNode(this.refs.color).value;
    const value = parseInt(ReactDOM.findDOMNode(this.refs.value).value);

    var slice = {
      name: val,
      color: color,
      value: value
    }

    PieChartActions.createSlice(slice);
  }

  chooseColor(event) {
    // this.state.showModal = false;
    // PieChartActions.changeSliceName(event.currentTarget.value);
  }

  popupPicker(event) {
    this.setState({showModal: true});
    // this.state.showModal = false;
    // PieChartActions.changeSliceName(event.currentTarget.value);
  }

  handleChartNameChange(event) {
    PieChartActions.changeName(event.currentTarget.value);
  }

  handleChartSliceChange(event) {


    PieChartActions.changeSliceName(event.currentTarget.value);
    // console.info('props.app.form.slicename ' + this.props.app.pie.form.slicename)

    // PieChartActions.changeSliceName(event.currentTarget.value);
    /*value={this.props.app.pie.name}*/

  }


  render() {
    console.info('what is state : ' + this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>{this.props.app.pie.name}</div>

          <h3>Enter Chart Title Here : </h3>
          <input type="text" className="form-control" onChange={this.handleChartNameChange}
          />
        </div>
        <div className="css-form">
          <div className="col-xs-10">
            <div className="col-xs-9">
              <h3>Add Sections Here :</h3>
            </div>
          </div>
          <div className="input-group col-xs-9">
                        <span className="input-group-addon">
                            <i className="glyphicon glyphicon-user"></i></span>
            <input type="text" ref="sliceName" className="form-control" onChange={this.handleChartSliceChange}
                   name="newSlice" placeholder="Add Pie Slice Name"></input>
          </div>
          <div className="input-group col-xs-9">
            <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
            <input type="number" ref="value" className="form-control"
                   name="newValue" placeholder="Add value"></input>
          </div>
          <div className="input-group col-xs-5">
            <span className="input-group-addon"><i className="glyphicon glyphicon-tint"></i></span>


            <Modal show={this.props.app.pie.showColorPicker} onHide={this.cancel}>
              <Modal.Header closeButton>
                <Modal.Title>Pick a Color</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CirclePicker onChangeComplete={ this.chooseColor }/>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.chooseColor}>OK</Button>
                <Button onClick={this.cancel}>Cancel</Button>
              </Modal.Footer>
            </Modal>

            <input type="text" ref="color" className="form-control"
                   name="color" placeholder="Choose Color"></input>
            <Button onClick={this.popupPicker}>Choose</Button>
          </div>
          <button type="submit" value="Add Slice" className="button">Add Slice</button>
        </div>
      </form>
    );
  }
}