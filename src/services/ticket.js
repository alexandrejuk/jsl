import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/0ff9bb3a-7109-44f2-bb6b-1ac12941a5b8/tickets'

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