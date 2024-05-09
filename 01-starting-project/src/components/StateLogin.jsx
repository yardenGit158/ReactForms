import { useState } from "react";
import { useRef } from "react";

export default function StateLogin() {
  const [enteredValues,setEnteredValues]=useState({
    email:'',
    password:''
  });
 
  const [didEdit,setDidEdit]=useState({
    email:false,
    password:false
  })

  const isEmailValid= (didEdit.email && !enteredValues.email.includes('@'));
  const isPasswordValid= enteredValues.password.length>5;


 
  function onSubmit(event){
   event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChanged(identifier,value){
    setEnteredValues(prevValues=> ({
      ...prevValues,
      [identifier]:value
    }));
    setDidEdit(prev=>({
      ...prev,
      [identifier]:false
    }))
  }
 
  function handleInputBlur(identifier){
    setDidEdit((prevEditValues)=>({
      ...prevEditValues,
      [identifier]:true
    }))
  }
  return (
    <form onSubmit={onSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
          onBlur={()=>handleInputBlur('email')}
          value={enteredValues.email} onChange={(event)=>handleInputChanged('email',event.target.value)} id="email" type="email" name="email" />
          <div className="control-error">{isEmailValid && <p>please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label  htmlFor="password">Password</label>
          <input  onBlur={()=>handleInputBlur('password')} value={enteredValues.password} onChange={(event)=>handleInputChanged('password',event.target.value)} id="password" type="password" name="password" />

        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button disabled={!isPasswordValid && !isEmailValid}  className="button">Login</button>
      </p>
    </form>
  );
}
