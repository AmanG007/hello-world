import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {

   return this.state.isLoggedIn && <div>Welcome Prabhu</div>

    // return (
    //     this.state.isLoggedIn?
    //     <div>Hare Krishan Aman</div> :
    //     <div>Hari Bol Guest</div>
    // )

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Hare Krishan Aman</div>
    // } else {
    //     message = <div>Hari Bol Guest</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //   return <div>Hare Krishan Aman</div>
    // } else {
    //   return <div>Hari Bol Guest</div>
    // }
    // return (
    //     <div>
    //         <div>Hare Krishan Aman</div>
    //         <div>Hari Bol Guest</div>
    //     </div>
      
    // )
  }
}

export default UserGreeting