"use strict";

import {ReduceStore} from "flux/utils";

import AppState from "./AppState.js";
import ActionTypes from "./ActionTypes.js";

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
    switch (action.type) {
      case ActionTypes.ADD_PIE_SLICE:
        alert();
        // state = DateRangeEntity.setFrom(state, action.index, action.value);
        // state = filtersUpdated(state);
        break;
      case ActionTypes.ENTER_PIE_CHART_NAME:
        // state = DateRangeEntity.setTo(state, action.index, action.value);
        break;
      case ActionTypes.CHANGE_NAME:
        var newName = action.newName;

        // setState({state :
        //             {app :
        //               pie : {
        //                 name : "asdfasdf"
        //               }
        //             }
        //           });

        state.app.pie.name = newName;
        this.emit("change");
        break;
      case ActionTypes.CHANGE_SLICE_NAME:
        var newName = action.newName;
        state.app.pie.form.sliceName = newName;
        break;
    }
    return state;
  }
}

export default new AppStore();
