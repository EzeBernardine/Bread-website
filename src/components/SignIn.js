import React from 'react';
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';
import AllHeader from './AllHeader';
import Button from './Button'

export default class SignIn extends React.Component{
  handleSignin=(e)=>{
    e.preventDefault()
    alert('signin');
  }
  render(){
    return(
      <div className='signIn'>
       <form >
        <div className='signIn_container'>
          <div className = 'signIn_name' >
            <h3>Name</h3>
            <input></input>
          </div>
          <div className = 'signIn_passward' >
            <h3>Passward</h3>
            <input></input>
          </div>
        <Button signin={this.handleSignin}/>
        </div>
      </form>
    </div>
    )
  }
}
