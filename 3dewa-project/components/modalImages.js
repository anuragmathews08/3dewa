import { useState, useRef } from "react";
import Image from "next/image";
import Image1 from "public/assets/image1.jpg";

export const ModalImages = () => {
  const [images, setImages] = useState(new Array(6).fill(""));
  const ref = useRef();

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-80">
        <Image
          src={Image1}
          alt="Modal Image"
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="relative flex border-t border-palette-lighter">
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
        >
          {images.map((imgItem, index) => (
            <button
              key={index}
              className="relative w-40 h-32 flex-shrink-0 rounded-sm "
            >
              <Image
                src={Image1}
                alt="Modal Image list"
                layout="fill"
                className=""
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
