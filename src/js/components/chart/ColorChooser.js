import React from "react";

import {SketchPicker} from 'react-color';
import {AlphaPicker} from 'react-color';
import {BlockPicker} from 'react-color';
import {PhotoshopPicker} from 'react-color';
import {CirclePicker} from 'react-color';
import {Modal, Button} from 'react-bootstrap';

/**
 * ColorChooser. Works with react-color (a color picker)
 */
export default class ColorChooser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModalColorPicker: false,
      color: '#fbfbfb'
    };

    this.cancel = this.cancel.bind(this);
    this.popupPicker = this.popupPicker.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }

  render() {

    var style = {
      color: 'black',
      background: this.state.color
    };

    return (
    <div className="input-group col-xs-5">
      <span className="input-group-addon">
        <i className="glyphicon glyphicon-tint"></i>
      </span>

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
    )
  }

  chooseColor(event) {
    this.setState({showModalColorPicker: false, color: event.hex});
    this.props.onChooseColor(event.hex);
  }

  cancel(event) {
    this.setState({showModalColorPicker: false});
  }

  popupPicker(event) {
    this.setState({showModalColorPicker: true});
  }
}