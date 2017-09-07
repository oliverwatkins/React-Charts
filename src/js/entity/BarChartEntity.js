import Immutable from 'immutable';

class BarChartEntity {

  static get path() {
    return ['app', 'bar'];
  }

  static getSeries(appState) {
    return appState.bar.series;
  }

  static isFetching(appState) {
    return appState.bar.isFetching;
  }



  static getCategories(appState) {
    return appState.bar.categories;
  }

  static createCategory(imState, action) {

    // let catName = action.value.name

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

    list = list.filter(function (elem) {
      return elem.get("name") !== action.seriesName
    })
    imState = imState.setIn([...this.path, 'series'], list)

    return imState;
  }

  static fetchFinished(imState, action) {
    imState = imState.setIn([...this.path, 'isFetching'], false)
    return imState;
  }

  static deleteCategory(imState, action) {

    let index = action.index;

    let list = imState.getIn([...this.path, 'categories'])

    list = list.filter(function (elem) {
      return elem !== action.categoryName
    })
    imState = imState.setIn([...this.path, 'categories'], list)


    // list.forEach(function (data) {
    //   data.data.push({y:"0"})
    // });


    alert('not yet working')



    // let seriesList = imState.getIn([...this.path, 'series'])

    imState.update(
      ['app', 'bar', 'series'],
      series => series.map(s => s.update('color', color => "#1bf115"))
    )


    // seriesList = seriesList.update(
    //   'color',
    //   (elem) => {
    //     return '#1bf115'
    //   }
    //
    // );


    imState = imState.setIn([...this.path, 'series'], seriesList);


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

  /**
   *
   * @param imState
   * @param action
   * @returns {*}
   */
  static cellChanged(imState, action) {

    /**
     * action.value :
     * fromRow : 3,
     * toRow : 3,
     * updated: {seriesName: '99}
     */
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


