import { useRef, useState } from "react";
import classes from "./addNewProduct.module.css";

const AddNewProduct = () => {
  const [showList, setShowList] = useState(false);
  const titleRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const titleInput = titleRef.current.value;
    const imageInput = imageRef.current.value;
    const priceInput = priceRef.current.value;
    const descriptionInput = descriptionRef.current.value;

    const productData = {
      title: titleInput,
      image: imageInput,
      price: priceInput,
      description: descriptionInput,
    };
  };

  const displayForm = () => {
    setShowList(!showList);
  };
  return (
    <div className="p-2">
      <button
        type="button"
        className="btn btn-warning mb-3"
        onClick={displayForm}
      >
        Add New Product
      </button>
      {showList && (
        <form className={`${classes.addList}`} onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="prodTitle" className="form-label">
              Product Title
            </label>
            <input
              ref={titleRef}
              type="text"
              required
              className="form-control"
              id="prodTitle"
              placeholder="Product Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prodPrice" className="form-label">
              Product Image
            </label>
            <input
              ref={imageRef}
              required
              type="url"
              className="form-control"
              id="prodImg"
              placeholder="Product Image URL"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prodPrice" className="form-label">
              Product Price
            </label>
            <input
              ref={priceRef}
              type="number"
              required
              className="form-control"
              id="prodPrice"
              placeholder="Product Price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prodDescription" className="form-label">
              Description
            </label>
            <textarea
              ref={descriptionRef}
              required
              type="number"
              className="form-control"
              id="prodDescription"
              placeholder="Description"
            />
          </div>
          <button type="button" className="btn btn-info">
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default AddNewProduct;
