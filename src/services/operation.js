import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/0ff9bb3a-7109-44f2-bb6b-1ac12941a5b8/operations'

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