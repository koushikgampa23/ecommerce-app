import * as React from "react";
import { AppContext } from "../App";
import classes from "./Checkout.module.css";

export const Checkout = () => {
  const { cartItems, setCartItems } = React.useContext<any>(AppContext);
  const [total, setTotal] = React.useState(0);

  const handleAddingCart = (itemId: string) => {
    const updatedCart = cartItems.map((item: any) =>
      item.id === itemId ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDeleteCart = (itemId: string) => {
    const updatedCart = cartItems.map((item: any) =>
      item.id === itemId ? { ...item, count: item.count - 1 } : item
    );

    const filteredCart = updatedCart.filter((item: any) => item.count > 0);
    setCartItems(filteredCart);
  };

  React.useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc: any, item: any) =>
        acc +
        (Number(item.discount) / 100) * Number(item.actualPrice) * item.count,
      0
    );

    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>No Cart Items</div>
      ) : (
        <div className={classes.page}>
          <div className={classes.leftContainer}>
            {cartItems.map((item: any) => (
              <div className={classes.mainContainer}>
                <div key={item.id} className={classes.container}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={classes.imgStyle}
                  />
                  <div className={classes.buttonContainer}>
                    <button onClick={() => handleAddingCart(item.id)}>+</button>
                    {item.count}
                    <button onClick={() => handleDeleteCart(item.id)}>-</button>
                  </div>
                </div>

                <div className={classes.contentContainer}>
                  <span className={classes.heading}>{item.name}</span>
                  <div className={classes.priceContainer}>
                    <span>
                      &#8377;
                      {(Number(item.discount) / 100) *
                        Number(item.actualPrice) *
                        item.count}
                    </span>
                    <span className={classes.discountPrice}>
                      &#8377;
                      {Number(item.actualPrice) * item.count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.totalPrice}>
            <span className={classes.heading}>Price Details</span>
            <br />
            <br />
            <span>Overall Total: </span>
            <strong>&#8377;{total}</strong>
          </div>
        </div>
      )}
    </div>
  );
};
