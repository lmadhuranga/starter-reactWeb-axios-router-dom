import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import blogService from './blogService'

const initialState = {
  blogs: [],
  blog: {title:'', content:'', author:''},
  isError: false,
  isSuccess: false,
  isLoading: false,
  needToRefresh: false,
  message: '',
}
 

// Get blog blogs
export const getBlogs = createAsyncThunk(
  'blogs/getAll',
  async (_, thunkAPI) => {
    try {
        // console.log(`msg_ blogs/getAll` );
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
// Get blog blogs
export const loadArticle = createAsyncThunk(
  'blogs/getArticle',
  async (id, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await blogService.loadArticle(id)
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
        // console.log(`msg_ blogData`,blogData);
      try {
        // const token = thunkAPI.getState().auth.user.toke
        const token = 's'
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
// Create update goal
export const updateArticle = createAsyncThunk(
    'blogs/update',
    async (blogData, thunkAPI) => {
        // console.log(`msg_updateArticle blogData `,blogData);
      try {
        // const token = thunkAPI.getState().auth.user.toke
        const token = 's'
        return await blogService.updateArticle(blogData, token)
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
export const deleteArticle = createAsyncThunk(
    'blogs/delete',
    async (id, thunkAPI) => {
        // console.log(`msg_ Dlete article id `,id);
      try {
        // const token = thunkAPI.getState().auth.user.toke
        const token = 's' 
        return await blogService.deleteArticle(id, token)
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
            state.needToRefresh = true 
            state.isSuccess = true 
        })
        .addCase(createArticle.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(updateArticle.pending, (state) => {
            state.isLoading = true
            
        })
        .addCase(updateArticle.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true 
        })
        .addCase(updateArticle.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getBlogs.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getBlogs.fulfilled, (state, action) => { 
          state.isLoading = false
          state.needToRefresh = false
          state.isSuccess = true 
          state.isSuccess = true 
          state.blogs = action.payload
        })
        .addCase(getBlogs.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(loadArticle.pending, (state) => {
          state.isLoading = true
        })
        .addCase(loadArticle.fulfilled, (state, action) => { 
          state.isLoading = false
          state.isSuccess = true  
          state.blog = action.payload
        })
        .addCase(loadArticle.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(deleteArticle.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteArticle.fulfilled, (state, action) => { 
            state.needToRefresh = true 
            // console.log(`msg_  state.needToRefresh`, state.needToRefresh); 
            state.isLoading = false
            state.isSuccess = true  
        })
        .addCase(deleteArticle.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
    },
})

export const { reset } = blogSlice.actions
export default blogSlice.reducer
