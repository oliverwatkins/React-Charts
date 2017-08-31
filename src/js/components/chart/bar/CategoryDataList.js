import React from "react";

import AppStore from "../../../../js/AppStore";
import BarChartEntity from "../../../../js/entity/BarChartEntity";


export default class CategoryDataList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // SlicesStore.on("change", this.getSlices);
  }

  componentWillUnmount() {
    // SlicesStore.removeListener("change", this.getSlices);
  }

  render() {
    const series = BarChartEntity.getSeries(this.props.app);
    const categories = BarChartEntity.getCategories(this.props.app);

    return (
      <table className="table">
        <tbody>

        {categories.map(function (cat, i) {
          var key = 'xx_' + i;

          var style = {
            color: 'black',
          };

          return (
            <tr key={key}>
              <td>
                {cat}
              </td>
              <td>
                <input type="button" value="delete"/>
              </td>
            </tr>
          );
        })}

        </tbody>
      </table>
    );
  }
}
