import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Singup";
import Products from "./components/Products";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";




function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;