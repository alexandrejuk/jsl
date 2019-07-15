import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/Operation/Manager'
import Notiflix from 'notiflix-react'

class Manager extends Component {
  state = {
    isLoading: false,
    operationList: [],
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
      operationList,
    } = this.state

    return (
      <ManagerContainer 
        operationList={operationList}
        isLoading={isLoading}
      />
    )
  }
}

export default Manager
