import React from 'react';
import {FaUserEdit} from'react-icons/fa'
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';
import Button from './Button';
import  Footer from './Footer';
import uuid from 'uuid';

let  orderDatabase = []
export default class Order extends React.Component{
  getValues=()=>{
    let cups = document.forms[0].cups.value.trim()
    let location = document.forms[0].location.value.trim()
    let date = document.forms[0].date.value.trim()
    let time = document.forms[0].time.value.trim();
    return ({cups, location, date, time})
  }
  saveOrder=()=>{
    let inputData  = this.getValues()
    localStorage.setItem("inputData", JSON.stringify(inputData))
    let prevData = JSON.parse(localStorage.getItem('orderDatabase'))
    let allData = orderDatabase.concat(prevData)
    allData.push(inputData)
    return localStorage.setItem('orderDatabase', JSON.stringify(allData));
  }
  handleSubmitOrder=(e)=>{
    e.preventDefault();
    this.saveOrder()
  }
  render(){
    return(
      <div>
        <div className='order_profileDiv'>
          <NavLink className='order_profile' to="/Profile"  exact={true}><FaUserEdit /></NavLink>
        </div>
        <div className='order'>
          <form onSubmit={this.handleSubmitOrder}>
            <div className='order_form'>
              <div>
                <h3> No of cups</h3>
                <input required={true} id='cups'></input>
              </div>
              <div>
                <h3>Location</h3>
                <input required={true} id='location'></input>
              </div>
              <div>
                <h3>Date</h3>
                <input required={true} id='date'></input>
              </div>
              <div>
                <h3>Time</h3>
                <input required={true} id='time'></input>
              </div>
            <Button order={this.handleOrder}/>
            </div>
          </form>
          <div className='order_message'>
            <h2>Tips</h2> 
            < p > 
              The first 10 minutes: within 10 minutes after drinking sodas, 10 teaspoons of sugar hit your system(100 % more than the recommended daily sugar intake) and phosphoric acid cuts the overwhelming sweetness and that’ s the only 
            </p>
            <h2>About</h2>
            < p >
              Within 40 minutes: Your body has absorbed caffeine so your blood pressure goes up and your liver dumps more sugar into your bloodstream.</p>
          </div>
          <div className='order_samples'>
            < img src="./images/order.jpg" className = 'order_img' / >
            < img src="./images/order1.png" className = 'order_img' / >
            < img src="./images/order2.jpg" className = 'order_img' / >
            < img src="./images/order3.jpg" className = 'order_img' / >
            < img src="./images/order4.jpg" className = 'order_img' / >
          </div>
        </div>
        <img src="./images/OrderNow.png" className = 'order_ordernow' / >
        <Footer />
      </div>
    )
  }
}

{/* reason that you won’ t throw up.
Within 20 minutes: Your body will experience an insulin burst as your blood sugar spikes while your liver turn massive amount of sugar into fat.
Within 40 minutes: Your body has absorbed caffeine so yourblood pressure goes up and your liver dumps more sugar into your bloodstream.
Within 45 minutes: your body releases more dopamine(dopamine stimulates the pleasure centers of the brain)— the same reaction with drug addicts and their response to heroin. */}