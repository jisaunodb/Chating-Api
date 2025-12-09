import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slice/userSlice'
import  ActiveSlice  from './slice/ActiveSlice'

export default configureStore({
  reducer: {
    userinfo : userSlice,
    activeinfo: ActiveSlice
  },
})