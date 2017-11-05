
import reducer from "./../AppReducer2"

/*
Test the reducer functions
 */
test('Test Reducer functions', () => {

  console.log('reducer ', reducer(initialState,2))

})



const initialState =
  {
    app: {
      pie: {

      },
      xy: {

      },
      bar: {
        name: "Bar Chart",
        categories: [
          "Apple",
          "Orange",
          "Banana",
          "Peach"
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
