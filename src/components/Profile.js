import React from 'react';
import AllHeader from './AllHeader'

export default class Profile extends React.Component{
  render(){
    return(
      <div className='profile_main'>
        <div className='profile_container'>
             <div className='profile_middle_container'>
               <div className='profile_img_div'>
                  < img src="./images/person.png" className = 'profile_img' / >
               </div> 

               <div className='profile_ongoing_div'>
                 <h2 className='profile_name'>NAME</h2>
                 <div className='profile_ongoing_middle'>
                   <button className='profile_ongoing'>profile</button>
                   <button className='profile_ongoing'>sales</button>
                 </div>
               </div>

               <div className='profile_detail'>
                 < div className = 'profile_passward' >
                   <h2>PASSWARD</h2>
                   <input></input>
                 </div>
                 < div className = 'profile_phone' >
                  <h2>phone number</h2>
                  <input></input>
                </div>
               </div>
             </div>
        </div>
      </div>
    )
  }
}