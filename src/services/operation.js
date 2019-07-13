import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/ad67fc1e-7bbe-43a5-8049-11f1dc2aacbc/operations'

class OperationService {
  saveoperation(value) {
    return axios.post(url, value)
  }

  operations() {
    return axios.get(url)
  }

  operationId(id) {
    return axios.get(`${url}/${id}`)
  }

  updateoperation(id, value) {
    return axios.put(`${url}/${id}`, value)
  }
}

export default OperationService