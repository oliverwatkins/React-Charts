import React from "react";


import ColorChooser from '../ColorChooser'


import BarChartEntity from "../../../../js/entity/BarChartEntity";
import Actions from "../../../../js/Actions";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


import './List.less';


export default class BarSeriesList extends React.Component {
  constructor(props) {
    super(props);
    this.colorSelected = this.colorSelected.bind(this);
  }


  colorSelected(color, seriesName) {
    Actions.updateColor(color, seriesName)
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
    const series = BarChartEntity.getSeries(this.props.app);

    console.info("3")
    console.info(JSON.stringify(this.props.app))


    let deleteS = this.deleteSeries;

    let self = this;

    return (
      <MuiThemeProvider>


      <div className="listStyle">
        <table>
          <tbody>
          {series.map(function (series, i) {

            console.info('in render: series name = ' + series.name + ' color ' + series.color)


            var key = 'xx_' + i;
            return (
              <tr key={key}>
                <td>
                  {series.name}
                </td>
                <td>

                  <ColorChooser color={series.color}
                                onChooseColor={
                                  (color) => {
                                    self.colorSelected(color, series.name)
                                  }
                                }/>
                </td>
                <td>
                  <FlatButton label="Delete" secondary={true}
                              onClick={(e) => deleteS(e, series.name)}/>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      </MuiThemeProvider>
    );
  }
}
