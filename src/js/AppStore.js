"use strict";

import {ReduceStore} from "flux/utils";

import Immutable from "immutable";


import AppState from "./AppState.js";
import AppDispatcher from "./AppDispatcher.js";

class AppStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    var state = AppState;

    state.asdf = "asdf"

    return state;
  }

  reduce(state, action) {

    var imState = Immutable.fromJS(state);

    switch (action.type) {

      case 'ADD_PIE_SLICE':

        imState = imState.update(['app','pie','data'], myList => myList.push(action.slice));

        break;

      case 'CHANGE_NAME':
        var newName = action.newName;

        imState = imState.setIn(['app','pie','name'], newName)

        break;
    }
    return imState.toJS();
  }

    //   getAllSlices() {
    //     return this.slices;
    // }

}

export default new AppStore();
