const ProductRow = ({ product }) => {
  const { id, title, price } = product;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{price} $</td>
      <td>
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-secondary">
            View
          </button>
          <button type="button" className="btn btn-success">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
