import React from "react";

import BarChartEntity from "../../../../js/entity/BarChartEntity";

import './List.less';
import {deleteCategory} from "../../../../js/ActionsRedux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import {connect} from 'react-redux'
import {} from '../../../ActionsRedux'


export class CategoryDataList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  render() {
    let barData = this.props.barData;
    // const series = BarChartEntity.getSeries(this.props.app);
    const categories = BarChartEntity.getCategories2(barData);
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

  deleteCategory(event, categoryName, index) {
    event.preventDefault();
    this.props.deleteCategory(categoryName, index);
  }
}


const mapStateToProps = state => {
  return {
    barData: state.app.bar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteCategory: (categoryName, index) => {
      dispatch(deleteCategory(categoryName, index))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDataList)


