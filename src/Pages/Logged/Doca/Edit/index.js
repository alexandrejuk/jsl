import React, { Component } from 'react'
import NewContainer from '../../../../Containers/Doca/New'
import DocaService from '../../../../services/doca'

import Notiflix from 'notiflix-react'
class New extends Component {
  docaService = null
  state = {
    isLoading: false,
    indexForm: 0
  }

  componentDidMount() {
    this.docaService = new DocaService()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  messageSuccess() {
    Notiflix.Notify.Success('Doca cadastrada com sucesso!')
  }
  handleSubmit = async (values) => {
    try {
      await this.docaService.saveDoca(values)
      this.setState({ indexForm: this.state.indexForm + 1 }, this.messageSuccess)
    } catch (error) {
      Notiflix.Notify.Failure('Não foi cadastrar doca!')
    }
  }
  render() {
    const { 
      indexForm,
      isLoading,
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