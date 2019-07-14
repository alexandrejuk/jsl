import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/0ff9bb3a-7109-44f2-bb6b-1ac12941a5b8/docas'

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