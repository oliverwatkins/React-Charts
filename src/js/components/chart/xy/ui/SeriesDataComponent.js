import React from "react";


import MUITextField from 'material-ui/TextField';

import './List.less';

import ColorChooser from '../../ColorChooser';

export default class SeriesDataComponent extends React.Component {
  constructor(props) {
    super(props);

    this.colorSelected = this.colorSelected.bind(this);
  }


  render() {
    let style = {
      "padding": "3px",
      "margin": "3px",
      // "border": "5px solid blue"
    }
    return (

      <div>
        <table>
          <tr>
          <td>
            <MUITextField
              id="enterSeriesNameField"
              style={{width:170}}
              hintText="Enter Series Name"
              type="text"
              ref="seriesName"
              // value={props.name}
              name="newSlice"
              onChange={this.onChangeText}
              data-rh="Bottom" data-rh-at="bottom" />
          </td>
          <td>
            <ColorChooser style={style} onChooseColor={this.colorSelected}/>
          </td>
          <td>
            <select>
              <option value="diamond">diamond</option>
              <option value="square">square</option>
              <option value="circle">circle</option>
              <option value="cross">cross</option>
            </select>
          </td>
        </tr>
        </table>
      </div>
    );
  }

  colorSelected(color, seriesName) {

    debugger;


    this.setState({selectedColor: color});


    // handleUpdateColorXY
    this.props.handleUpdateColorXY({value:color, seriesName:"ASDF"})
  }
}




