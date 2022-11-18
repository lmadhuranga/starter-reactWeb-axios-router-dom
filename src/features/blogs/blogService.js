import axios from 'axios'

const API_URL = 'http://localhost:3001/blogs';
 

// Get user goals
const getBlogs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}
 
 

const goalService = { 
    getBlogs, 
}

export default goalService
