import request from './request'
const url = '/docas'
class DocaService {
 
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  saveDoca(value) {
    return this.axios.post(url, value)
  }

  docas() {
    return this.axios.get(url)
  }

  docaId(id) {
    return this.axios.get(`${url}/${id}`)
  }

  updateDoca(id, value) {
    return this.axios.put(`${url}/${id}`, value)
  }
}

export default DocaService