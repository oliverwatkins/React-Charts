
import reducer from "./../AppReducer"
import {changeNamePie} from './../ActionsRedux.js'
/*
Test the reducer functions
 */
describe('Test Reducer functions', () => {

  it('change pie name ', () => {

    console.log('reducer initial ', initialState)

    let state = reducer(initialState, changeNamePie("blah"))

    console.log('reducer ', state)

    expect(state.app.pie.name).toBe('blah')
  })

})


const initialState =
  {
    app: {
      pie: {},
      xy: {},
      bar: {
        name: "Bar Chart",
        categories: [
          "dog",
          "cat",
          "cow"
        ],
        series: [
          {
            name: "Mexico",
            color: "red",
            data: [
              {y: 0},
              {y: 0},
              {y: 0},
              {y: 0}
            ]
          },
          {
            name: "Germany",
            color: "orange",
            data: [
              {y: 0},
              {y: 0},
              {y: 0},
              {y: 0}
            ]
          },
          {
            name: "Holland",
            color: "blue",
            data: [
              {x: 1, y: 0},
              {x: 2, y: 0},
              {x: 3, y: 0},
              {x: 4, y: 0}
            ]
          }
        ]
      }
    }
  }
