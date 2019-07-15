import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/11b8e205-83cc-4030-b15b-65e2f446f73b/docas'

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