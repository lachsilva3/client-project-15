import { useState,createContext } from "react";
export const AutheticationContext= createContext({
    
    isAutheticated:false,
    Login:()=>{},
    logout:()=>{},
})

export default function AutheticationProvider({children}){
   
const [isAutheticated,setIsAutheticated]=useState(false);


// login  

const Login=(email,password)=>{

if(email !== "admin" || password !== "admin"){
    alert("Invalid details or Empty fields")
    
    return;
}
console.log("granted")
setIsAutheticated(true);
}
// logout
const logout=()=>{
    console.log("Logout")
    setIsAutheticated(false);
}

    return(
    <AutheticationContext.Provider value={{isAutheticated,
    Login,logout} }>

        {children}

    </AutheticationContext.Provider>
    )
}