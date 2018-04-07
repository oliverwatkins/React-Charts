import React from "react";

import XYSeriesComponent from "./XYSeriesComponent";

import XYChartForm from "./LineChartForm";


import './List.less';


export default class XYChartSeriesComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="listStyle">


        <XYChartForm/>

        <XYSeriesComponent/>
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
