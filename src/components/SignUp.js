import React from 'react';
import Button from './Button'

export default class SignUp extends React.Component{
   handleSignup=(e)=>{
    e.preventDefault()
    alert('signup')
  }
  render(){
    return(
      <div className='signUp'>
       <form className='signUp_container'>
         <div className='signUp_getStarted'>
           <h1>Sign up and get started</h1>
         </div>
         <div className='signUp_name'>
           <h3>NAME</h3>
           <input></input>
         </div>
         <div className='signUp_passward'>
           <h3>PASSWORD</h3>
           <input></input>
         </div>
         <div className='signUp_email'>
           <h3>EMAIL</h3>
           <input></input>
         </div>
         <div className='signUp_confirmpassward'>
           <h3>CONFIRM PASSWORD</h3>
           <input></input>
         < Button signup={this.handleSignup}/ >
         </div>
       </form>
       
     </div>
    )
  }
}
