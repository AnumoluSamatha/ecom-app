import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    444444
  }, []);
  
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // 🔹 NEW: ensure each item has quantity
    const cartWithQty = cart.map(item => ({
      ...item,
       quantity: item.quantity || 1
    }));



    setCartItems(cartWithQty);
  }, [])
  

  const total = cartItems.reduce(
    (acc, item) => acc + item.price*item.quantity,
    0
  );
const removeItem  =(indextoRemove) =>{
  const updatedCart=cartItems.filter((_,index) => index!== indextoRemove);
  setCartItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}
//NEW increase quantity
const increaseQty = (index) => {
    const temp = [...cartItems];
    temp[index].quantity = temp[index].quantity + 1;
    setCartItems(temp);
    localStorage.setItem("cart", JSON.stringify(temp));
  };

  // 🔹 NEW: decrease quantity
  const decreaseQty = (index) => {
    const temp = [...cartItems];
    if (temp[index].quantity > 1) {
      temp[index].quantity = temp[index].quantity - 1;
      setCartItems(temp);
      localStorage.setItem("cart", JSON.stringify(temp));
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          textAlign: "center",
        }}
      >
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <h3>No items in cart</h3>
        ) : (
          <>
            <div className="products">
              {cartItems.map((item, index) => (
                <div className="product" key={index}>
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div>
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span style={{ margin: "0 20px" }}>Item count: {item.quantity}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>
                  <button onClick={()=>removeItem(index)}>Delete</button>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "40px" }}>
              Total Amount: ${total}
            </h2>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;