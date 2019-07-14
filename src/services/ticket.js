import axios from 'axios'
const url = 'http://localhost:3000/api/v1/companies/7af13a6d-f718-4746-9f93-cbdb5c58f472/tickets'

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