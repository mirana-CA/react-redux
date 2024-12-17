import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    addtodo: (state,action) => {
      state.value.push(action.payload)
    },
  
  },
})

export const {addtodo } = todoSlice.actions

export default todoSlice.reducer