import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    userinfo: (state, action ) => {
      // state.value += 1
      console.log(state);
      console.log(action);

    },
    // decrement: (state) => {
    //   state.value -= 1
    // }
  },
})

export const { userinfo } = userSlice.actions

export default userSlice.reducer