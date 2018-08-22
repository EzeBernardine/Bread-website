import React from 'react';
import SubSales from './SubSales'
import SubProfile from './SubProfile'

export default class Profile extends React.Component{
  profile=()=>{
    console.log('hi')
    return false
  }
  render(){
    return(
      <div className='profile_main'>
        <div className='profile_container'>
            <div className='profile_middle_container'>
              <div className='profile_img_div'>
                <img src="./images/person.png" className = 'profile_img' / >
              </div> 
              <div className='profile_ongoing_div'>
                <h2 className='profile_name'>NAME</h2>
                <div className='profile_ongoing_middle'>
                  <button className='profile_ongoing'>profile</button>
                  <button className='profile_ongoing' activeClassName="is-active" onClick={this.profile}>sales</button>
                </div>
                {this.profile? (< SubSales />) : (< SubProfile />)}
              </div>
            </div>
        </div>
      </div>
    )
  }
}