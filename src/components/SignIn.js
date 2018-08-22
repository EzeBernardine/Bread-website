import React from 'react';
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';
import AllHeader from './AllHeader';
import Button from './Button'


export default class SignIn extends React.Component{
  state={
    signinError: undefined
  }
  getInputValues=()=>{
    let username = document.forms[0].signinUserName.value.trim()
    let password = document.forms[0].signinPassword.value.trim()
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
    let match =  (storedUserName.indexOf(username) === storedPassword.indexOf(password) && storedUserName.indexOf(username) != -1)
    {match?  (this.setState(()=>({signinError: 'Success'}))) : (this.setState(()=>({signinError: 'Failed'})))}
  }
  render(){
    return(
      <div className='signIn'>
       <form onChange={this.handleChange} onSubmit={this.handleSignIn}>
        <div className='signIn_container'>
          <div className = 'signIn_name' >
            <h3 className='signin_error'>{this.state.signinError}</h3>
            <h3>Username</h3>
            <input required={true} name="signinName" id='signinUserName'></input>
          </div>
          <div className = 'signIn_passward' >
            <h3>Passward</h3>
            <input name="signinPassword" required={true} id='signinPassword'></input>
          </div>
        <Button signin={this.handleSignin}/>
        </div>
      </form>
    </div>
    )
  }
}
