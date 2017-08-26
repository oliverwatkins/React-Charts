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
        name: "Some line graph (fixed X)",

        series: [

          {
          name : "Series1x",
          data : [
            {x: 31, y: 17},
            {x: 22, y: 43},
            {x: 33, y: 73},
            {x: 41, y: 23}
            //
            // {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            // {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            // {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            // {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            // {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            // {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
          ]
        },
          {
            name : "Series2x",
            data : [
              {x: 12, y: 17},
              {x: 42, y: 13},
              {x: 72, y: 43},
              {x: 92, y: 23}
              //
              // {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
              // {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
              // {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
              // {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
              // {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
              // {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
            ]
          },
          {
            name : "Series3x",
            data : [
              {x: 16, y: 17},
              {x: 43, y: 11},
              {x: 72, y: 41},
              {x: 92, y: 27}
              //
              // {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
              // {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
              // {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
              // {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
              // {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
              // {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
            ]
          }
        ]


      }

    }
  }
export default AppState;
