import reducer from "./../AppReducer"
import {changeNamePie, createSlice, deleteSlice} from './../ActionsRedux.js'
/*
Test the reducer functions
 */
describe('Test Reducer functions', () => {

  it('loads initial data correctly ', () => {
    // console.log('reducer initial ', initialState_Pie)

    let state = reducer(initialState_Pie)

    expect(state.app.pie.data.length).toEqual(6)
    expect(state.app.pie.data).toContainEqual(
      {name: 'Group F', value: 289, color: '#b456bb'})
    expect(state.app.pie.data).toContainEqual(
      {name: 'Group C', value: 300, color: '#92fa56'})
    expect(state.app.pie.data).not.toContainEqual(
      {name: 'Currywurst', value: 300, color: '#92fa56'})

  })


  it('change pie chart name ', () => {
    let state = reducer(initialState_Pie, changeNamePie("blah"))
    expect(state.app.pie.name).toBe('blah')
  })

  it('create pie slice ', () => {
    let state = reducer(initialState_Pie, createSlice({name: 'Group Z', value: 12, color: '#123123'}))
    expect(state.app.pie.data.length).toEqual(7)
  })

  it('delete slice ', () => {
    console.log('initialState_Pie ', initialState_Pie)
    console.log('initialState_Pie2 ', initialState_Pie.app.pie.data)
    expect(initialState_Pie.app.pie.data.length).toEqual(6);
    let state = reducer(initialState_Pie, deleteSlice("Group A"))

    console.log('state3 ', state.app.pie.data)

    expect(state.app.pie.data.length).toEqual(5);
  })






})


const initialState_Pie =
  {
    app: {
      pie: {
        name: "Pie Chart",
        data: [
          {name: 'Group A', value: 12, color: '#123123'},
          {name: 'Group B', value: 300, color: '#634334'},
          {name: 'Group C', value: 300, color: '#92fa56'},
          {name: 'Group D', value: 200, color: '#aa4234'},
          {name: 'Group E', value: 278, color: '#ccccc5'},
          {name: 'Group F', value: 289, color: '#b456bb'}
        ]

      }
    }

  }


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
