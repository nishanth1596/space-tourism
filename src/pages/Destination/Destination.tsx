import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../api/fetchData";
import LoadingSpinner from "../../ui/LoadingSpinner";

type DestinationProps = {
  description: string;
  distance: string;
  images: {
    png: string;
    webp: string;
  };
  name: string;
  travel: string;
};

function Destination() {
  const [imageIndex, setImageIndex] = useState<0 | 1 | 2 | 3>(0);

  const { data, isLoading } = useQuery({
    queryKey: ["apiData"],
    queryFn: fetchData,
  });

  if (isLoading) return <LoadingSpinner />;

  const destinations = data.destinations;
  const image = destinations[imageIndex].images.webp;
  console.log(destinations);

  return (
    <section className="p-6 text-center">
      <h1 className="font-Barlow text-White flex items-center justify-center gap-6">
        <span className="text-base font-bold opacity-25">01</span> pick your
        destination
      </h1>

      <img
        src={image}
        alt={`${destinations[imageIndex].name} captured in the space`}
        className="mx-auto my-[50.5px] w-[150px]"
      />

      <nav className="flex justify-around pt-8">
        {destinations.map((item: DestinationProps, i: number) => (
          <button
            onClick={() => setImageIndex(i as 0 | 1 | 2 | 3)}
            className="text-Blue-300 font-Barlow text-sm leading-4 font-normal tracking-[15%] uppercase"
            key={i}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </section>
  );
}

export default Destination;
