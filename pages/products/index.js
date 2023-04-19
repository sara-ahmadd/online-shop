import Image from "next/image";
import Link from "next/link";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 23422,
    title: "prod1",
    price: 90,
    description:
      "loreAd culpa ea cupidatat consequat ipsum elit labore amet ut ex in. Aliqua aliqua excepteur sunt id ut cupidatat aliqua officia eiusmod officia ullamco. Ut veniam irure proident cillum commodo.",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 234695,
    title: "prod2",
    price: 58,
    description:
      "loreSint do exercitation et exercitation. Culpa ut occaecat laboris do irure veniam minim ipsum qui voluptate et. Velit culpa reprehenderit ex aliquip eiusmod dolor deserunt voluptate.",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 233434,
    title: "prod3",
    price: 44,
    description:
      "loreDolor exercitation laboris aliquip dolore fugiat incididunt ex nostrud sint deserunt tempor incididunt enim. Aliqua amet consectetur nulla eiusmod proident laboris consequat. Aute et consectetur fugiat cupidatat commodo excepteur. Ullamco sint labore culpa reprehenderit ipsum Lorem excepteur ipsum incididunt cillum velit ut non proident. Est aliqua aute eiusmod do non.",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2314124,
    title: "prod4",
    price: 22,
    description:
      "loreDuis anim eiusmod voluptate ex ea fugiat tempor veniam. Aliqua veniam aliquip reprehenderit excepteur tempor enim nisi deserunt. Enim enim anim cillum velit id occaecat aute sunt. Esse deserunt adipisicing minim ut in labore pariatur ea incididunt eu elit exercitation officia. Consequat incididunt ullamco ex nulla. Eu labore do veniam enim quis.",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2311264,
    title: "prod4",
    price: 22,
    description:
      "loreDuis anim eiusmod voluptate ex ea fugiat tempor veniam. Aliqua veniam aliquip reprehenderit excepteur tempor enim nisi deserunt. Enim enim anim cillum velit id occaecat aute sunt. Esse deserunt adipisicing minim ut in labore pariatur ea incididunt eu elit exercitation officia. Consequat incididunt ullamco ex nulla. Eu labore do veniam enim quis.",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 231184524,
    title: "prod4",
    price: 22,
    description:
      "loreDuis anim eiusmod voluptate ex ea fugiat tempor veniam. Aliqua veniam aliquip reprehenderit excepteur tempor enim nisi deserunt. Enim enim anim cillum velit id occaecat aute sunt. Esse deserunt adipisicing minim ut in labore pariatur ea incididunt eu elit exercitation officia. Consequat incididunt ullamco ex nulla. Eu labore do veniam enim quis.",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2311299674,
    title: "prod4",
    price: 22,
    description:
      "loreDuis anim eiusmod voluptate ex ea fugiat tempor veniam. Aliqua veniam aliquip reprehenderit excepteur tempor enim nisi deserunt. Enim enim anim cillum velit id occaecat aute sunt. Esse deserunt adipisicing minim ut in labore pariatur ea incididunt eu elit exercitation officia. Consequat incididunt ullamco ex nulla. Eu labore do veniam enim quis.",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];
function Products(props) {
  return (
    <div className="container">
      <h2> All Products</h2>
      <div className="row ">
        {props.products &&
          props.products.length > 0 &&
          props.products.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </div>
    </div>
  );
}
export default Products;

export function getStaticProps() {
  return {
    props: {
      products,
    },
    revalidate: 200,
  };
}
