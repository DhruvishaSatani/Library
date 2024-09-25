import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";


function Login() {
  const [email ,setEmail]=useState("");
  const [password ,setPassword]= useState("")
  const [error ,setError] =useState(null);

  const handleLogin =async(e)=>{
       e.preventDefault();

       if(!validateEmail(email)){
        setError("Please enter a valid email address.")
        return;
       }
       if(!password){
        setError("Please enter the password")
        return;
       }

       setError("")
  };
  return (
    <div>
      <Navbar />

      <div className="flex items-center  justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form action="" onSubmit={handleLogin}>
            <h4 className="text-2xl mb-4">Login</h4>
            <input type="text" placeholder="email" className="input-box"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)}/>
              {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button className="btn-primary" type="submit">
              Login
            </button>
            <p className="text-sm text-center  mt-4">
              Not registered yet?{""}
              <Link to="/signup" className="font-semibold text-primary m-2 underline">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
