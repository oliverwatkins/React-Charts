import React from "react";

import BarChartEntity from "../../../../js/entity/BarChartEntity";

import './List.less';
import Actions from "../../../../js/Actions";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

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


  deleteCategory(event, categoryName, index) {
    event.preventDefault();
    Actions.deleteCategory(categoryName, index);
  }

  render() {
    // const series = BarChartEntity.getSeries(this.props.app);
    const categories = BarChartEntity.getCategories(this.props.app);

    let deleteS = this.deleteCategory;

    return (
      <MuiThemeProvider>
    <div className="listStyle">
      <table>
        <tbody>
        {categories.map(function (cat, i) {
          let key = 'xx_' + i;
          return (
            <tr key={key}>
              <td>
                {cat}
              </td>
              <td>
                <FlatButton label="Delete" secondary={true}
                            onClick={(e) => deleteS(e, cat, i)}/>

                {/*<input type="button" value="delete"*/}
                       {/*onClick={(e) => deleteS(e, cat, i)}/>*/}
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
