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
      xy: {
        name: "XY Chart",
        series: [
          {
            name: "Mexico",
            color: "#82ca9d",
            data: [
              {x: 12, y: 0},
              {x: 152, y: 0},
              {x: 112, y: 0},
              {x: 122, y: 0},
            ]
          },
          {
            name: "Germany",
            color: "#2239ca",
            data: [
              {x: 122, y: 0},
              {x: 33, y: 0},
              {x: 44, y: 0},
              {x: 122, y: 0},
            ]
          }
      ]},
      bar: {
        name: "Bar Chart",
        isFetching: true,
        categories: [
          "Apple",
          "Orange",
          "Banana",
          "Peach"
        ],
        series: [
          {
            name: "Mexico",
            color: "#82ca9d",
            data: [
              {y: 0},
              {y: 0},
              {y: 0},
              {y: 0}
            ]
          },
          {
            name: "Germany",
            color: "#2239ca",
            data: [
              {y: 0},
              {y: 0},
              {y: 0},
              {y: 0}
            ]
          },
          {
            name: "Holland",
            color: "#c2a5ca",
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
export default AppState;
