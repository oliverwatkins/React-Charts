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

    // var imState = Immutable.fromJS(state);

    state.fuckthisshit = "fuckthisshit"

    return state;
  }

  reduce(state, action) {

    var imState = Immutable.fromJS(state);

    switch (action.type) {
      case 'CHANGE_NAME':
        var newName = action.newName;

        imState = imState.setIn(['app','name'], newName)

        break;
    }
    return imState.toJS();
  }
}

export default new AppStore();
