import request from './request'
const url = '/tickets'
class TicketService {

  constructor() {
    this.axios = request.getAxiosInstance()
  }
  
  saveTicket(value) {
    return this.axios.post(url, value)
  }

  tickets() {
    return this.axios.get(url)
  }

  ticketId(id) {
    return this.axios.get(`${url}/${id}`)
  }

  updateTicket(value) {
    return this.axios.put(url, value)
  }
}

export default TicketService