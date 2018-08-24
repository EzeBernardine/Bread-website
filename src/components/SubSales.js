import React from 'react';
import {FaCartArrowDown} from 'react-icons/fa'
import { NavLink} from 'react-router-dom';

export default class SubSales extends React.Component{
  render(){
    return(
      <div className='profile_main'>
        <div className='profile_detail'>
          < div className = 'subProfile_password' >
            <h2>No of cups</h2>
            {<h3>24</h3>}
          </div>
          < div className = 'subProfile_phone' >
            <h2>Current sales</h2>
            {<h3>active</h3>}
          </div>
          <div className='subSales_cart'>
            <NavLink activeClassName="subSales_cart" to="/order/"><FaCartArrowDown /></NavLink>
          </div>
        </div>
      </div>
    )
  }
}