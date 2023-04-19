import React from "react";
import { Image } from "react-bootstrap";

function Carousel({ images }) {
  console.log(images);
  return (
    <div>
      {images.map((item) => {
        return (
          <Image
            key={item.id}
            className="mx-auto my-0"
            width={200}
            height={200}
            src={item.name}
            alt="img"
          />
        );
      })}
    </div>
  );
}

export default Carousel;
