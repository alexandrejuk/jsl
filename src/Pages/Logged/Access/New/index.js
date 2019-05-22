import React, { Component } from 'react'
import NewContainer from '../../../../Containers/Access/New'

class New extends Component {
  state = {
    isLoading: false,
  }

  render() {
    const { isLoading } = this.state
    return (
      <NewContainer 
        isLoading={isLoading}
      />
    ) 
  }
}
 
export default New