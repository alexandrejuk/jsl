import request from './request'
const url = '/users'
class UserService {

  constructor() {
    this.axios = request.getAxiosInstance()
  }

  saveUser(value) {
    return this.axios.post(url, value)
  }

  users() {
    return this.axios.get(url)
  }

  userId(id) {
    return this.axios.get(`${url}/${id}`)
  }

  updateUser(id, value) {
    return this.axios.put(`${url}/${id}`, value)
  }
}

export default UserService