import Immutable from 'immutable';

class PieChart {

  static get path() {
    return ['app', 'pie'];
  }

  static createSlice(imState, action) {
    imState = imState.updateIn([...this.path, 'data'], a => a.push(action))
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


