import React from 'react';

export default class SubSales extends React.Component{
  render(){
    return(
      <div className='profile_main'>
        <div className='profile_detail'>
          < div className = 'profile_passward' >
            <h2>No of cups</h2>
            {<h3>24</h3>}
          </div>
          < div className = 'profile_phone' >
            <h2>phone number</h2>
            {<h3>active</h3>}
          </div>
        </div>
      </div>
    )
  }
}