import { useRouter } from "next/router";
import ProductDetails from "./ProductDetails";

function ProductDetailsPage(props) {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <ProductDetails product={props.product} />
    </div>
  );
}

export default ProductDetailsPage;

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          productId: "234695",
        },
      },
      {
        params: {
          productId: "23422",
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  const requestedId = context.params.productId;
  return {
    props: {
      product: {
        id: requestedId,
        title: "prod4",
        price: 22,
        description:
          "loreDuis anim eiusmod voluptate ex ea fugiat tempor veniam. Aliqua veniam aliquip reprehenderit excepteur tempor enim nisi deserunt. Enim enim anim cillum velit id occaecat aute sunt. Esse deserunt adipisicing minim ut in labore pariatur ea incididunt eu elit exercitation officia. Consequat incididunt ullamco ex nulla. Eu labore do veniam enim quis.",
        image:
          "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    revalidate: 200,
  };
}
