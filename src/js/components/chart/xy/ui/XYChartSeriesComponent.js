import React from "react";


import XYChartForm from "./LineChartForm";


import './List.less';

/**
 * Manages creating deleting series for chart.
 *
 *
 */
export default class XYChartSeriesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // keyPress(e) {
  //   e.persist();
  //   let val = this.refs.titleField.input.value
  //   this.props.onChange(val);
  // }

  handleCreateSeries() {

    alert("create")
  }

  onChange (seriesName, axis, row, e) {

    e.persist();

    let inputLabel = "input_" + axis + "_" + row + "_" + seriesName
    let textfieldChange = this.refs[inputLabel];
    let val = textfieldChange.value;

    this.props.changeCellXY({name: seriesName, axis:axis, row:row, value:val})
  }

  render() {

    let style = {
      "padding": "3px",
      "margin": "3px",
      "border": "5px solid blue"
    }

    let series = this.props.xySeries;

    let seriesC = <div>{
      series.map((val) => <div>
          <div>
            {val.name} - {val.color}
          </div>
          <form>
          {
            val.data.map((v, row) => <div>
              <span>
                <input onChange={(e) => this.onChange(val.name, "x", row, e)} ref={"input_x_" + row + "_" + val.name} type="text" value={v.x}/>
                <input onChange={(e) => this.onChange(val.name, "y", row, e)} ref={"input_y_" + row + "_" + val.name} type="text" value={v.y}/>
              </span>
            </div>)
          }

          <span><input value={"empy1"}/><input value={"empy2"}/></span>

          </form>
        </div>
      )
    }
    </div>

    return (


      <div className="listStyle" style={style}>

        <input value="Create Series" type="button" onClick={this.handleCreateSeries}/>
        {
          seriesC
        }
      </div>
    );
  }
}
