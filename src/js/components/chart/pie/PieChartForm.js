import React from "react";
import {SketchPicker} from 'react-color';
import {AlphaPicker} from 'react-color';
import {BlockPicker} from 'react-color';
import {PhotoshopPicker} from 'react-color';
import {CirclePicker} from 'react-color';
import {Modal, Button} from 'react-bootstrap';

import Actions from "../../../../js/Actions";
import TitleEditComponent from '../TitleEditComponent'

import ReactDOM from "react-dom";

export default class PieChartForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.popupPicker = this.popupPicker.bind(this);
    this.chooseColor = this.chooseColor.bind(this);

    this.state = {
      showModalColorPicker: false
    };
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
    Actions.createSlice(slice);
  }

  cancel(event) {
    this.setState({showModalColorPicker: false});
  }

  chooseColor(event) {
    this.setState({showModalColorPicker: false, color: event.hex});
  }

  popupPicker(event) {
    this.setState({showModalColorPicker: true});
  }

  handleChartNameChange(event) {
    Actions.changeName(event.currentTarget.value);
  }

  render() {
    console.info('what is state : ' + this.state)

    var style = {
      color: 'black',
      background: this.state.color
    };


    return (
      <form onSubmit={this.handleSubmit}>
        <TitleEditComponent onChange={this.handleChartNameChange}/>

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

            <Modal show={this.state.showModalColorPicker} onHide={this.cancel}>
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
                   name="color" placeholder="Choose Color" value={this.state.color} style={style}/>
            <Button onClick={this.popupPicker}>Choose</Button>
          </div>
          <button type="submit" value="Add Slice" className="button">Add Slice</button>
        </div>
      </form>
    );
  }
}