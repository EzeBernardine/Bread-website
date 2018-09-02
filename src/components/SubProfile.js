import React from 'react';
import Button from './Button';
import Profile from './Profile'


let signInUserName = JSON.parse(localStorage.getItem('signInUserName'))
let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase'))
if(signUpDatabase != null){
  {(signUpDatabase[0] === null) && signUpDatabase.shift()};
}
let usernameIndex = signUpDatabase.findIndex(i => i.username === signInUserName);
console.log(usernameIndex)
console.log(signInUserName)
let password = signUpDatabase[usernameIndex].password;
let email = signUpDatabase[usernameIndex].email
let phone = signUpDatabase[usernameIndex].phone

export default class SubProfile extends React.Component{
  subProfileValues=()=>{
      phone =document.getElementById('userPhone').innerHTML.trim()
      password = document.getElementById('userPassword').innerHTML.trim()
      email =  document.getElementById('userEmail').innerHTML.trim()
  let confirmpassword=  document.getElementById('userPassword').innerHTML.trim(),
      username = signUpDatabase[usernameIndex].username;
      return  ({ phone, password, confirmpassword, username, email})
  }
  subProfileSave=()=>{
    let inputValues = this.subProfileValues()
    signUpDatabase.splice(usernameIndex, 1, inputValues)
    localStorage.setItem('signUpDatabase', JSON.stringify(signUpDatabase));
    console.log(JSON.parse(localStorage.getItem('signUpDatabase')))
  }
  render(){ 
    return(
      <div className='subProfile'>
        <div className='profile_detail'>
          <div className = 'subProfile_password' >
            <h2>Pasword </h2>
            <h3 contentEditable={true} id='userPassword'>{password} </h3>
          </div>
          <div className = 'subProfile_phone' >
            <h2>Phone number  </h2>
            <h3 contentEditable={true} id='userPhone'>{phone}</h3>
          </div>
          <div className = 'subProfile_phone' >
            <h2 >Email  </h2>
            <h3 contentEditable={true} id='userEmail'>{email}</h3>
          </div>
        </div>
        <div><Button subProfile={this.subProfileSave}/></div>
      </div>
    )
  }
}