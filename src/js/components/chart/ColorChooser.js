import React from "react";

import {SketchPicker} from 'react-color';
import {AlphaPicker} from 'react-color';
import {BlockPicker} from 'react-color';
import {PhotoshopPicker} from 'react-color';
import {CirclePicker} from 'react-color';
import {Modal, Button} from 'react-bootstrap';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


/**
 * ColorChooser. Works with react-color (a color picker)
 */
export default class ColorChooser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModalColorPicker: false,
      color: props.color ? props.color : '#c2a5ca'
    };

    this.cancel = this.cancel.bind(this);
    this.popupPicker = this.popupPicker.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }

  render() {

    var style = {
      padding: 10,
      width: 90,
      color: 'black',
      background: this.state.color,


      borderRadius: "25px",
    // -moz-border-radius: 25px,
    // -webkit-border-radius: 25px,
    //   border: "1px solid #800000",
    //   borderColor:"gray",
      cursor: "pointer"
    };

    return (

      <MuiThemeProvider>

      <span>

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

        <div label={this.state.color}
             onClick={this.popupPicker}
             style={style}>{this.state.color}</div>

        {/*<input type="text" ref="color"*/}
        {/*onClick={this.popupPicker}*/}
        {/*name="color"*/}
        {/*placeholder="Choose Color"*/}
        {/*value={this.state.color}*/}
        {/*style={style}/>*/}

      </span>
      </MuiThemeProvider>

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