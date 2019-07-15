import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/11b8e205-83cc-4030-b15b-65e2f446f73b/tickets'

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