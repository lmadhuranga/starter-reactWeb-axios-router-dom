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
const loadArticle = async (id, token) => {
  console.log(`msg_ loadArticle`, );
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`${API_URL}/${id}`, config)

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
 

// Get user goals
const updateArticle = async (formData, token) => {
  console.log(`msg_ service formData`,formData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(`${API_URL}/${formData.id}`, formData, config)

  return response.data
}
 
// Get user goals
const deleteArticle = async (id, token) => {
  console.log(`msg_ service id`,id);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(`${API_URL}/${id}`, config) 
  return response.data
}
 
 

const goalService = { 
    getBlogs, 
    createArticle, 
    updateArticle, 
    deleteArticle, 
    loadArticle, 
}

export default goalService
