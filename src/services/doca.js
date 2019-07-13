import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/ad67fc1e-7bbe-43a5-8049-11f1dc2aacbc/docas'

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