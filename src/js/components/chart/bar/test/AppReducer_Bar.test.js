import {reducer} from "./../duck"
import {
  deleteSeries,
  changeLineChartName,
  changeCell,
  createCategory,
  createSeries,
  deleteCategory,
  updateColorBar
} from "./../duck"
/*
Test the reducer functions
 */
describe('Test Bar Reducer functions', () => {

  it('loads initial data correctly ', () => {

    let state = reducer(initialState_Bar)

    expect(state.categories.length).toEqual(4)
    expect(state.categories).toContainEqual("dog")
    expect(state.series.length).toEqual(3)
    expect(state.series).toContainEqual({name: "Mexico", color: "red", data: [{y: 1}, {y: 2}, {y: 3}, {y: 4}]})

    expect(state.series).not.toContainEqual({
      name: "Currywurst",
      color: "red",
      data: [{y: 1}, {y: 2}, {y: 3}, {y: 4}]
    })

  })

  it('change bar chart name ', () => {

    let state = reducer(initialState_Bar, changeLineChartName('sausage'))
    expect(state.name).toEqual('sausage')
    expect(state.name).not.toEqual('hotdog')
  })

  it(' creates a series ', () => {
    let state = reducer(initialState_Bar, createSeries({name: "asdf", color: "brown"}));

    console.log('state.series ' , state.series)

    expect(state.series.length).toEqual(4)
    expect(state.series).toContainEqual({
      name: 'asdf', color: 'brown', data:
        [{"y": 0}, {"y": 0}, {"y": 0}, {"y": 0}]
    })
  })


  it(' creates a category', () => {

    let category = {
      name: "lizard",
    }
    let state = reducer(initialState_Bar, createCategory(category));
    expect(state.categories.length).toEqual(5)

    expect(state.series).toContainEqual({
      name: "Mexico",
      color: "red",
      data: [{y: 1}, {y: 2}, {y: 3}, {y: 4}, {y:0}]
    })

  })

  it(' deletes a category ', () => {
    let state = reducer(initialState_Bar, deleteCategory("cow"));

    expect(state.categories.length).toEqual(3)
    expect(state.categories).not.toContainEqual("cow")
    expect(state.series).toContainEqual({
      name: "Holland",
      color: "blue",
      data: [{y: 1}, {y: 2}, {y: 4}]
    })

    expect(state.series).toContainEqual({
      name: "Germany",
      color: "orange",
      data: [{y: 1}, {y: 2}, {y: 4}]
    })
  })

  it(' deletes a series ', () => {
    let state = reducer(initialState_Bar, deleteSeries("Germany"));

    expect(state.series.length).toEqual(2)
    expect(state.series).toContainEqual({
      name: "Mexico",
      color: "red",
      data: [{y: 1}, {y: 2}, {y: 3}, {y: 4}]
    })
    expect(state.series).toContainEqual({
      name: "Holland",
      color: "blue",
      data: [{y: 1}, {y: 2}, {y: 3}, {y: 4}]
    })

    expect(state.series).not.toContainEqual({
      name: "Germany",
      color: "orange",
      data: [{y: 1}, {y: 2}, {y: 3}, {y: 4}]
    })
  })

  it(' updates a color ', () => {

    let state = reducer(initialState_Bar, updateColorBar("pink2", "Germany"));

    expect(state.series).toContainEqual({
      name: "Germany",
      color: "pink2",
      data: [{y: 1}, {y: 2}, {y: 3}, {y: 4}]
    })
  })


  //TODO
  it(' changes the cell', () => {
    let state = reducer(initialState_Bar, changeCell(
      {
        "cellKey":"Holland",
        "fromRow":1,"toRow":1,
        "rowIds":[null],
        "updated":{"Holland":"999"}, //table component sets as string
        "action":"CELL_UPDATE",
        "fromRowData":{ //sent from table component. not really important here
          "category":"cat",
          "Germany":2,
          "Holland":2,
          "Mexico":2}}
      )
    )

    expect(state.series).toContainEqual({
      name: "Holland",
      color: "blue",
      data: [{"y":1},{"y":"999"},{"y":3},{"y":4}]
    })
  })
})


export const initialState_Bar =
  {
    name: "Bar Chart",
    categories: [
      "dog",
      "cat",
      "cow",
      "horse"
    ],
    series: [
      {
        name: "Mexico",
        color: "red",
        data: [
          {y: 1},
          {y: 2},
          {y: 3},
          {y: 4}
        ]
      },
      {
        name: "Germany",
        color: "orange",
        data: [
          {y: 1},
          {y: 2},
          {y: 3},
          {y: 4}
        ]
      },
      {
        name: "Holland",
        color: "blue",
        data: [
          {y: 1},
          {y: 2},
          {y: 3},
          {y: 4}
        ]
      }
    ]
  };
