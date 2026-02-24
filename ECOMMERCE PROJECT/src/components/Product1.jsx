import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Products1() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(res => {
        setProducts(res.data.products);
      });
  }, []);

  
  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {

      // get existing cart
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // add new product
      cart.push({
        name: product.title,
        price: product.price,
        img: product.thumbnail
      });

      // save again
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Item added to cart");

      navigate("/cart");

    } else {
      alert("Please login first");
      navigate("/Login");
    }
  };

  return (
    <>
      <Header />

      <section className="products">
        {products.map((p) => (
          <div className="product" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>

            <button onClick={() => handleAddToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default Products1;