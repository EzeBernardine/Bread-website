import React from 'react';
import Button from './Button';
import uuid from 'uuid';
import axios from 'axios'


let signUpDatabase = []
export default class SignUp extends React.Component{
  state={
    usernameError: undefined,
    confirmpasswordError: undefined,
    emailError: undefined
  };
  getValues=()=>{
    let phone = document.forms[0].phone.value.trim()
    let password = document.forms[0].password.value.trim()
    let confirmpassword = document.forms[0].confirmpassword.value.trim()
    let username = document.forms[0].username.value.trim()
    let email = document.forms[0].email.value.trim();
    let img = document.forms[0].img.value.trim();
    return ({ phone, password, confirmpassword, username, email, img})
  };
  validateUsername=()=>{
    if (signUpDatabase.length > 0){
      let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase'));
      {(signUpDatabase[0] === null) && signUpDatabase.shift()}
      const {username} = this.getValues();
      let Indexx = signUpDatabase.findIndex(i => i.username === username);
      if (localStorage.getItem('signUpDatabase') != null && Indexx != -1) {
        this.setState(() => ({ usernameError: 'username  already exist' }))
        return false
      }else{
        this.setState(() => (({ usernameError: undefined }))) 
        return true
      }
    }else{
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
  saveToLocalStorage = () => {
    let inputValues = this.getValues()
    let prevsignUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase'))
    let allsignUpDatabase = signUpDatabase.concat(prevsignUpDatabase)
    allsignUpDatabase.push(inputValues)
    return localStorage.setItem('signUpDatabase', JSON.stringify(allsignUpDatabase));
  }
  saveDetails=(e)=>{
    e.preventDefault()

    if( this.validateUsername() && this.validatePassword()){
      let phone = document.forms[0].phone.value.trim()
      let password = document.forms[0].password.value.trim()
      let confirmpassword = document.forms[0].confirmpassword.value.trim()
      let username = document.forms[0].username.value.trim()
      let email = document.forms[0].email.value.trim();
      this.saveToLocalStorage()
      axios({
        method: 'http://local:5000/signUpDatabase',
        data: {
          phone, 
          password, 
          confirmpassword, 
          username, 
          email
        },
      }).then(res => {
        console.log(res)
      })
      // window.location.href='/signin'
    }
  }
  render(){
    return(
      <div className='signUp'>
       <form className='signUp_container' onSubmit={this.saveDetails}>
         <div className='signUp_getStarted'>
           <h1>Sign up and get started</h1>
         </div>
         <div className='signUp_username'>
           <h3>USER NAME 
             <span className='signUp_error_empty'>{this.state.usernameError}</span>
           </h3>
            <input className='signUp_input' required={true} id='username' autoFocus={true}></input>
         </div>
         <div className='signUp_name'>
           <h3>PHONE NUMBER</h3>
            <input className='signUp_input' required={true} id='phone'></input>
         </div>
         <div className='signUp_email'>
           <h3>EMAIL
              <span className='signUp_error_empty'>{this.state.emailError}</span>
           </h3>
           <input className='signUp_input' required={true} id='email'></input>
         </div>
         <div className='signUp_passward'>
           <h3>PASSWORD
           </h3>
            <input className='signUp_input' type='password' required={true} id='password'></input>
         </div>
         <div className='signUp_confirmpassward'>
            <h3>CONFIRM PASSWORD
              <span  className='signUp_error_empty'>{this.state.confirmpasswordError}</span>
            </h3>
            <input className='signUp_input' type='password'required={true} id='confirmpassword'></input>
         </div>
        <div className='signUp_button'>
          <input type='file' className='signUp_img' id='img'></input>
          <Button / >
        </div>
       </form>
       
     </div>
    )
  }
}
