import * as React from "react";
import { ItemListing } from "./item-listing/ItemListing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductListing } from "./product-listing/ProductListing";
import { Checkout } from "./checkout/Checkout";

export const AppContext = React.createContext({});

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  return (
    <Router>
      <AppContext.Provider value={{ cartItems, setCartItems }}>
        <Link to="/itemlisting" >item Listing</Link>
        <Link to="/checkout">Checkout</Link>
        <Routes>
          <Route path="/itemlisting" element={<ItemListing />} />
          <Route path="/productlisting/:id" element={<ProductListing />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
