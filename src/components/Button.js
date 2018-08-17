import React from 'react';

export default class Button extends React.Component{
  render(){
    return(
      <div>
        <button 
          onClick={this.props.signup || this.props.signin || this.props.order} 
          className='button'> submit
        </button>
     </div>
    )
  }
}
