import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/User/Manager'
import Notiflix from 'notiflix-react'

class Manager extends Component {
  state = {
    isLoading: false,
    userList: [],
  }
  
  componentDidMount() {
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
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
