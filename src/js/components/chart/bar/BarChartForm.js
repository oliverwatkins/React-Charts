import React from "react";
import TitleEditComponent from '../TitleEditComponent'
import ColorChooser from '../ColorChooser'
import Actions from "../../../../js/Actions";

import ReactDOM from "react-dom";

export default class BarChartForm extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.colorSelected = this.colorSelected.bind(this);

    this.state = {
      showModalColorPicker: false
    };
  }

  handleSubmit(event) {

    event.preventDefault();

    const val = ReactDOM.findDOMNode(this.refs.seriesName).value;

    let series = {
      name: val,
      color: this.state.selectedColor,
    }
    Actions.createSeries(series);
  }

  handleChartNameChange(event) {
    Actions.changeLineChartName(event.currentTarget.value);
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TitleEditComponent onChange={this.handleChartNameChange}/>

        <div className="css-form">
          <div className="col-xs-10">
            <div className="col-xs-9">
              <h3>Add Series Here :</h3>
            </div>
          </div>
          <div className="input-group col-xs-9">
                        <span className="input-group-addon">
                            <i className="glyphicon glyphicon-user"></i></span>
            <input type="text" ref="seriesName" className="form-control" onChange={this.handleChartSliceChange}
                   name="newSlice" placeholder="Series Name"></input>
          </div>

          <ColorChooser onChooseColor={this.colorSelected}/>
          <button type="submit" value="Add Series" className="button">Add Series</button>
        </div>
      </form>
    )
  }
}