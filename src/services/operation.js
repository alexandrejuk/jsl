import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/7af13a6d-f718-4746-9f93-cbdb5c58f472/operations'

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