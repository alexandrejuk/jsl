import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/User/Manager'
import Notiflix from 'notiflix-react'
import UserService from '../../../../services/user'

class Manager extends Component {
  userService = null
  state = {
    isLoading: false,
    userList: [],
  }
  
  componentDidMount() {
    this.userService = new UserService()
    this.handlerUser()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  async handlerUser() {
    try {
      const { data: userList } = await this.userService.users()
      this.setState({ userList })
    } catch (error) {
      Notiflix.Notify.Failure('Não foi carregar os usuários!')
    }
  }

  render() {
    const {
      isLoading,
      userList,
    } = this.state

    return (
      <ManagerContainer 
        userList={userList}
        isLoading={isLoading}
      />
    )
  }
}

export default Manager
