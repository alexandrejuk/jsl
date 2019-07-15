import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/Doca/Manager'
import Notiflix from 'notiflix-react'

class Manager extends Component {
  state = {
    isLoading: false,
    docaList: [],
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
