import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/ad67fc1e-7bbe-43a5-8049-11f1dc2aacbc/tickets'

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

  updateTicket(value) {
    return axios.put(url, value)
  }
}

export default TicketService