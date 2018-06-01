import React from "react";


import XYChartForm from "./LineChartForm";


import './List.less';

/**
 * Manages creating deleting series for chart
 */


export default class XYChartSeriesComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    let style = {
      "padding": "3px",
      "margin": "3px",
      "border": "5px solid blue"
    }

    let x = this.props.xyData;

    let series = this.props.xyData.series;



    let seriesC = <div>{
      series.map((val)=><div>
          <div>
        {val.name} - {val.color}

        </div>
          {
            val.data.map((v) => <div>
              <span>
              <input type="text" value={v.x}/><input type="text" value={v.y}/></span>
            </div>)
          }
      </div>

      )
    }
    </div>

    return (
      <div className="listStyle" style={style}>

        <input value="Create Series" type="button"/>
        {
          seriesC
        }
      </div>
    );
  }
}
