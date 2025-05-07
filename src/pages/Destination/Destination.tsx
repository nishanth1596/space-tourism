import moonImg from "../../assets/destination/image-moon.webp";
import marsImg from "../../assets/destination/image-mars.webp";
import europaImg from "../../assets/destination/image-europa.png";
import titanImg from "../../assets/destination/image-titan.png";
import { useState } from "react";

const images = [
  [moonImg, "Moon"],
  [marsImg, "Mars"],
  [europaImg, "Europa"],
  [titanImg, "Titan"],
];

function Destination() {
  const [imageIndex, setImageIndex] = useState<0 | 1 | 2 | 3>(0);

  return (
    <section className="p-6 text-center">
      <h1 className="font-Barlow text-White flex items-center justify-center gap-6">
        <span className="text-base font-bold opacity-25">01</span> pick your
        destination
      </h1>

      <img
        src={images[imageIndex][0]}
        alt={`${images[imageIndex][1]} captured in the space`}
        className="mx-auto my-[50.5px] w-[150px]"
      />

      <nav className="flex justify-around pt-8">
        {images.map((item, i) => (
          <button
            onClick={() => setImageIndex(i as 0 | 1 | 2 | 3)}
            className="text-Blue-300 font-Barlow text-sm leading-4 font-normal tracking-[15%] uppercase"
            key={i}
          >
            {item[1]}
          </button>
        ))}
      </nav>
    </section>
  );
}

export default Destination;
