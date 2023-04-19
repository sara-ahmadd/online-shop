import Link from "next/link";
import classes from "./index.module.css";
import { Image } from "react-bootstrap";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const { id, title, price, image, description } = product;
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/products/${id}`);
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 g-2 d-flex align-items-stretch">
      <div className="card">
        <Image src={image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">${price}</h5>
          <p className="card-text">{description}</p>
        </div>
        <button
          onClick={handleNavigation}
          type="button"
          className="btn btn-info w-75 mx-auto my-0 mb-2"
        >
          <span>Details</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
