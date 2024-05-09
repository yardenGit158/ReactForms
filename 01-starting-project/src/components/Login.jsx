import { useState } from "react";
import { useRef } from "react";

export default function Login() {
 
 const[isFormInvalid,setIsFormInvalid]=useState(false);

  const emailRef=useRef();
  const passwordRef=useRef();


  function onSubmit(event){
   event.preventDefault();
   const enteredEmail=emailRef.current.value;
   const enteredPassword=passwordRef.current.value;
   const isEmailValid=enteredEmail.includes('@');
   if(!isEmailValid)
   {
    setIsFormInvalid(true);
    return;//to cancle if after the block gonna be HTTP request
   }
   setIsFormInvalid(false);

   console.log("Sending http request ......");

  }

 
  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} id="email" type="email" name="email" />
          {isEmailValid && <p>please enter a val8id emnaiol</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
