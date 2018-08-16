import React from 'react';
import Header from './Header'
import Top from './Top'
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';

export default class Home extends React.Component{
  render(){
    return(
      
      <div className='home'>
      <div className='home_img'>
       < img src="./images/pink.jpeg" className = 'home_img' / >
      </div>
         {/* <div className='home_header'>
            < Header / >
        </div> */}
        <h1 className='home_welcome'>WELCOME TO MAY LOAVES</h1>
        <div className='home_writeup'>

          < div className = 'home_bread_types' >
            < img src="./images/shop.jpg" className = 'home_bread_samples' / >
            <h2>Wheat</h2>
            <p>availble only  in small sizes</p>
          </div>

          < div className = 'home_bread_types' >
            < img src="./images/f.jpeg" className = 'home_bread_samples' / >
             <h2>Loaf</h2>
             <p>available in any form</p>
          </div>

           < div className = 'home_bread_types' >
             < img src="./images/breadslice.jpg" className = 'home_bread_samples' / >
             <h2>slice</h2>
             <p>available in all types</p>
          </div>

          < div className = 'home_bread_types' >
         `   < img src="./images/fron.jpg" className = 'home_bread_samples '/ >
             <h2>Spring</h2>
             <p>available in all form</p>
          </div>
        </div>
     </div>
    )
  }
}