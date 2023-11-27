import * as React from "react";
import { ItemListing } from "./item-listing/ItemListing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductListing } from "./product-listing/ProductListing";
import { Checkout } from "./checkout/Checkout";
import classes from "./App.module.css";

export const AppContext = React.createContext({});

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  return (
    <Router>
      <AppContext.Provider value={{ cartItems, setCartItems }}>
        <div className={classes.navBar}>
          <Link to="/" className={classes.link}>
            Products
          </Link>
          <Link to="/checkout" className={classes.link}>
            Checkout
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<ItemListing />} />
          <Route path="/productlisting/:id" element={<ProductListing />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
