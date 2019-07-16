import axios from 'axios'
const url = 'http://localhost:3000/login'

class AuthService {
  authentication(value) {
    return axios.post(url, value)
  }
}

export default AuthService