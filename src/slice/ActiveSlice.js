import { createSlice } from '@reduxjs/toolkit'

const initialState = {

value: localStorage.getItem("activeinfo") ? JSON.parse(localStorage.getItem("activeinfo")) : ""
};
export const ActiveSlice = createSlice({
  name: 'active',
  initialState ,
  reducers: {
    activeinfo: (state, action ) => {
      // state.value += 1
    //   console.log(state.value);
    //   console.log(action.payload);
      state.value = action.payload

    },
    // decrement: (state) => {
    //   state.value -= 1
    // }
  },
})

export const { activeinfo } = ActiveSlice.actions

export default ActiveSlice.reducer