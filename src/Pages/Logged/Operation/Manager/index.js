import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/Operation/Manager'
import Notiflix from 'notiflix-react'
import OperationService from '../../../../services/operation'

class Manager extends Component {
  operationService = null
  state = {
    isLoading: false,
    operationList: [],
  }
  
  componentDidMount() {
    this.operationService = new OperationService()
    this.handleOperations()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  async handleOperations() {
    try {
      const { data: operationList } = await this.operationService.operations()
      this.setState({ operationList })
    } catch (error) {
      Notiflix.Notify.Failure('Não foi carregar as operações!')
    }
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
