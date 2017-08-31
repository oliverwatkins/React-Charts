const AppState =
  {
    app: {
      pie: {
        name: "benfolds",
        data: [
          {name: 'Group A', value: 12, color: '#123123'},
          {name: 'Group B', value: 300, color: '#634334'},
          {name: 'Group C', value: 300, color: '#92fa56'},
          {name: 'Group D', value: 200, color: '#aa4234'},
          {name: 'Group E', value: 278, color: '#ccccc5'},
          {name: 'Group F', value: 289, color: '#b456bb'}
        ]
      },
      line: {
        name: "Bar Chart",

        categories: [
          1,
          2,
          3,
          4
        ],


        series: [
          {
            name: "Series1x",
            color: "#82ca9d",
            data: [
              {x: 1, y: 17},
              {x: 2, y: 43},
              {x: 3, y: 73},
              {x: 4, y: 23}
            ]
          },
          {
            name: "Series2x",
            color: "#2239ca",
            data: [
              {x: 1, y: 17},
              {x: 2, y: 13},
              {x: 3, y: 43},
              {x: 4, y: 23}
            ]
          },
          {
            name: "Series3x",
            color: "#c2a5ca",
            data: [
              {x: 1, y: 17},
              {x: 2, y: 11},
              {x: 3, y: 41},
              {x: 4, y: 27}
            ]
          }
        ]
      }
    }
  }
export default AppState;
