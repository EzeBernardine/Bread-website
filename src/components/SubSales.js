import React from 'react';
import {FaCartArrowDown} from 'react-icons/fa'
import { NavLink} from 'react-router-dom';

export default class SubSales extends React.Component{
  
  render(){
    let inputData = JSON.parse(localStorage.getItem('inputData'))
    let orderDatabase = JSON.parse(localStorage.getItem('orderDatabase'));
    {(orderDatabase[0] === null) && orderDatabase.shift()}
    let Indexx = orderDatabase.findIndex(i => i.cups === inputData.cups);
    let cups = orderDatabase[Indexx].cups;
    let sales;
    {(cups.length > 0) ? (sales = 'active') : (sales = 'none avtive')}
    return(
      <div className='profile_main'>
        <div className='profile_detail'>
          < div className = 'subProfile_password' >
            <h2>No of cups</h2>
            <h3>{cups}</h3>
          </div>
          < div className = 'subProfile_phone' >
            <h2>Current sales</h2>
            <h3>{sales}</h3>
          </div>
          <div className='subSales_cart'>
            <NavLink activeClassName="subSales_cart" to="/order/"><FaCartArrowDown /></NavLink>
          </div>
        </div>
      </div>
    )
  }
}