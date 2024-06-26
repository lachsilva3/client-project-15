import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginFormCss } from '../styles/LoginFormCss';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AutheticationContext';


const LoginForm=({ onLogin })=> {

const {login}=useContext(AuthContext);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
 
    const navigate = useNavigate();
    
    async function onSubmit(e) {
        e.preventDefault()

        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if (userCredential.user) { 
                navigate('/')
            }
            
        } catch (error) {
            alert(error.message)
        }
     
     
        
 
    }
    async function handleLogin(e) {
    
        e.preventDefault();
  

        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
          
            
            // User successfully authenticated

            if (userCredential.user) {

                if (email === 'admin123@gmail.com' && password === 'admin123'){
                    navigate('/admin/')
                }
        else{
                navigate('/login/');
                login();
                onLogin(email);
            }
            }
            
              
        } catch (error) {
            console.error("Error logging in:", error.message);
            
            // Handle login errors (e.g., display error message to user)
            if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                // Display alert message for invalid credentials
                alert("Invalid email or password. Please try again.");
            } else {
                // Display generic error message for other errors
                alert("Invalid email or password! Please Enter the right credentials");
            }
            
        }
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter email and password');
            return;
          }
        
        
//end
     
   
}
  return (
    <LoginFormCss >
  <div className='login-container'>
     <form className='login-form' onSubmit={onSubmit}>

     <label>Email:</label>
        <input style={{padding:'10px' ,border:'0.5px solid grey',borderRadius:'6px'}}
            type={"email"} 
            id='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
   
<br />
<label>Password:</label>
        <input style={{padding:'10px',border:'0.5px solid grey',borderRadius:'6px'}}
            type={"password"} 
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type='button' className='btn btn-primary'
            onClick={handleLogin} 
        ><b>SIGN IN</b></button>
        <br></br>
        <p style={{textAlign:'center'}}>New To UNZE?</p>
        <button type='button' className='btn btn-primary'
            onClick={() => navigate("/register/")}
        ><b>CREATE ACCOUNT</b></button>
<br></br>
      
     </form>
    </div>
    </LoginFormCss>
  )
}
export default LoginForm;