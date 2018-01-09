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

  xit('loads initial data correctly ', () => {

    let state = reducer(initialState_XY)

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

  xit('change bar chart name ', () => {

    let state = reducer(initialState_XY, changeLineChartName('sausage'))
    expect(state.name).toEqual('sausage')
    expect(state.name).not.toEqual('hotdog')
  })

  xit(' creates a series ', () => {
    let state = reducer(initialState_XY, createSeries({name: "asdf", color: "brown"}));
    expect(state.series.length).toEqual(4)
    expect(state.series).toContainEqual({
      name: 'asdf', color: 'brown', data:
        [{"y": 0}, {"y": 0}, {"y": 0}, {"y": 0}]
    })

  })


  xit(' creates a category', () => {

    let category = {
      name: "lizard",
    }
    let state = reducer(initialState_XY, createCategory(category));
    expect(state.categories.length).toEqual(4)

    expect(state.series).toContainEqual({
      name: "Mexico",
      color: "red",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}, {y:0}]
    })

  })

  xit(' deletes a category ', () => {
    let state = reducer(initialState_XY, deleteCategory("dog"));

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

  xit(' deletes a series ', () => {

    let category = {
      name: "dog",
    }
    let state = reducer(initialState_XY, deleteSeries("Germany"));

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

  xit(' updates a color ', () => {

    let state = reducer(initialState_XY, updateColorBar("pink2", "Germany"));

    expect(state.series).toContainEqual({
      name: "Germany",
      color: "pink2",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}]
    })
  })


  //TODO
  xit(' changes the cell', () => {
    let fromRow = 1, toRow = 1, updated = 42;

    let state = reducer(initialState_XY, changeCell(fromRow, toRow, updated))

    console.log('state', state)
  })
})


const initialState_XY =
  {
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
  };
