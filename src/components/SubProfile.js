import React from 'react';

export default class SubProfile extends React.Component{
  render(){
    return(
      <div className='profile_main'>
        <div className='profile_detail'>
          < div className = 'profile_passward' >
            <h2>PASSWARD</h2>
            <input></input>
          </div>
          <div className = 'profile_phone' >
            <h2>phone number</h2>
            <input></input>
          </div>
        </div>
      </div>
    )
  }
}