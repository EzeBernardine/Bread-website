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
  getLocalStorage = () => {
    let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase'));
    {(signUpDatabase[0] === null) && signUpDatabase.shift()};
    return signUpDatabase
  };
  getInputAndStoredU=()=>{
    const {username} = this.getInputValues()
    const signUpDatabase = this.getLocalStorage();
    let usernameIndex = signUpDatabase.findIndex(i => i.username === username);
    return ({username, usernameIndex})
  }
  getInputAndStoredP = () => {
     const { password} = this.getInputValues()
    const signUpDatabase = this.getLocalStorage();
    let PASSWORD = signUpDatabase;
    return ({password, PASSWORD})
  };
  handleSignIn=(e)=>{
    e.preventDefault()
    const {password, PASSWORD} = this.getInputAndStoredP()
    const {username, usernameIndex} = this.getInputAndStoredU()
    let match = (PASSWORD[usernameIndex] && password === PASSWORD[usernameIndex].password && usernameIndex != -1 && usernameIndex != null)
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
            <input placeholder='Username' required={true} name="signinName" id='signinUserName' autoFocus={true}></input>
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
