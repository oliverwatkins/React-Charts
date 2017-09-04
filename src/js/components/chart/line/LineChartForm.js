import React from "react";
import ColorChooser from '../ColorChooser'
import Actions from "../../../../js/Actions";

import ReactDOM from "react-dom";

export default class LineChartForm extends React.Component {

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


  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  render() {

    return (<div>TODO</div>)


    let style = {
      "padding": "3px",
      "margin": "3px"
    }
    return (




      <div style={style}>
        <h3>Series :</h3>

        <form onSubmit={this.handleSubmit}>

        <input style={style} type="text" ref="seriesName" onChange={this.handleChartSliceChange}
                     name="newSlice" placeholder="Series Name"/>

        <ColorChooser style={style} onChooseColor={this.colorSelected}/>

        <input style={style} type="submit" value="Add Series" className="button"/>
      </form>
      </div>
    )
  }
}