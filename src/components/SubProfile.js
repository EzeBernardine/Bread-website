import React from 'react';
import Button from './Button';
import Profile from './Profile'

let signInUserName = JSON.parse(localStorage.getItem('signInUserName'))
let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase'))
 {(signUpDatabase[0] === null) && signUpDatabase.shift()};
let usernameIndex = signUpDatabase.findIndex(i => i.username === signInUserName);
export default class SubProfile extends React.Component{
  subProfile=()=>{
     let  userPhone = signUpDatabase[usernameIndex].phone
          userPassword = signUpDatabase[usernameIndex].password
          userEmail = signUpDatabase[usernameIndex].email;
      userEmail = document.getElementById('userEmail').innerHTML,
      userPhone = document.getElementById('userPhone').innerHTML,
      userPassword = document.getElementById('userPassword').innerHTML;
    localStorage.setItem('signUpDatabase', )
    console.log(userEmail, userPassword, userPhone)
  }
  render(){ 
      let userPassword = signUpDatabase[usernameIndex].password;
      let userEmail = signUpDatabase[usernameIndex].email
      let userPhone = signUpDatabase[usernameIndex].phone
    return(
      <div className='subProfile'>
        <div className='profile_detail'>
          <div className = 'subProfile_password' >
            <h2>Pasword </h2>
            <h3 contentEditable={true} id='userPassword'>{userPassword} </h3>
          </div>
          <div className = 'subProfile_phone' >
            <h2>Phone number  </h2>
            <h3 contentEditable={true} id='userPhone'>{userPhone}</h3>
          </div>
          <div className = 'subProfile_phone' >
            <h2 >Email  </h2>
            <h3 contentEditable={true} id='userEmail'>{userEmail}</h3>
          </div>
        </div>
        <div><Button subProfile={this.subProfile}/></div>
      </div>
    )
  }
}