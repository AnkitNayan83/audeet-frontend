import React, { useState } from 'react';
import "./otp.scss"
export const Otp = () => {
  const [otp, setOTP] = useState(['', '', '', '']);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    setOTP(['', '', '', '']);
  };
  return (
    <div className='login-container'>
    <div className="left-part">
        <p>"Audeet: Simplifying your accounting tasks with intuitive features, seamless invoicing, and robust financial management tools."</p>
    </div>
    <div className="right-part login-container">
    <div className="otp-container">
      <h3>Enter Otp</h3>
      <p>Enter the OTP you received:</p>
      <form onSubmit={handleFormSubmit}>
        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => {
                const newOTP = [...otp];
                newOTP[index] = e.target.value;
                setOTP(newOTP);
              }}
            />
          ))}
        </div>
        <div className="btn-wrap">
        <button type="submit">Continue</button>
        </div>
        
      </form>
    </div>
    </div>
</div>
   
  )
}


