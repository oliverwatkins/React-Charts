import React from "react";
import XYSeriesInfoComponent from './XYSeriesInfoComponent'
import PropTypes from 'prop-types';

import './List.less';

import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';

/**
 * Manages creating deleting series for chart.
 *
 *
 */
export default class XYChartSeriesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  static propTypes = {
    changeXYSeriesName: PropTypes.func.isRequired,
    deleteSeries: PropTypes.func.isRequired


  };


  onChange (seriesName, axis, row, e) {
    e.persist();
    let inputLabel = "input_" + axis + "_" + row + "_" + seriesName
    let textfieldChange = this.refs[inputLabel];
    let val = textfieldChange.value;

    this.setState({event: {inputLabel: inputLabel, type: 'keypress', value: e.target.value}});
  }


  onBlur (seriesName, axis, row, e) {
    e.persist();

    let inputLabel = "input_" + axis + "_" + row + "_" + seriesName
    let textfieldChange = this.refs[inputLabel];
    let val = textfieldChange.value;

    console.info("seriesName " + seriesName)
    this.props.changeCellXY({name: seriesName, axis:axis, row:row, value:val})
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state) {
      if (this.state.keyPress) {
        console.info("do NOT update component....")
        return false;
      }else {

        return true;
      }
    }
    return true;
  }


  render() {
    let style = {
      "padding": "3px",
      "margin": "3px",
      // "border": "5px solid blue"
    };

    // debugger;

    let series = this.props.xySeries;
    let tabbedPane =
      <Tabs>
        <TabList>{
          series.map((val, i) =>
            <Tab key={"tab_" + i}>
              <div key={"tabdiv_" + i}>
                {val.name} - {val.color}
              </div>
            </Tab>
          )
        }
        </TabList>
        {
        series.map((series, i) =>
          <TabPanel key={i}>
            <XYSeriesInfoComponent data={series}
                                 deleteSeries={this.props.deleteXYSeries}
                                 changeXYSeriesName={this.props.changeXYSeriesName}
            />
            <form>
              <table>
                <tbody>
                {
                  series.data.map(
                    (v, row) => {

                      let refX = "input_x_" + row + "_" + series.name;
                      let refY = "input_y_" + row + "_" + series.name;

                      let valueX=v.x;
                      let valueY=v.y;

                      if (this.state && this.state.event) {

                        if (refY === this.state.event.inputLabel) {
                          valueY = this.state.event.value;
                        }
                        else if (refX === this.state.event.inputLabel) {
                          valueX = this.state.event.value;
                        }
                        console.info(' ' + this.state.event.inputLabel + " value " + this.state.event.value)
                      }

                      let xInput = <input
                        onBlur={(e) => this.onBlur(series.name, "x", row, e)}
                        onChange={(e) => this.onChange(series.name, "x", row, e)}
                        ref={refX} key={refX} type="text" value={valueX}/>

                      let yInput =
                        <input
                          onBlur={(e) => this.onBlur(series.name, "y", row, e)}
                          onChange={(e) => this.onChange(series.name, "y", row, e)}
                          ref={refY} key={refY} type="text" value={valueY}/>

                      return <tr key={row}>
                        <td>
                          {xInput}
                        </td>
                        <td>
                          {yInput}
                        </td>
                      </tr>
                    }
                  )
                }
                  <tr key={"empty"}>
                    <td>
                      <input value={"empty1"} onChange={()=>alert("TODO")}/>
                    </td>
                    <td>
                      <input value={"empty2"} onChange={()=>alert("TODO")}/>
                    </td>
                  </tr>
                </tbody>
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
