import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    // const handleLogin=()=>{
    //     if(username==="samatha"&&password=="098"){
    //         localStorage.setItem("isLoggedIn","true");
    //         localStorage.setItem("username",username);
    //         navigate("/products");
    //     }else{
    //         alert("Invalid username or password");
    //     }
    // };
    const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    u => u.username === username && u.password === password
  );

  if (validUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    navigate("/products");
  } else {
    alert("Invalid username or password");
  }
};
    
    return(
        <>
        <Header/>
        <div style={{textAlign:"center",padding:"120px", background:"Lightblue"}}>
            <h1>Login</h1>
            <input type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <br /><br />
            <input type="text"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

            />
            <br /><br />
            <button onClick={handleLogin}>Login</button>
            <p>
                New User ? <Link to="/Signup">Register here</Link>
            </p>
        </div>
        <Footer/>
        </>
    );

}
export default Login