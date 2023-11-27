import * as React from "react";
import { useNavigate } from "react-router-dom";
import { itemData } from "../dummy";
import { AppContext } from "../App";
import { Card } from "./card/Card";
import classes from "./ItemListing.module.css";

export const ItemListing = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = React.useContext<any>(AppContext);
  const [message, setMessage] = React.useState("");
  const [id, setId] = React.useState("");
  const handleCart = (itemDetails: any) => {
    setId(itemDetails.id);
    const isItemInCart = cartItems.some(
      (cartItem: any) => cartItem.id === itemDetails.id
    );
    if (isItemInCart) {
      setMessage("Already in the Cart");
    } else {
      itemDetails.count = 1;
      setCartItems([...cartItems, itemDetails]);
      setMessage("Added to the Cart");
    }
  };

  const giveProductDetails = (key: string) => {
    navigate(`/productlisting/${key}`);
  };

  const content = itemData.map((itemDetails, key) => {
    return (
      <div key={key} className={classes.cardContainer}>
        <div
          onClick={() => {
            giveProductDetails(String(key + 1));
          }}
        >
          <Card itemDetails={itemDetails} />
        </div>
        <button
          onClick={() => {
            handleCart(itemDetails);
          }}
          className={classes.cartButton}
        >
          Add to Cart
        </button>
        {message && id === itemDetails.id && <div>{message}</div>}
      </div>
    );
  });
  return (
    <div>
      <div className={classes.container}>{content}</div>
    </div>
  );
};
