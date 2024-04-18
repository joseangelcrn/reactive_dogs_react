import { configureStore } from '@reduxjs/toolkit'
import dogSlice from './dogSlice'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    user:userSlice,
    dog:dogSlice
  }
})
