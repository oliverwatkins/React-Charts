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

    return state;
  }

  reduce(state, action) {

    var imState = Immutable.fromJS(state);

    switch (action.type) {

      case 'CREATE_SLICE':

        var myList = imState.getIn(['app', 'pie', 'data'])
        myList = myList.toJS();
        myList.push(action.slice);

        var v = Immutable.fromJS(myList)

        imState = imState.setIn(['app', 'pie', 'data'], v)
        break;

      case 'CHANGE_NAME':
        var newName = action.newName;

        imState = imState.setIn(['app', 'pie', 'name'], newName)

        break;
    }

    console.info('updated state is ' + imState.toJS());

    return imState.toJS();
  }

}

export default new AppStore();
