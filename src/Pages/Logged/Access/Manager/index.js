import React, { Component } from 'react'
import ManagerContainer from '../../../../Containers/Access/manager'

class Manager extends Component {
  state = {
    isLoading: false,
    ticketList: [],
  }

  render() {
    const {
      isLoading,
      ticketList,
    } = this.state

    return (
      <ManagerContainer />
    )
  }
}

export default Manager
