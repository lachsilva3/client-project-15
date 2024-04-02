import React, { useRef,useEffect,useState, useContext } from 'react'
// Context
import { AutheticationContext } from '../../context/AutheticationContext'
import Button from "./Button"
import FormGroup from "./FormGroup"
import { LoginFormCss } from '../styles/LoginFormCss';

import { useNavigate } from "react-router-dom";


export default function LoginForm() {

// references
const emailRef= useRef();

useEffect(()=>{
    emailRef.current.focus();
},[]);

// CONTEXT

const authenticator=useContext(AutheticationContext);


// Authetication
const[auth,setAuth]=useState({
    email:"",
    password:"",
});

const handleInputChange=(e)=>{
const{name,value}=e.target;
setAuth({...auth,[name]:value })
}
const navigate = useNavigate();
    const handleLogin=(e)=>{
     
        e.preventDefault();
        //context

        authenticator.Login(auth.email,auth.password)

        clearForm();
        navigate('/');
    }
    // clear the form after entering details
    function clearForm(){
        setAuth({
            email:"",
            password:"",
        })
    }
  return (
    <LoginFormCss >
  <div className='login-container '>

     <form className='login-form'>
        <FormGroup label={"Email"}
                    type={"email"} 
                    name={"email"}
                    placeholder={"Enter your email"}
                    referece={emailRef}
                    value={auth.email}
                    onChange={handleInputChange}
        />
<br />
        <FormGroup label={"Password"}
                    type={"password"} 
                    name={"password"}
                    placeholder={"Enter your password"}
                    value={auth.password}
                    onChange={handleInputChange}
        /><br />
        <button type='button' className='btn btn-primary'
            onClick={handleLogin} 
        ><b>SIGN IN</b></button>
        <br></br>
        <p style={{textAlign:'center'}}>New To UNZE?</p>
        <button type='button' className='btn btn-primary'
            onClick={() => navigate("/register/")}
        ><b>CREATE ACCOUNT</b></button>
     </form>
    </div>
    </LoginFormCss>
  )
}