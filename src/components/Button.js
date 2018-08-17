import React from 'react';

export default class Button extends React.Component{
  // handleSignin=()=>{
  //   e.preventDefault();
  //   alert('sigin')
  // }
  //  handleSignup=(e)=>{
  //   e.preventDefault()
  //   alert('signup')
  // }
  render(){
    return(
      <div>
        <button 
          onClick={this.handleSignin} 
          className='button'> submit
        </button>
     </div>
    )
  }
}
