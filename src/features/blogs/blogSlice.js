import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogService from './blogService'

const initialState = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
 

// Get user blogs
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

// Create new goal
export const createArticle = createAsyncThunk(
    'blogs/create',
    async (blogData, thunkAPI) => {
        console.log(`msg_ blogData`,blogData);
      try {
        const token = thunkAPI.getState().auth.user.toke
        console.log(`msg_ token`,token);
        return await blogService.createArticle(blogData, token)
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
    name: 'blogs',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createArticle.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createArticle.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.blogs.push(action.payload)
        })
        .addCase(createArticle.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getBlogs.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getBlogs.fulfilled, (state, action) => { 
          state.isLoading = false
          state.isSuccess = true 
          state.blogs = action.payload
        })
        .addCase(getBlogs.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
    },
})

export const { reset } = blogSlice.actions
export default blogSlice.reducer
