import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataJson',
  initialState: {
    nodeData: {
        "name": "FORMULA1",
        "children": [
          {
            "name": "Mercedes",
            "selected":false,
            "children": [
              {
                "name": "Hamilton",
                "gpGanados": 240,
                "selected":false
              },
              {
                "name": "Russell",
                "gpGanados": 265,
                "selected":false
              }
            ]
          },
           {
            "name": "Ferrari",
            "selected":false,
            "children": [
              {
                "name": "Leclerc",
                "gpGanados": 290,
                "selected":false,
              },
              {
                "name": "Sainz",
                "gpGanados": 234,
                "selected":false
              }
            ]
          },
           {
            "name": "Redbull",
            "selected":false,
            "children": [
              {
                "name": "Verstappen",
                "gpGanados": 429,
                "selected":false
              },
              {
                "name": "Perez",
                "gpGanados": 290,
                "selected":false
              }
            ]
          }
        ]
      }
  },
  reducers: {
    selected: (state,action) => {
      console.log("login successfully");
      state.nodeData = action.payload;
    },

   
  },
})

// Action creators are generated for each case reducer function
export const { selected} = dataSlice.actions

export default dataSlice.reducer