import Immutable from 'immutable';

export const pieChartLogic = {

  createSlice(imState, action) {
    imState = imState.updateIn(['data'], a => a.push(action))
    return imState;
  },

  deleteSlice(imState, name) {
    //filter out all except where there is a name match
    let filtered = imState.getIn(['data']).filter(o => {return o.get('name') !== name});
    imState = imState.setIn(['data'], filtered);
    return imState;
  },

  changeName(imState, newName) {
    imState = imState.setIn(['name'], newName)
    return imState;
  },

  fetchFinished(imState, action) {

    let pieData = Immutable.fromJS(action.payload.app.pie);

    imState = imState.setIn([], pieData);
    imState = imState.setIn(['isFetching'], false);

    return imState;
  },
};



