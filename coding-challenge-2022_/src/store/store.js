import { configureStore } from '@reduxjs/toolkit'
import {authSlice} from './slices/authSlice';
import {dataSlice} from './slices/dataSlice';
// import rootReducer from './reducers'

const store = configureStore({
//   reducer: rootReducer,
reducer: {
    auth:authSlice.reducer,
    dataJson:dataSlice.reducer,

},
})

export default store