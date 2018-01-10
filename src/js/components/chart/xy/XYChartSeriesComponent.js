import React from "react";

import Actions from "../../../../js/ActionsRedux";

import XYChartEntity from "./XYChartEntity";

import './List.less';


export default class XYChartSeriesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // SlicesStore.on("change", this.getSlices);
  }

  componentWillUnmount() {
    // SlicesStore.removeListener("change", this.getSlices);
  }

  deleteSeries(event, seriesName) {
    event.preventDefault();
    Actions.deleteSeries(seriesName);
  }

  render() {


    return (
      <div className="listStyle">asdf
        {/*<table>*/}
          {/*<tbody>*/}
          {/*{this.props.app.xy.series.map(function (series, i) {*/}
            {/*var key = 'xx_' + i;*/}
            {/*var style = {*/}
              {/*color: 'black',*/}
              {/*background: series.color*/}
            {/*};*/}
            {/*return (*/}
              {/*<tr key={key}>*/}
                {/*<td>*/}
                  {/*{series.name}*/}
                {/*</td>*/}
                {/*<td style={style}>*/}
                  {/*{series.color}*/}
                {/*</td>*/}
                {/*<td>*/}
                  {/*<input type="button" value="delete"*/}
                         {/*onClick={(e) => deleteS(e, series.name)}*/}
                  {/*/>*/}
                {/*</td>*/}
              {/*</tr>*/}
            {/*);*/}
          {/*})}*/}
          {/*</tbody>*/}
        {/*</table>*/}
      </div>
    );
  }
}
