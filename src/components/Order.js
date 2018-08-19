import React from 'react';
import AllHeader from './AllHeader';
import Button from './Button';
import  Footer from './Footer'

export default class Order extends React.Component{
  handleOrder=(e)=>{
    e.preventDefault();
    alert('order')
  }
  render(){
    return(
      <div>
      <div className='order'>
        <form>
          <div className='order_form'>
             <div>
               <h3> No of loaves</h3>
               <input></input>
             </div>
             <div>
               <h3>Location</h3>
               <input></input>
             </div>
             <div>
               <h3>Date</h3>
               <input></input>
             </div>
             <div>
               <h3>Time</h3>
               <input></input>
             </div>
          <Button order={this.handleOrder}/>
          </div>
        </form>
        <div className='order_message'>
          <h2>Tips</h2> 
          < p > 
            The first 10 minutes: within 10 minutes after drinking sodas, 10 teaspoons of sugar hit your system(100 % more than the recommended daily sugar intake) and phosphoric acid cuts the overwhelming sweetness and that’ s the only reason that you won’ t throw up.
            Within 20 minutes: Your body will experience an insulin burst as your blood sugar spikes while your liver turn massive amount of sugar into fat.
            Within 40 minutes: Your body has absorbed caffeine so yourblood pressure goes up and your liver dumps more sugar into your bloodstream.
            Within 45 minutes: your body releases more dopamine(dopamine stimulates the pleasure centers of the brain)— the same reaction with drug addicts and their response to heroin.
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
          < img src="./images/OrderNow.png" className = 'order_ordernow' / >
          <Footer />
      </div>
    )
  }
}