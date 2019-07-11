import axios from 'axios'
const url = 'http://localhost:3000/docas'

class DocaService {
  saveDoca(value) {
    return axios.post(url, value)
  }

  Docas() {
    return axios.get(url)
  }

  DocaId(id) {
    return axios.get(`${url}/${id}`)
  }

  updateDoca(id, value) {
    return axios.put(`${url}/${id}`, value)
  }
}

export default DocaService