// import Immutable from 'immutable';
//
// class PieChart {
//
//   static get path() {
//     return ['app', 'pie'];
//   }
//
//   static createSlice(imState, action) {
//     imState = imState.updateIn(['data'], a => a.push(action))
//     return imState;
//   }
//
//   static deleteSlice(imState, name) {
//     let filtered = imState.getIn(['data']).filter(o => {return o.get('name') !== name});
//     imState = imState.setIn(['data'], filtered);
//     return imState;
//   }
//
//   static changeName(imState, newName) {
//     imState = imState.setIn(['name'], newName)
//     return imState;
//   }
// }
//
// export default PieChart;
//
//
