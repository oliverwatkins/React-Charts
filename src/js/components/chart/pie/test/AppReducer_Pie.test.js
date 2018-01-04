import {reducer, changeNamePie, createSlice, deleteSlice} from "./../duck"
/*
Test the reducer functions
 */
describe('Test Reducer functions', () => {

  it('loads initial data correctly ', () => {

    let state = reducer(initialState_Pie)

    expect(state.data.length).toEqual(6)
    expect(state.data).toContainEqual({name: 'Group F', value: 289, color: '#b456bb'})
    expect(state.data).toContainEqual({name: 'Group C', value: 300, color: '#92fa56'})
    expect(state.data).not.toContainEqual({name: 'Currywurst', value: 300, color: '#92fa56'})

  })


  it('change pie chart name ', () => {
    let state = reducer(initialState_Pie, changeNamePie("blah"))
    expect(state.name).toBe('blah')
  })

  it('create pie slice ', () => {
    let state = reducer(initialState_Pie, createSlice({name: 'Group Z', value: 12, color: '#123123'}))
    expect(state.data.length).toEqual(7)
  })

  it('delete slice ', () => {
    expect(initialState_Pie.data.length).toEqual(6);
    let state = reducer(initialState_Pie, deleteSlice("Group A"))
    expect(state.data.length).toEqual(5);
  })
})


const initialState_Pie =
  {
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
