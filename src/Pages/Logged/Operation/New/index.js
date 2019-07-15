import React, { Component } from 'react'
import NewContainer from '../../../../Containers/Operation/New'
import Notiflix from 'notiflix-react'
import OperationService from '../../../../services/operation'

class New extends Component {
  operationService = null
  state = {
    isLoading: false,
    indexForm: 0,
  }

  componentDidMount() {
    this.operationService = new OperationService()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  messageSuccess() {
    Notiflix.Notify.Success('Operação cadastrada com sucesso!')
  }

  handleSubmit = async (values) => {
    try {
      await this.operationService.saveOperation(values)
      this.setState({ indexForm: this.state.indexForm + 1 }, this.messageSuccess)
    } catch (error) {
      Notiflix.Notify.Failure('Não foi cadastrar operação!')
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