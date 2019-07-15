import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/11b8e205-83cc-4030-b15b-65e2f446f73b/operations'

class OperationService {
  saveOperation(value) {
    return axios.post(url, value)
  }

  operations() {
    return axios.get(url)
  }

  operationId(id) {
    return axios.get(`${url}/${id}`)
  }

  updateOperation(id, value) {
    return axios.put(`${url}/${id}`, value)
  }
}

export default OperationService