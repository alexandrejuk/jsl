import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/11b8e205-83cc-4030-b15b-65e2f446f73b/users'

class UserService {
  saveUser(value) {
    return axios.post(url, value)
  }

  users() {
    return axios.get(url)
  }

  userId(id) {
    return axios.get(`${url}/${id}`)
  }

  updateUser(id, value) {
    return axios.put(`${url}/${id}`, value)
  }
}

export default UserService