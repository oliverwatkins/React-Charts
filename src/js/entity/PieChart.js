import Immutable from 'immutable';

class PieChart {

  static get path() {
    return ['app', 'pie'];
  }

  /**
   *
   * @param imState
   * @param action
   * @returns {*}
   */
  static createSlice(imState, action) {

    var myList = imState.getIn([...this.path, 'data'])
    // console.log(myList)
    myList = myList.toJS();
    myList.push(action);

    var v = Immutable.fromJS(myList)

    imState = imState.setIn([...this.path, 'data'], v)

    return imState;
  }

  static deleteSlice(imState, name) {
    let filtered = imState.getIn([...this.path, 'data']).filter(o => {return o.get('name') !== name});
    imState = imState.setIn([...this.path, 'data'], filtered);
    return imState;
  }

  static changeName(imState, newName) {
    imState = imState.setIn([...this.path, 'name'], newName)
    return imState;
  }
}

export default PieChart;


