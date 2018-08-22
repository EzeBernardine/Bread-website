import React from 'react';
import Button from './Button';
import uuid from 'uuid';

let UCPDatabase = [];
let uDatabase = [];
let pDatabase = []
export default class SignUp extends React.Component{
  state={
    usernameError: undefined,
    confirmpasswordError: undefined,
    emailError: undefined
  };
  getValues=()=>{
    let name = document.forms[0].name.value.trim()
    let password = document.forms[0].password.value.trim()
    let confirmpassword = document.forms[0].confirmpassword.value.trim()
    let username = document.forms[0].username.value.trim()
    let email = document.forms[0].email.value.trim();
    return ({ name, password, confirmpassword, username, email })
  };
  validateUsername=()=>{
    const {username} = this.getValues();
    if (UCPDatabase.includes(username)){
      this.setState(() => ({ usernameError: 'usename  already exist' }))
      return false
    }else{
      UCPDatabase.push(username)
      this.setState(() => (({ usernameError: undefined }))) 
      return true
    }
  };
  validatePassword=()=>{
    const {confirmpassword, password} = this.getValues();
    if (!(confirmpassword === password)){
      this.setState(()=>({confirmpasswordError: 'password does not match'}))
      return false
    }else{
      this.setState(()=>({confirmpasswordError: undefined}))
      return true
    }
  };
  saveUnameStorage = (username) => {
    let prevUsername = JSON.parse(localStorage.getItem('username'))
    let allUsername = uDatabase.concat(prevUsername)
    allUsername.push(username)
    return localStorage.setItem('username', JSON.stringify(allUsername));
  }
  savePasswordStorage = (password) => {
    let prevPassword = JSON.parse(localStorage.getItem('password'))
    let allPassword = pDatabase.concat(prevPassword)
    allPassword.push(password)
    return localStorage.setItem('password', JSON.stringify(allPassword));
  }
  saveDetails=(e)=>{
    e.preventDefault()
    let { name, password, confirmpassword, username, email } =  this.getValues()
    if(this.validatePassword() && this.validateUsername()){
      this.saveUnameStorage(username)
      this.savePasswordStorage(password)
      location.href='/signin'
    }
  }
  render(){
    return(
      <div className='signUp'>
       <form className='signUp_container' onSubmit={this.saveDetails}>
         <div className='signUp_getStarted'>
           <h1>Sign up and get started</h1>
         </div>
         <div className='signUp_name'>
           <h3>NAME</h3>
            <input required={true} id='name'></input>
         </div>
         <div className='signUp_username'>
           <h3>USER NAME 
             <span className='signUp_error_empty'>{this.state.usernameError}</span>
           </h3>
            <input required={true} id='username'></input>
         </div>
         <div className='signUp_email'>
           <h3>EMAIL
              <span className='signUp_error_empty'>{this.state.emailError}</span>
           </h3>
           <input required={true} id='email'></input>
         </div>
         <div className='signUp_passward'>
           <h3>PASSWORD
           </h3>
            <input required={true} id='password'></input>
         </div>
         <div className='signUp_confirmpassward'>
            <h3>CONFIRM PASSWORD
              <span className='signUp_error_empty'>{this.state.confirmpasswordError}</span>
            </h3>
            <input required={true} id='confirmpassword'></input>
         < Button / >
         </div>
       </form>
       
     </div>
    )
  }
}
