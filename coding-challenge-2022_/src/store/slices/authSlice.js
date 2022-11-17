import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    user:"admin",
    pswd:"admin"
  },
  reducers: {
    login: (state) => {
     
      state.isLogged = true
    },
    loguot: (state) => {
     
      state.isLogged = false;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { login, loguot } = authSlice.actions

export default authSlice.reducer