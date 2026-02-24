import img1 from "../images/images.jpg"
import img2 from "../images/mage1.jpg"
import img3 from "../images/image2.jpg"
import img4 from"../images/image4.jpg"
import img5 from "../images/image5.jpg"
import img6 from "../images/image 6.jpg"
import img7 from "../images/image7.webp"
import img8 from "../images/image8.jpg"
import img9 from "../images/image9.jpg"
import img10 from "../images/image10.webp"
import Footer from "./Footer"
import Header from "./Header"
import { useNavigate } from "react-router-dom"


function Products(){
    const navigate=useNavigate();
    const handleAddToCart = () => {
        const isLoggedin = localStorage.getItem("isLoggedIn");
        if(isLoggedin=="true"){
            navigate("/cart");
        }else{
            alert("Please login first!");
            navigate("/login")
        }
        };
    
    return(
        <>
        <Header/>
        <div className="products">
            <div className="product">
            <img src={img1} alt="product 1"/>
            <h3>iqoo neo 9</h3>
            <p>Rs.32,000</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product">
            <img src={img2} alt="product 2"/>
            <h3>iqoo neo 10</h3>
            <p>Rs.26,000</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product">
            <img src={img3} alt="product 3"/>
            <h3>iqoo Z10x</h3>
            <p>Rs.22,000</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
         <div className="product">
            <img src={img4} alt="product 4"/>
            <h3>cosmotics</h3>
            <p>Rs.2,000</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
         <div className="product">
            <img src={img5} alt="product 5"/>
            <h3>perfurm</h3>
            <p>Rs.350</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product">
            <img src={img6} alt="product 4"/>
            <h3>dress</h3>
            <p>Rs.500</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
          <div className="product">
            <img src={img7} alt="product 4"/>
            <h3>shoes</h3>
            <p>Rs.900</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
         <div className="product">
            <img src={img8} alt="product 4"/>
            <h3>Bangels</h3>
            <p>Rs.100</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
         <div className="product">
            <img src={img9} alt="product 4"/>
            <h3>Rolex</h3>
            <p>Rs.10,000</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product">
            <img src={img10} alt="product 4"/>
            <h3>Bracelet</h3>
            <p>Rs.1,000</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        
        
        <Footer/>
        
        </div>
        </>
        
        
    )
}


export default Products