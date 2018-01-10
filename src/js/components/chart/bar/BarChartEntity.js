import Immutable from 'immutable';
// import {setIn} from 'immutable';

class BarChartEntity {

  static get path() {
    return [];
  }

  static getSeries2(barData) {
    return barData.series;
  }

  static isFetching2(barData) {
    return barData.isFetching;
  }

  static getCategories2(barData) {
    return barData.categories;
  }

  static createCategory(imState, action) {

    let myList = imState.getIn(['categories'])
    myList = myList.toJS();
    myList.push(action.value.name)
    var v = Immutable.fromJS(myList)
    imState = imState.setIn(['categories'], v)


    //now for each series create an entry
    var list = imState.getIn(['series']);
    list = list.toJS();

    list.forEach(function (data) {
      data.data.push({y: 0})
    });

    var v = Immutable.fromJS(list)

    imState = imState.setIn(['series'], v);

    return imState;
  }

  /**
   * Remote element from list.
   */
  static deleteSeries(imState, action) {
    let list = imState.getIn(['series'])
    let listWithout = list.filter((elem) => elem.get("name") !== action.seriesName)
    imState = imState.setIn(['series'], listWithout)
    return imState;
  }


  static updateColor(imState, action) {
    let list = imState.getIn(['series'])

    let updatedList = list.update(
      list.findIndex(function(item) {
        return item.get("name") === action.seriesName;
      }), function(item) {
        return item.set("color", action.color);
      }
    );
    imState = imState.setIn(['series'], updatedList)
    return imState;
  }

  static fetchFinished(imState, action) {

    var v = Immutable.fromJS(action.payload.app.bar)
    imState = imState.setIn([...this.path], v)
    imState = imState.setIn([...this.path, 'isFetching'], false)

    return imState;
  }

  /**
   * TODO refactor so not using JS, and using immutable.
   *
   * need to figure out how to use immutable to change a deep nested array. Eg delete the second array element
   * (the number '2') in all array elements below.

   array : [
   {data : [1,2,3]}
   {data : [1,2,3]}
   {data : [1,2,3]}
   ]
   */

  static deleteCategory(imState, action) {


    let index = imState.getIn(['categories']).findIndex(item => item === action.categoryName)


    //filter out category and replace in state
    let filteredCategories = imState.getIn(['categories']).filter(elem => elem !== action.categoryName);
    imState = imState.setIn(['categories'], filteredCategories);


    /**
     * Go through each series object and delete the data element at the specific index
     * which correponds to the category index.
     */
    let seriesList = imState.getIn(['series']);

    seriesList  = Immutable.List(seriesList);

    seriesList = seriesList.map(
      elem => {
        let data = elem.getIn(['data'])
        data = data.remove(index)
        elem = elem.setIn(['data'], data)
        return elem
      })

    imState = imState.setIn(['series'], seriesList);

    return imState;
  }


  /**
   * TODO should only be immutableJS
   * @param imState
   * @param action
   * @returns {*}
   */
  static createSeries(imState, action) {
    let series = action.series;

    let list = imState.getIn(['series'])




    /////////// JS /////////////////
    list = list.toJS();
    let firstSeries = list[0];

    //create an empty series
    let emptySeries = firstSeries.data.reduce((accum) => {
      accum.push({y:0})
      return accum;
    }, [])

    list.push(
      {
        name: series.name,
        color: series.color,
        data: emptySeries
      },
    );

    var v = Immutable.fromJS(list)
    /////////// JS /////////////////


    imState = imState.setIn(['series'], v)
    return imState;
  }

  static cellChanged(imState, action) {

    let row = action.value.fromRow;
    let seriesName = Object.keys(action.value.updated)[0];
    let cellValue = action.value.updated[seriesName];

    if (seriesName === "category") {
      imState = imState.setIn(['categories', row], cellValue)
    } else {

      let list = imState.getIn(['series']);

      let index = list.findIndex(function (item) {
        return item.get("name") === seriesName;
      });

      imState = imState.setIn(['series', index, 'data', row, 'y'], cellValue)
    }
    return imState;
  }

  static changeName(imState, newName) {
    imState = imState.setIn(['name'], newName)
    return imState;
  }
}

export default BarChartEntity;


