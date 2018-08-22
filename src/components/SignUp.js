import React from 'react';
import Button from './Button';
import uuid from 'uuid';



let Database = [];
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
    Database.filter(uname => {
      {(uname === username) ? (this.setState(() => ({ usernameError: 'usename  already exist' }))) : (this.setState(() => ({ usernameError: undefined }))) }
    });
  };
  validatePassword=()=>{
    const {confirmpassword, password} = this.getValues();
       {!(confirmpassword === password) ? (this.setState(()=>({confirmpasswordError: 'password does not match'}))) : (this.setState(()=>({confirmpasswordError: undefined})))}
  };
  saveUnameStorage = (username) => {
    let prevU = JSON.parse(localStorage.getItem('username'))
    let prevData = uDatabase.concat(prevU)
    prevData.push(username)
    localStorage.setItem('username', JSON.stringify(prevData));
    let USERNAME = JSON.parse(localStorage.getItem ('username'))
    return USERNAME
  }
  savePasswordStorage = (password) => {
    let prev = JSON.parse(localStorage.getItem('password'))
    let prevData = uDatabase.concat(prev)
    prevData.push(password)
    localStorage.setItem('password', JSON.stringify(prevData));
    let PASSWORD = JSON.parse(localStorage.getItem('password'))
    return PASSWORD
  }
  saveDetails=(e)=>{
    e.preventDefault()
    this.validatePassword();
    this.validateUsername();
    let { name, password, confirmpassword, username, email } =  this.getValues()
    let USERNAME = this.saveUnameStorage(username)
    let PASSWORD = this.savePasswordStorage(password)
  }
  // handleSignu // Database.push({
    //   name: name,
    //   username: username,
    //   email: email,
    //   password: password,
    //   id: uuid()
    // })
    // this.saveToLStorage(username)
    // pSubmit = (e) => {
  //   e.preventDefault()
    
  //   let name = document.forms[0].name.value.trim()
  //   let password = document.forms[0].password.value.trim()
  //   let confirmpassword = document.forms[0].confirmpassword.value.trim()
  //   let username = document.forms[0].username.value.trim()
  //   let email = document.forms[0].email.value.trim()
  //   let seen = /[a-zA-Z0-9_]{8,12}/;
    
    
  //   { userNameList.includes(username) ? (this.setState(() => ({ usernameError: 'usename  already exist' }))) : (this.setState(() => ({ usernameError: undefined }))) }
    
    
  //   if(email.includes('@')){
  //     if((confirmpassword === password) && password.match(seen)){ 
  //       if (!userNameList.includes(username)) {
  //         // userNameList.push(username)
  //         // emailList.push(email);
  //         // confirmpasswordList.push(confirmpassword);
  //         // nameList.push(name)
  //         Database.push(
  //           {
  //             name: inputEl,
  //             email: emailEl,
  //             id: uuid()
  //           }
  //         )
          
  //         saveData()
  //         localStorage.setItem('nameList', nameList)
  //         localStorage.setItem('userNameList', userNameList)
  //         localStorage.setItem('confirmpasswordList', confirmpasswordList)
  //         localStorage.setItem('emailList', emailList)
  //         window.location.href = '/Signin'
  //       }
  //     }
  //   }
    
  //   {!email.includes('@')? (this.setState(()=>({emailError: 'email must contain @ character'}))) : (this.setState(()=>({emailError: undefined})))}
    
  //   {!(confirmpassword === password) ? (this.setState(()=>({confirmpasswordError: 'password does not match'}))) : (this.setState(()=>({confirmpasswordError: undefined})))}
    
  //   {!password.match(seen)  ? (this.setState(()=>({emptyPassword: 'your password should be alphabate and numbers, $ btween 8-12'}))) : (this.setState(()=>({emptyPassword: undefined})))}
    
    
  // }
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
