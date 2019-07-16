import { path } from 'ramda'
import axios from 'axios'
import qs from 'qs'

const HOST = 'https://backend-jsl-cross.herokuapp.com'
const PORT = 443


const createInstance = () => {
  const token = localStorage.getItem('token')
  const companyId = localStorage.getItem('companyId')

  const axiosInstace = axios.create({
    baseURL: `${HOST}:${PORT}/api/v1/companies/${companyId}`,
    headers: {
      Authorization: `bearer ${token}`,
    },
    paramsSerializer: qs.stringify,
  })
  
  axiosInstace.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const statusCode = path(['response', 'status'], error)
  
      if (statusCode === 401 || statusCode === 403) {
        window.location.href = '/#/auth'
      }
  
      return Promise.reject(error.response);
    })
  
    return axiosInstace
}
 
class Resquest {
  axiosInstance = createInstance()

  getAxiosInstance = () => {
    return this.axiosInstance
  }

  forceRenewAxiosInstance = () => {
    this.axiosInstance = createInstance()
  }
}

export default new Resquest()