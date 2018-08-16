import React from 'react';
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';

export default class AllHeader extends React.Component{
  render(){
    return(
      <div className='AllHeader'>
        <div className='AllHeader_container'>
            <h1 className='AllHeader_name'>MAY LOAVES</h1>
            <div className='AllHeader_navlinks'>
              <NavLink className='AllHeader_navlink' exact={true} to="/" activeClassName="is-active"> home </NavLink>
              <NavLink className='AllHeader_navlink' to="/Profile" activeClassName="is-active" exact={true}> profile</NavLink>
              <NavLink className='AllHeader_navlink' to="/order" activeClassName="is-active"> order </NavLink>
              <NavLink className='AllHeader_navlink' to="/sigUp" activeClassName="is-active"> sign up </NavLink>
              <NavLink className='AllHeader_navlink' to="/signin" activeClassName="is-active"> login in </NavLink>
            </div> 
        </div>
     </div>
    )
  }
}
