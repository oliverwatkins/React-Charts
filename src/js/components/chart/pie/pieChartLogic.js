import Immutable from 'immutable';

export const pieChartLogic = {

  // path() {
  //   return ['app', 'pie'];
  // },

  createSlice(imState, action) {
    imState = imState.updateIn(['data'], a => a.push(action))
    return imState;
  },

  deleteSlice(imState, name) {
    let filtered = imState.getIn(['data']).filter(o => {return o.get('name') !== name});
    imState = imState.setIn(['data'], filtered);
    return imState;
  },

  changeName(imState, newName) {
    imState = imState.setIn(['name'], newName)
    return imState;
  }
}



