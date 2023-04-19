import { useState } from "react";
import ProductRow from "./ProductRow";
import AddNewProduct from "./addNewProduct";

const AdminPage = () => {
  const [products, setProducts] = useState([
    {
      id: 234,
      title: "prod1",
      price: 90,
    },
    {
      id: 23465,
      title: "prod2",
      price: 58,
    },
    {
      id: 23344,
      title: "prod3",
      price: 44,
    },
    {
      id: 231124,
      title: "prod4",
      price: 22,
    },
  ]);
  return (
    <div className="container">
      <AddNewProduct />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.length > 0 &&
            products.map((item) => {
              return <ProductRow key={item.id} product={item} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
