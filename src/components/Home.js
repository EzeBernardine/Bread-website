import React from 'react';
import Footer from './Footer'

export default class Home extends React.Component{
  render(){
    return(
      <div className='home'>
        <div className='home_imlg'>
        <div className='home_welcome_div'></div>   
          < img src="./images/dri.jpg" className = 'home_img' />
        </div>
        <h1 className='home_welcome'>WELCOME TO  NATURAL DRINKS</h1>
        <div className='home_info'>
          <h3>Do you know you can get different types of natural drinks delivered you and save you from the risk of carbonated drinks. Simply place your order, and save </h3>
        </div>
        <div className='home_footer'>
          <Footer/>
        </div>
     </div>
    )
  }
}