import { itemDataType } from "../../types";
import classes from "./Card.module.css";

interface Props {
  itemDetails: itemDataType;
}

export const Card = ({ itemDetails }: Props) => {
  return (
    <>
      <div className={classes.container}>
        <img
          src={itemDetails.img}
          alt={itemDetails.name}
          className={classes.imgStyle}
        />
        <span className={classes.heading}>{itemDetails.name}</span>
        <div>
          <span className={classes.saleDiscount}>
            {itemDetails.discount}% off
          </span>
          <span className={classes.deal}> Deal</span>
        </div>
        <div className={classes.priceContainer}>
          <div className={classes.priceTag}>
            <span className={classes.rupeeStyle}>&#8377;</span>
            <span>{itemDetails.actualPrice}</span>
          </div>
          <span className={classes.discountPrice}>
            &#8377;
            {(Number(itemDetails.discount) / 100) *
              Number(itemDetails.actualPrice)}
          </span>
        </div>
      </div>
    </>
  );
};
