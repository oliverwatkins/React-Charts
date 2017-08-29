import Immutable from 'immutable';

class LineChart {

  static get path() {
    return ['app', 'line'];
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
     * updated: {seriesName: '99
         * }
     */



    let row = action.value.fromRow;
    let seriesName = Object.keys(action.value.updated)[0];
    let cellValue = action.value.updated[seriesName]

    var list = imState.getIn([...this.path, 'series']);

    var index = list.findIndex(function (item) {
      return item.get("name") === seriesName;
    })

    imState = imState.setIn([...this.path, 'series', index, 'data', row, 'y'], cellValue)

    return imState;
  }

  static changeName(imState, newName) {
    imState = imState.setIn([...this.path, 'name'], newName)

    return imState;
  }
}

export default LineChart;


