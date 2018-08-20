import React from 'react';
import Button from './Button'

let CONFIRMPASSWORD = 'CONFIRM PASSWORD';
let nameList=[]
let passwordList=[]
let emailList=[]
let confirmpasswordList=[]
let userNameList=[]
export default class SignUp extends React.Component{
  state={
    usernameError: undefined,
    confirmpasswordError: undefined,
    emailError: undefined
  };
    handleSignupSubmit = (e) => {
      e.preventDefault()

      let name = document.forms[0].name.value.trim()
      let password = document.forms[0].password.value.trim()
      let confirmpassword = document.forms[0].confirmpassword.value.trim()
      let username = document.forms[0].username.value.trim()
      let email = document.forms[0].email.value.trim()
      let seen = /[a-zA-Z0-9_]{8,12}/;
      

      { userNameList.includes(username) ? (this.setState(() => ({ usernameError: 'usename  already exist' }))) : (this.setState(() => ({ usernameError: undefined }))) }

      if(email.includes('@')){
        if((confirmpassword === password) && password.match(seen)){ 
          if (!userNameList.includes(username)) {
            userNameList.push(username)
            emailList.push(email);
            confirmpasswordList.push(confirmpassword);
            nameList.push(name)
            window.location.href = '/Signin'
          }
        }
      }

      {!email.includes('@')? (this.setState(()=>({emailError: 'email must contain @ character'}))) : (this.setState(()=>({emailError: undefined})))}
      
      {!(confirmpassword === password) ? (this.setState(()=>({confirmpasswordError: 'password does not match'}))) : (this.setState(()=>({confirmpasswordError: undefined})))}

      {!password.match(seen)  ? (this.setState(()=>({emptyPassword: 'your password should be alphabate and numbers, $ btween 8-12'}))) : (this.setState(()=>({emptyPassword: undefined})))}

      localStorage.setItem('nameList', nameList)
      localStorage.setItem('userNameList', userNameList)
      localStorage.setItem('confirmpasswordList', confirmpasswordList)
      localStorage.setItem('emailList', emailList)
    }
  render(){
    return(
      <div className='signUp'>
       <form className='signUp_container' onSubmit={this.handleSignupSubmit}>
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
         <div className='signUp_passward'>
           <h3>PASSWORD
           </h3>
            <input required={true} id='password'></input>
         </div>
         <div className='signUp_email'>
           <h3>EMAIL
              <span className='signUp_error_empty'>{this.state.emailError}</span>
           </h3>
           <input required={true} id='email'></input>
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
