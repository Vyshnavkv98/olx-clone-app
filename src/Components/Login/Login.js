import React, { useState,useContext, useEffect } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
 
 const[email,setEmail]=useState('')
 const[password,setPassword]=useState('')
 const[loginError,setLoginError]=useState('')

 const [isVisible,setIsVsible]=useState(true)

 const {firebase}=useContext(FirebaseContext)
 const History=useHistory()

useEffect(()=>{
  let timer
  if(loginError){
    setTimeout(()=>{
      setLoginError('')
          },3000)
  }
   
  
  return ()=>{
    clearTimeout(timer)
  }
},[loginError])


 const handleSubmit=(event)=>{
  console.log(email,password);
  event.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{
    History.push('/home')
  }).catch((error)=>{
    setLoginError('invalid username or password')
  })
 }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
          />
          <br />
          <br />
          <button>Login</button>
          {loginError&& <p className="invalid">{loginError}</p>}
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
