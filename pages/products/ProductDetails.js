import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
import { Image } from "react-bootstrap";

function ProductDetails({ product }) {
  const { image, title, description, price } = product;
  return (
    <div className="card m-3 p-3">
      <div className={` row g-0`}>
        <div className={`col-md-4`}>
          <Image src={image} className={`img-fluid rounded-start`} alt="img" />
        </div>
        <div className={`col-md-8 px-4`}>
          <p className={`card-title`}>{title}</p>
          <p className={`card-text`}>${price}</p>
          <p className={`card-text`}>{description}</p>
          <button
            type="button"
            className="btn btn-info d-flex align-items-center gap-3"
          >
            <BsCartPlus />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
