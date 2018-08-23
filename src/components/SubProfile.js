import React from 'react';

export default class SubProfile extends React.Component{
  render(){ 
      let signInUserName = JSON.parse(localStorage.getItem('signInUserName'))
      let username = JSON.parse(localStorage.getItem('username'))
      let email = JSON.parse(localStorage.getItem('email'))
      let phone = JSON.parse(localStorage.getItem('phone'))
      let password = JSON.parse(localStorage.getItem('password'))
      let userPassword = password[username.indexOf(signInUserName)];
      let userEmail = email[username.indexOf(signInUserName)]
      let userPhone = phone[username.indexOf(signInUserName)]
    return(
      <div className='subProfile'>
        <div className='profile_detail'>
          < div className = 'subProfile_password' >
            <h2>Pasword </h2>
            <h3>{userPassword}</h3>
          </div>
          <div className = 'subProfile_phone' >
            <h2>Phone number  </h2>
            <h3>{userPhone}</h3>
          </div>
          <div className = 'subProfile_phone' >
            <h2>Email  </h2>
            <h3>{userEmail}</h3>
          </div>
        </div>
      </div>
    )
  }
}