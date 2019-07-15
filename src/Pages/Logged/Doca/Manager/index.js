import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/Doca/Manager'
import Notiflix from 'notiflix-react'
import DocaService from '../../../../services/doca'

class Manager extends Component {
  docaService = null
  state = {
    isLoading: false,
    docaList: [],
  }
  
  componentDidMount() {
    this.docaService = new DocaService()
    this.handleDocas()
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  async handleDocas() {
    try {
      const { data: docaList } = await this.docaService.docas()
      this.setState({ docaList })
    } catch (error) {
      Notiflix.Notify.Failure('Não foi carregar as docas!')
    }
  }
  render() {
    const {
      isLoading,
      docaList,
    } = this.state

    return (
      <ManagerContainer 
        docaList={docaList}
        isLoading={isLoading}
      />
    )
  }
}

export default Manager
