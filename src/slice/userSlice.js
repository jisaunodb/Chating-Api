import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")): null
  },
  reducers: {
    userinfo: (state, action ) => {
      // state.value += 1
      console.log(state.value);
      console.log(action.payload);
      state.value = action.payload

    },
    // decrement: (state) => {
    //   state.value -= 1
    // }
  },
})

export const { userinfo } = userSlice.actions

export default userSlice.reducer