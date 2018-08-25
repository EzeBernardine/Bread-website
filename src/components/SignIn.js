import React from 'react';
import Button from './Button'

export default class SignIn extends React.Component{
  state={
    signinError: undefined
  }
  getInputValues=()=>{
    let username = document.forms[0].signinUserName.value.trim()
    let password = document.forms[0].signinPassword.value.trim()
    localStorage.setItem("signInUserName", JSON.stringify(username))
     return ({ username, password})
  };
  getLocalStorageU=()=>JSON.parse(localStorage.getItem('username'))
  getLocalStorageP=()=>JSON.parse(localStorage.getItem('password')) 
  getInputAndStoredU=()=>{
    const {username} = this.getInputValues()
    const storedUserName = this.getLocalStorageU();
    return ({username, storedUserName})
  }
  getInputAndStoredP = () => {
     const { password} = this.getInputValues()
    const storedPassword = this.getLocalStorageP();
    return ({password, storedPassword})
  };
  handleSignIn=(e)=>{
    e.preventDefault()
    const {password, storedPassword} = this.getInputAndStoredP()
    const {username, storedUserName} = this.getInputAndStoredU()
    let match = (password === storedPassword[storedUserName.indexOf(username)] && storedUserName.indexOf(username) != -1 && storedUserName.indexOf(username) != null)
    if(match){
      this.setState(()=>({signinError: 'Success'}))
      location.href='/order'
    }else{
      this.setState(()=>({signinError: 'Failed'}))
    }
  }
  render(){
    return(
      <div className='signIn'>
       <form  onSubmit={this.handleSignIn}>
        <div className='signIn_container'>
          <div className = 'signIn_name' >
            <h3 className='signin_error'>{this.state.signinError}</h3>
            <input placeholder='Username' required={true} name="signinName" id='signinUserName'></input>
          </div>
          <div className = 'signIn_passward' >
            <input placeholder='Passward'  type='password' name="signinPassword" required={true} id='signinPassword'></input>
          </div>
        <Button />
        </div>
      </form>
    </div>
    )
  }
}
