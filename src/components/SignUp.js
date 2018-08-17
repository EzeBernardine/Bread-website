import React from 'react';
import Button from './Button'

let inputedName=[]
let inputedPassword=[]
let inputedemail=[]
let inputedConfirmPassword=[]
export default class SignUp extends React.Component{
  handleSignupSubmit=(e)=>{
    e.preventDefault()
    let name = document.forms[0].name.value
    let password = document.forms[0].password.value
    inputedName.push(name)
    inputedPassword.push(password)
    console.log(inputedPassword)
    // console.log(document.forms[0].password.value)
    // console.log(document.forms[0].email.value)
    // console.log(document.forms[0].confirmemail.value)
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
           <input id='name'></input>
         </div>
         <div className='signUp_name'>
           <h3>USER NAME</h3>
           <input id='username'></input>
         </div>
         <div className='signUp_passward'>
           <h3>PASSWORD</h3>
           <input id='password'></input>
         </div>
         <div className='signUp_email'>
           <h3>EMAIL</h3>
           <input id='email'></input>
         </div>
         <div className='signUp_confirmpassward'>
           <h3>CONFIRM PASSWORD</h3>
           <input id='confirmemail'></input>
         < Button signup={this.handleSignup}/ >
         </div>
       </form>
       
     </div>
    )
  }
}
