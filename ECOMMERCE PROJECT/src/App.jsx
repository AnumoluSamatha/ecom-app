import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import "./components/Styles.css"
// import Products from "./components/Products"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Product1 from "./components/Product1"
import Signup from "./components/Singup"

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
     {/* <Route path="products" element={<Products/>}/>} */}
     <Route path="/products" element={<Product1/>}/>
      <Route path="login"  element={<Login/>}/>
      <Route path="Cart" element={<Cart/>}/>
      <Route path="Signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App 