import React from 'react';
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';
import subProfile from '../components/SubProfile';
import subSales from '../components/SubSales';

let signInUserName = JSON.parse(localStorage.getItem('signInUserName'))
let username = JSON.parse(localStorage.getItem('username'))
let userUsername;
{(localStorage.getItem('username') != null) ? (userUsername = username[username.indexOf(signInUserName)]) : (userUsername = '')}

const Profile = () => ( 
  <BrowserRouter>
    <div className='profile'>
      <div className='profile_sub'>
        <div className='profile_container'>
          <div className='profile_img_div'>
            <img src="./images/person.png" className = 'profile_img' / >
          </div> 
          <div className='profile_navlink_route'>
            <h2 className='profile_name'>{userUsername}</h2>
            <div className='profile_navlink'>
              <NavLink to='/subProfile' className='profile_button'>Profile</NavLink>
              <NavLink to='/subSales' className='profile_button' >Sales</NavLink>
            </div> 
            <div className='profile_switch'>
              <Switch >
                <Route path="/subProfile" component={subProfile}/>
                <Route path="/subSales" component={subSales}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </BrowserRouter>
);
export default Profile;



   