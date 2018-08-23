import React from 'react';
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';
import Order from '../components/Order';
import Home from '../components/Home';
import Profile from '../components/Profile';
import NotFound from '../components/NotFound';
// import subProfile from '../components/SubProfile';
// import subSales from '../components/SubSales';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Top from '../components/Top'
import AllHeader from '../components/AllHeader';


const AppRouter = () => ( 
 <BrowserRouter>
  <div className='AppRoute'>
  <Top />
  <AllHeader />
    <div className='AppRoute_body'>
      <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/signin" component={SignIn} exact={true} />
            <Route path="/order" component={Order} exact={true} />
            <Route path="/Profile" component={Profile }/>
            <Route path="/sigUp" component={SignUp }/>
            {/* <Route path="/subProfile" component={subProfile }/>
            <Route path="/subSales" component={subSales }/> */}
            <Route component={NotFound} />
      </Switch>
    </div>
  </div>
 </BrowserRouter>
);
export default AppRouter;