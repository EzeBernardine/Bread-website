import React from 'react';
import Footer from './Footer'

export default class Home extends React.Component{
  render(){
    return(
      <div className='home'>
       <div className='home_img'>
        < img src="./images/dri.jpg" className = 'home_img' />
       </div>
        <h1 className='home_welcome'>WELCOME TO  NATURAL DRINKS</h1>
        <div>
          <h3>Do you know you can get different types of natural drinks delivered you and save you from the risk of carbonated drinks. Simply plcae your order, and it will be delivered to you</h3>
        </div>
       <Footer/>
     </div>
    )
  }
}