import React from 'react';
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';
import AllHeader from './AllHeader';
import Button from './Button'


export default class SignIn extends React.Component{
  state={
    signinError: undefined
  }
  handleSigninform=(e)=>{
    e.preventDefault()
    let name = document.forms[0].signinName.value.trim()
    let password = document.forms[0].signinPassword.value.trim()

    let nameList = localStorage.getItem('nameList');
    let confirmpasswordList = localStorage.getItem('confirmpasswordList');
    if(nameList.includes(name)){
      if(confirmpasswordList.includes(password)){
        this.setState(()=>({signinError: 'Success'}))
      }else{this.setState(()=>({signinError: 'failed'}))}
      }else{this.setState(()=>({signinError: 'failed'}))}
      
    }
  render(){
    return(
      <div className='signIn'>
       <form onChange={this.handleChange} onSubmit={this.handleSigninform}>
        <div className='signIn_container'>
          <div className = 'signIn_name' >
            <h3 className='signin_error'>{this.state.signinError}</h3>
            <h3>Name</h3>
            <input required={true} name="signinName" id='signinName'></input>
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
