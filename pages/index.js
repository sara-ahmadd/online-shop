import Link from "next/link";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Manipulation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import Carousel from "../src/components/Carousel";
import Head from "next/head";

function HomePage() {
  const images = [
    {
      id: 2373,
      name: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 23453,
      name: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 233,
      name: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div>
      <Head>
        <title>OnlineShop</title>
        <meta
          name="description"
          content="Ecommerce application created with nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel images={images} />
      <div className="d-flex flex-column align-items-center">
        <h3 className="text-secondary w-75 text-center">
          If you’re looking to buy something special, shop here. When life gives
          you lemons, make lemonade. When life gives you shopping carts, push
          them back to the store.
        </h3>
        <button type="button" className="btn btn-warning">
          <Link href="/products">Products</Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
