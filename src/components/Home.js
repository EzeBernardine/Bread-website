import React from 'react';
import Footer from './Footer'

export default class Home extends React.Component{
  render(){
    return(
      <div className='home'>
       <div className='home_img'>
        < img src="./images/pink.jpeg"   className = 'home_img' / >
       </div>
        <h1 className='home_welcome'>WELCOME TO MAY LOAVES</h1>
       <Footer/>
     </div>
    )
  }
}