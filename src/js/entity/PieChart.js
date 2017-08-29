import Immutable from 'immutable';

class PieChart {

  static get path() {
    return ['app', 'pie'];
  }

  static createSlice(imState, action) {

    var myList = imState.getIn([...this.path, 'data'])
    myList = myList.toJS();
    myList.push(action);

    var v = Immutable.fromJS(myList)

    imState = imState.setIn([...this.path, 'data'], v)

    return imState;
  }

  static changeName(imState, newName) {
    imState = imState.setIn([...this.path, 'name'], newName)

    return imState;
  }
}

export default PieChart;


