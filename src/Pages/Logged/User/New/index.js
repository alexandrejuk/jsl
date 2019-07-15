import React, { Component } from 'react'
import NewContainer from '../../../../Containers/User/New'
import Notiflix from 'notiflix-react'
import UserService from '../../../../services/user'
class New extends Component {
  userService = null
  state = {
    isLoading: false,
    indexForm: 0,
  }

  componentDidMount() {
    this.userService = new UserService()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  messageSuccess() {
    Notiflix.Notify.Success('Usuário cadastrado com sucesso!')
  }

  handleSubmit = async (values) => {
    try {
      await this.userService.saveUser(values)
      this.setState({ indexForm: this.state.indexForm + 1 }, this.messageSuccess)
    } catch (error) {
      Notiflix.Notify.Failure('Não foi cadastrar o usuário!')
    }
  }
  render() {
    const { 
      isLoading,
      indexForm,
    } = this.state
    return (
      <NewContainer 
        key={indexForm}
        isLoading={isLoading}
        handleSubmit={this.handleSubmit}
      />
    ) 
  }
}
 
export default New