import Immutable from 'immutable';

class BarChartEntity {

  static get path() {
    return ['app', 'bar'];
  }






  //@deprecated
  static getSeries(appState) {
    return appState.bar.series;
  }

  static getSeries2(barData) {
    return barData.series;
  }

  static isFetching2(barData) {
    return barData.isFetching;
  }

  static isFetching(appState) {
    return appState.bar.isFetching;
  }

  static getCategories2(barData) {
    return barData.categories;
  }
  static getCategories(appState) {
    return appState.bar.categories;
  }

  static createCategory(imState, action) {

    let myList = imState.getIn([...this.path, 'categories'])
    myList = myList.toJS();
    myList.push(action.value.name)
    var v = Immutable.fromJS(myList)
    imState = imState.setIn([...this.path, 'categories'], v)


    //now for each series create an entry
    var list = imState.getIn([...this.path, 'series']);
    list = list.toJS();

    list.forEach(function (data) {
      data.data.push({y: "0"})
    });

    var v = Immutable.fromJS(list)


    imState = imState.setIn([...this.path, 'series'], v);

    return imState;
  }

  static deleteSeries(imState, action) {
    let list = imState.getIn([...this.path, 'series'])

    console.info("1")
    console.info(JSON.stringify(list.toJS()))

    list = list.filter(function (elem) {
      return elem.get("name") !== action.seriesName
    })
    imState = imState.setIn([...this.path, 'series'], list)

    console.info("2")
    console.info(JSON.stringify(imState.toJS()))

    return imState;
  }


  static updateColor(imState, action) {

    var list = imState.getIn([...this.path, 'series']);

    list = list.update(
      list.findIndex(function(item) {
        let b = item.get("name") === action.seriesName;
        return item;
      }), function(item) {
        let l = item.get("name")
        return item.set("color", action.color);
      }
    );

    list = list.toJS();

    imState = imState.setIn([...this.path, 'series'], list)

    return imState;
  }

  static fetchFinished(imState, action) {

    var v = Immutable.fromJS(action.payload.app.bar)

    imState = imState.setIn([...this.path], v)

    imState = imState.setIn([...this.path, 'isFetching'], false)

    return imState;
  }

  static deleteCategory(imState, action) {

    let index = action.index;

    let categoryList = imState.getIn([...this.path, 'categories'])
    let seriesList = imState.getIn([...this.path, 'series'])

    categoryList = categoryList.filter(function (elem) {
      return elem !== action.categoryName
    })
    imState = imState.setIn([...this.path, 'categories'], categoryList)

    var list = imState.getIn([...this.path, 'series']);
    list = list.toJS();

    list.forEach(function (elem) {
      let data = elem.data;
      data.splice(index, 1);
    });

    var v = Immutable.fromJS(list)

    imState = imState.setIn([...this.path, 'series'], v);

    return imState;
  }

  static createSeries(imState, action) {
    let series = action.series;

    let list = imState.getIn([...this.path, 'series'])

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
    imState = imState.setIn([...this.path, 'series'], v)
    return imState;
  }

  static cellChanged(imState, action) {

    let row = action.value.fromRow;
    let seriesName = Object.keys(action.value.updated)[0];
    let cellValue = action.value.updated[seriesName];


    if (seriesName === "category") {
      imState = imState.setIn([...this.path, 'categories', row], cellValue)
    } else {

      var list = imState.getIn([...this.path, 'series']);

      var index = list.findIndex(function (item) {
        return item.get("name") === seriesName;
      })

      imState = imState.setIn([...this.path, 'series', index, 'data', row, 'y'], cellValue)
    }
    return imState;
  }

  static changeName(imState, newName) {
    imState = imState.setIn([...this.path, 'name'], newName)

    return imState;
  }
}

export default BarChartEntity;


