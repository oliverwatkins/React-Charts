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

      case 'CELL_CHANGED':

        // this.props.app.line.series[1].data[2] = {x:1, y:99}


        console.info("imState.toJS().app.line " + imState.toJS().app.line)

        imState = imState.setIn(['app', 'line', 'series', 2, 'data', 1, 'y'], 999)

        //
        //
        // imState = imState.updateIn(['app', 'line', 'series'], function (seriesList) {
        //   seriesList = seriesList.update(1, function (v) {
        //
        //     return {
        //       name: "asdfasdf",
        //       data: [
        //         {x: 1, y: 88},
        //         {x: 2, y: 88},
        //         {x: 3, y: 88},
        //         {x: 4, y: 88}
        //       ]
        //     };
        //   })
        // })
        //
        // var myList = imState.getIn(['app', 'line', 'series'])
        //
        //
        // myList = myList.toJS();
        // myList.push(action.slice);
        //
        // // imState = imState.setIn(['app', 'pie', 'name'], newName)
        // imState = imState.setIn(['app', 'line', 'name'], newName)

        console.info("imState.toJS().app.line " + imState.toJS().app.line)
        console.info("imState.toJS().app.line.series[2].data[1] " + imState.toJS().app.line.series[2].data[1])

        break;
    }

    console.info('updated state is ' + imState.toJS());

    return imState.toJS();
  }

}

export
default
new

  AppStore();
