import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/7af13a6d-f718-4746-9f93-cbdb5c58f472/docas'

class DocaService {
  saveDoca(value) {
    return axios.post(url, value)
  }

  docas() {
    return axios.get(url)
  }

  docaId(id) {
    return axios.get(`${url}/${id}`)
  }

  updateDoca(id, value) {
    return axios.put(`${url}/${id}`, value)
  }
}

export default DocaService