import axios from 'axios'
const url = 'http://localhost:3000/tickets'
class TicketService {
  saveTicket(value) {
    return axios.post(url, value)
  }

  tickets() {
    return axios.get(url)
  }

  ticketId(id) {
    return axios.get(`${url}/${id}`)
  }

  updateTicket(id, value) {
    return axios.put(`${url}/${id}`, value)
  }
}

export default TicketService