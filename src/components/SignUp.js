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
    emptyUsername: undefined,
    passwordError: undefined
  }
    handleSignupSubmit = (e) => {
      e.preventDefault()
      let name = document.forms[0].name.value.trim()
      let password = document.forms[0].password.value.trim()
      let confirmpassword = document.forms[0].confirmpassword.value.trim()
      let username = document.forms[0].username.value.trim()
      nameList.push(name)
      console.log(confirmpassword)
      console.log(password)
      {!(confirmpassword === password) ? (this.setState(()=>({passwordError: 'password does not match'}))) : (this.setState(()=>({passwordError: undefined})))}
      if(!confirmpasswordList.includes(confirmpassword)&& confirmpassword.length>0 && (confirmpassword === password)){
        confirmpasswordList.push(confirmpassword)
        console.log(confirmpasswordList)
      }
      
      let match = userNameList.includes(username)
      let len = username.length > 0
      {match ?(this.setState(()=>({usernameError: 'usename  already exist'}))) :(this.state.usernameError)}
      {!len?(this.setState(()=>({emptyUsername: 'input a valid username'}))) :(this.state.emptyUsername)}
      if (!match && len) {
        userNameList.push(username)
        console.log(userNameList)
      }
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
         <div className='signUp_username'>
           <h3>USER NAME 
             <span className='signUp_error_empty'>{this.state.usernameError}{this.state.emptyUsername}</span>
           </h3>
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
            <h3>CONFIRM PASSWORD
              <span className='signUp_error_empty'>{this.state.passwordError}</span>
            </h3>
           <input id='confirmpassword'></input>
         < Button signup={this.handleSignup}/ >
         </div>
       </form>
       
     </div>
    )
  }
}
