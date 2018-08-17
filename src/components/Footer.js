import React from 'react';
import {FaEnvelope, FaPhone, FaHome} from'react-icons/fa';
export default class Footer extends React.Component{
  render(){
    return(
      <div className='footer'>
        <div className='footer_writup_div'>
          <div className='footer_writeup'>
            <div className = 'footer_bread_types' >
              < img src="./images/shop.jpg" className = 'footer_bread_samples' / >
              <h2>Wheat</h2>
              <p>availble only  in small sizes</p>
            </div>

            < div className = 'footer_bread_types' >
              < img src="./images/f.jpeg" className = 'footer_bread_samples' / >
               <h2>Loaf</h2>
               <p>available in any form</p>
            </div>

             <div className = 'footer_bread_types' >
               < img src="./images/breadslice.jpg" className = 'footer_bread_samples' / >
               <h2>slice</h2>
               <p>available in all types</p>
            </div>

            <div className = 'footer_bread_types'>
         `     < img src="./images/fron.jpg" className = 'footer_bread_samples '/ >
               <h2>Spring</h2>
               <p>available in all form</p>
            </div>
          </div>
        </div>
        <div className='footer_detail1'>
          <h3>We base in the beautiful city of Aba. </h3>
          <h5> We work with clients all over Nigeria.Do contact us </h5>
        </div>
        <div className='footer_detail2'>
          <h3 className='footer_detail2_email'>
          <FaEnvelope />
          demayou1@gmail.com</h3>
          <h3>07038065257<FaPhone /></h3>
          <h3><FaHome/>No 52 I dont know Street</h3>
        </div>
     </div>
    )
  }
}