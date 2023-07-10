import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.scss'

export const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        
       navigate('/otp') 
      };
  return (
    <div className='login-container'>
        <div className="left-part">
            <p>"Audeet: Simplifying your accounting tasks with intuitive features, seamless invoicing, and robust financial management tools."</p>
        </div>
        <div className="right-part ">
            <div className="login-container">
            <form onSubmit={handleFormSubmit}>
                <h2>Phone No</h2>
                <input type="text" placeholder="Enter Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}/>
                <button type="submit">Continue</button>
            </form>
           </div>
        </div>
    </div>
  )
}
