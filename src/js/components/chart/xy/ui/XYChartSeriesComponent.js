import React from "react";

import MUITextField from 'material-ui/TextField';
import SeriesDataComponent from './SeriesDataComponent'


import './List.less';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

/**
 * Manages creating deleting series for chart.
 *
 *
 */
export default class XYChartSeriesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // @deprecated
  handleCreateSeries() {

    this.props.createXYSeries({name: "xxx", color: "red"})
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
      // "border": "5px solid blue"
    };

    let series = this.props.xySeries;
    let tabbedPane =
      <Tabs>
        <TabList>{
          series.map((val) =>
            <Tab>
              <div>
                {val.name} - {val.color}
              </div>
            </Tab>
          )
        }
        </TabList>
        {
        series.map((val) =>
          <TabPanel>
            <SeriesDataComponent name={val.name} handleUpdateColorXY={this.props.updateColorXY} />
            <form>

              <table>
              {
                val.data.map((v, row) => <tr>
                  <td>
                    <input onChange={(e) => this.onChange(val.name, "x", row, e)} ref={"input_x_" + row + "_" + val.name} type="text" value={v.x}/>
                  </td>
                  <td>
                    <input onChange={(e) => this.onChange(val.name, "y", row, e)} ref={"input_y_" + row + "_" + val.name} type="text" value={v.y}/>
                  </td>
                </tr>)
              }
                <tr>
                  <td>
                    <input value={"empty1"}/>
                  </td>
                  <td>
                    <input value={"empty2"}/>
                  </td>
                </tr>
              </table>
            </form>
          </TabPanel>
          )
        }
      </Tabs>

      return (
        <div className="listStyle" style={style}>
          { tabbedPane }
        </div>
      );
  }
}
