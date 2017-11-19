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

    expect(state.categories.length).toEqual(3)
    expect(state.categories).toContainEqual("dog")
    expect(state.series.length).toEqual(3)
    expect(state.series).toContainEqual({name: "Mexico", color: "red", data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}]})

    expect(state.series).not.toContainEqual({
      name: "Currywurst",
      color: "red",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}]
    })

  })

  it('change bar chart name ', () => {

    let state = reducer(initialState_Bar, changeLineChartName('sausage'))
    expect(state.name).toEqual('sausage')
    expect(state.name).not.toEqual('hotdog')
  })

  it(' creates a series ', () => {
    let state = reducer(initialState_Bar, createSeries({name: "asdf", color: "brown"}));
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
    expect(state.categories.length).toEqual(4)

    expect(state.series).toContainEqual({
      name: "Mexico",
      color: "red",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}, {y:0}]
    })

  })

  it(' deletes a category ', () => {
    let state = reducer(initialState_Bar, deleteCategory("dog"));

    expect(state.categories.length).toEqual(2)
    expect(state.categories).not.toContainEqual("dog")
    expect(state.series).toContainEqual({
      name: "Holland",
      color: "blue",
      data: [{y: 0}, {y: 0}, {y: 0}]
    })

    expect(state.series).toContainEqual({
      name: "Germany",
      color: "orange",
      data: [{y: 0}, {y: 0}, {y: 0}]
    })
  })

  it(' deletes a series ', () => {

    let category = {
      name: "dog",
    }
    let state = reducer(initialState_Bar, deleteSeries("Germany"));

    expect(state.series.length).toEqual(2)
    expect(state.series).toContainEqual({
      name: "Mexico",
      color: "red",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}
      ]
    })
    expect(state.series).toContainEqual({
      name: "Holland",
      color: "blue",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}]
    })

    expect(state.series).not.toContainEqual({
      name: "Germany",
      color: "orange",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}]
    })
  })

  it(' updates a color ', () => {

    let state = reducer(initialState_Bar, updateColorBar("pink2", "Germany"));

    expect(state.series).toContainEqual({
      name: "Germany",
      color: "pink2",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}]
    })
  })


  //TODO
  xit(' changes the cell', () => {
    let fromRow = 1, toRow = 1, updated = 42;

    let state = reducer(initialState_Bar, changeCell(fromRow, toRow, updated))

    console.log('state', state)
  })
})


const initialState_Bar =
  {
    // app: {
    //   bar: {
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
              {y: 0},
              {y: 0},
              {y: 0},
              {y: 0}
            ]
          }
        ]
      // }
    // }
  };
