import Immutable from 'immutable';
import selectors from './selectors'
class BarChartEntity {

  static get path() {
    return ['app', 'bar'];
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

  static deleteSeries(imState, action) {
    let list = imState.getIn(['series'])
    list = list.filter(function (elem) {
      return elem.get("name") !== action.seriesName
    })
    imState = imState.setIn(['series'], list)

    console.info("2")
    console.info(JSON.stringify(imState.toJS()))

    return imState;
  }


  static updateColor(imState, action) {
    let list = imState.getIn(['series'])

    let list3 = list.update(
      list.findIndex(function(item) {
        return item.get("name") === action.seriesName;
      }), function(item) {
        return item.set("color", action.color);
      }
    );
    imState = imState.setIn(['series'], list3)
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

    let filtered = imState.getIn(['categories']).filter(elem => elem !== action.categoryName);
    imState = imState.setIn(['categories'], filtered);


    /**
     * Go through each series object and delete the data element at the specific index
     * which correponds to the category index.
     */
    let index = action.index;
    let seriesList = imState.getIn(['series']);

    console.info("seriesList ", seriesList.toJS())

    // seriesList = seriesList.updateIn(
    //   ['data'],
    //   function(item) {
    //     console.info("item ", item)
    //     return "XXXXXXXXXXXXXXXXXXxx";
    //   }
    // )

    // seriesList = seriesList.update(
    //
    //   function(item) {
    //     item.set("name", "asdfasdfasdfasdfasdf");
    //     return item;
    //   }
    //
    // )


      // seriesList = seriesList.updateIn(['name'], () => "asdfasdfasdfasdfasdf")//a => "ftg")


    // let seriesList = seriesList.update(
    //   list.findIndex(function(item) {
    //     return item.get("name") === action.seriesName;
    //   }), function(item) {
    //     return item.set("color", action.color);
    //   }
    // );








    seriesList = seriesList.toJS();
    seriesList.forEach(function (elem) {
      let data = elem.data;
      data.splice(index, 1);
    });
    var v = Immutable.fromJS(seriesList)


    imState = imState.setIn(['series'], seriesList);

    return imState;
  }

  static createSeries(imState, action) {
    let series = action.series;

    let list = imState.getIn(['series'])

    list = list.toJS();
    let firstSeries = list[0];

    let dataArr = [];
    firstSeries.data.forEach(function (data) {
      let n = data.name;
      dataArr.push({"x": n, "y": 0});
    });

    list.push(
      {
        name: series.name,
        color: series.color,
        data: dataArr
      },
    );

    var v = Immutable.fromJS(list)
    imState = imState.setIn(['series'], v)
    return imState;
  }

  static cellChanged(imState, action) {

    let row = action.value.fromRow;
    let seriesName = Object.keys(action.value.updated)[0];
    let cellValue = action.value.updated[seriesName];

    console.info('cellvalue', cellValue);


    if (seriesName === "category") {
      imState = imState.setIn(['categories', row], cellValue)
    } else {

      var list = imState.getIn(['series']);

      var index = list.findIndex(function (item) {
        return item.get("name") === seriesName;
      })

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


