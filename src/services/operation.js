import request from './request'
const url = '/operations'
class OperationService {

  constructor() {
    this.axios = request.getAxiosInstance()
  }

  saveOperation(value) {
    return this.axios.post(url, value)
  }

  operations() {
    return this.axios.get(url)
  }

  operationId(id) {
    return this.axios.get(`${url}/${id}`)
  }

  updateOperation(id, value) {
    return this.axios.put(`${url}/${id}`, value)
  }
}

export default OperationService