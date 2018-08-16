import React from 'react';
import AllHeader from './AllHeader';
import Button from './Button'
import Header from './Header'

export default class SignUp extends React.Component{
  render(){
    return(
      <div className='signUp'>
       <form className='signUp_container'>
         <div className='signUp_name'>
           <h3>NAME</h3>
           <input></input>
         </div>
         <div className='signUp_passward'>
           <h3>PASSWORD</h3>
           <input></input>
         </div>
         <div className='signUp_email'>
           <h3>EMAIL</h3>
           <input></input>
         </div>
         <div className='signUp_confirmpassward'>
           <h3>confirm password</h3>
           <input></input>
         </div>
         <Button />
       </form>
     </div>
    )
  }
}
