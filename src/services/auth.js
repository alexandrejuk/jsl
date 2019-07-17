import axios from 'axios'
const url = 'https://backend-jsl-cross.herokuapp.com:443/login'

class AuthService {
  authentication(value) {
    return axios.post(url, value)
  }
}

export default AuthService