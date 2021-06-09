// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
       <nav>
           <ul>
               <li><h1><Link to="/home">Home</Link></h1></li>
               <li><h1><Link to="/products">Products</Link></h1></li>
               <li><h1><Link to="/cart">View Cart</Link><Link to="/checkout">Checkout</Link></h1></li>
           </ul>
       </nav>
    )
}

export default Nav;