import React, { Component } from 'react'
import LoginContainer from '../../Containers/Login'
import AuthService from '../../services/auth'
import Notiflix from 'notiflix-react'

class Login extends Component {
  authService = null

  componentDidMount() {
    this.authService = new AuthService()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }
  
  setTokenAndCompanyId = (token, companyId) => {
    localStorage.setItem('companyId', companyId)
    localStorage.setItem('token', token)
    window.location.href = '/#/logged/access/new'
  }

  login = async (values) => {
    try {
      const { data } = await this.authService.authentication(values)
      this.setTokenAndCompanyId(data.token, data.user.companyId)
      Notiflix.Notify.Success('Login realizado com sucesso!')
    } catch (error) {
      Notiflix.Notify.Failure('Usuário ou senha inválidos!')
    }
  }

  render() {
    return (
      <LoginContainer 
        handleLogin={this.login}
      />
    )
  }
} 
 
export default Login