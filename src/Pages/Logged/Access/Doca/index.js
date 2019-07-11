import React, { Component } from 'react'
import DocaContainer from '../../../../Containers/Access/Doca'
import DocaService from '../../../../services/doca'

class Doca extends Component {
  docaService = null
  state = { }

  componentDidMount() {
    this.docaService = new DocaService()
  }

 

  render() {
    return (
      <DocaContainer />
    ) 
  }
}
 
export default Doca