import { useParams } from "react-router-dom";
import { productDetails } from "../dummy";
import classes from "./ProductListing.module.css";

export const ProductListing = () => {
  const { id } = useParams();
  const product = productDetails.find((item) => {
    return id === item.id;
  });
  return (
    <div className={classes.container}>
      <img
        src={product?.img}
        alt={product?.name}
        className={classes.imgStyle}
      />
      <div className={classes.rightContainer}>
        <span className={classes.heading}>{product?.name}</span>
        <div className={classes.priceContainer}>
          <div className={classes.priceTag}>
            <span className={classes.rupeeStyle}>&#8377;</span>
            <span>{product?.actualPrice}</span>
          </div>
          <span className={classes.discountPrice}>
            &#8377;
            {(Number(product?.discount) / 100) * Number(product?.actualPrice)}
          </span>
        </div><br/>
        <span className={classes.subHeading}>Specifications</span><br /><br />
        <span className={classes.description}>{product?.productSpecifications}</span>
      </div>
    </div>
  );
};
