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
          <p>ow to Store Bread: 5 Steps (with Pictures) - wikiHowhttps://www.wikihow.com/Store-BreadRating: 83% - ‎33 votesHow to Store Bread. When it comes to storing bread, the refrigerator is your worst enemy. Bread actually goes stale faster in the refrigerator than it does at room 
          </p>
          <h2>About</h2>
          < p > hat!https: //www.eatthis.com/how-to-store-bread/May 15, 2018 - Do you typically keep a loaf on your kitchen counter? We have news for you: that's actually the last place you want to store your bread. Find out ...Bread Storage Options - How to Keep Bread and Buns Freshhttps://www.thespruceeats.com › ... › Learning How to Cook › Food StorageMay 31, 2018 - There is no clear-cut rule as to where you should store bread and buns, but in order to keep it fresh longer, it should be kept in a somewhat ...</p>
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