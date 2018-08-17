import React from 'react';
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';

export default class Top extends React.Component{
  render(){
    return(
      <div className='top_container'>
        <div className='top_bread_container'>
           < img src="./images/naturaldrinks.jpg" className = 'top_bread' / >
        </div>
        <div className='top_drinks'>
          < img src="./images/drinks.jpg" className = 'top_breadslice' / >
        </div> 
    </div>
    )
  }
}
