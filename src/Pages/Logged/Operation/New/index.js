import React, { Component } from 'react'
import NewContainer from '../../../../Containers/Operation/New'
import Notiflix from 'notiflix-react'

class New extends Component {
  state = {
    isLoading: false,
  }

  componentDidMount() {
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
    })
  }

  handleSubmit = (values) => {
    console.log(values)
  }
  render() {
    const { 
      isLoading,
    } = this.state
    return (
      <NewContainer 
        isLoading={isLoading}
        handleSubmit={this.handleSubmit}
      />
    ) 
  }
}
 
export default New