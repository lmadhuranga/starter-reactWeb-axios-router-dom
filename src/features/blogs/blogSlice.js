import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogService from './blogService'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
 

// Get user goals
export const getBlogs = createAsyncThunk(
  'blogs/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await blogService.getBlogs()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
) 
 
export const blogSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
       
    },
})

export const { reset } = blogSlice.actions
export default blogSlice.reducer
