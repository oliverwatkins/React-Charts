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

      case 'CREATE_SLICE':

        // imState = imState.getIn(['app', 'pie', 'data']).push(action.slice);

        // imState = imState.setIn(['app', 'pie', 'name'], "why you not working")

        var myState = {
          a: {
            b: {
              c: [
                {name: 'hi', value: 2},
                {name: 'howdy', value: 3}
              ]
            }
          }
        }
        myState = Immutable.fromJS(myState);

        var list = myState.getIn(['a', 'b', 'c'])
        var list = list.toJS();

        list.push({"name": "hallo", "value": 4});

        var v = Immutable.fromJS(list)

        myState = myState.setIn(['a', 'b', 'c'], v)



        myState = myState.updateIn(['a', 'b', 'c'], function (myList) {
            return myList.push({"name": "hallo", "value": 4})
          }
        );






        var myList = imState.getIn(['app', 'pie', 'data'])

        console.info('myList ' + myList.toJS())




        imState = imState.update(['app', 'pie', 'data'], function (myList) {
            myList.push(action.slice)
          }
        );

        break;

      case 'CHANGE_NAME':
        var newName = action.newName;

        imState = imState.setIn(['app', 'pie', 'name'], newName)

        break;
    }

    console.info('updated state is ' + imState.toJS());

    return imState.toJS();
  }

  //   getAllSlices() {
  //     return this.slices;
  // }

}

export default new AppStore();
