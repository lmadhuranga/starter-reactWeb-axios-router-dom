import axios from 'axios'

const API_URL = 'http://localhost:3000/goals'
 

// Get user goals
const getGoals = async (token='') => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}
 

const goalService = { 
  getGoals, 
}

export default goalService
