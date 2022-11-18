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
 

// Get user goals
const createArticle = async (formData, token) => {
  console.log(`msg_ formData`,formData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, formData, config)

  return response.data
}
 
 

const goalService = { 
    getBlogs, 
    createArticle, 
}

export default goalService
