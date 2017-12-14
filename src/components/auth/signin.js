import React, { Component } from 'react'
import { reduxForm } from 'redux-form'



class Signin extends Component {

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    //need to do somethingto log user in
  }

  render() {

    const { handleSubmit, feilds: { email, password }} = this.props

    return(
      <form onSubmit = {handleSubmit(this.handleFormSubmit.bind(this))}>
        <feildset className = 'form-group'>
          <label>Email:</label>
          <input {...email} className = 'form-control'/>
        </feildset>
        <feildset className = 'form-group'>
          <label>Password:</label>
          <input {...password} className = 'form-control'/>
        </feildset>
        <button action = 'submit' className = 'btn btn-primary'>Sign In</button>
      </form>
    )
  }
}

export default reduxForm({
  form : 'signin',
  feilds : ['email', 'password']
})(Signin)
