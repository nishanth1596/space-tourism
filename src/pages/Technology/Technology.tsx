import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";
import LoadingSpinner from "../../ui/LoadingSpinner";

function Technology() {
  const [techIndex, setTechIndex] = useState<0 | 1 | 2>(0);

  const { data, isLoading } = useQuery({
    queryKey: ["apiData"],
    queryFn: fetchData,
  });

  useEffect(() => {
    const interval = setTimeout(() => {
      if (techIndex < 2) {
        setTechIndex((index) => (index + 1) as 0 | 1);
      } else {
        setTechIndex(0);
      }
    }, 5 * 1000);

    return () => clearInterval(interval);
  });

  function handleClick(value: 0 | 1 | 2) {
    setTechIndex(value);
  }

  if (isLoading) return <LoadingSpinner />;
  const technology = data.technology[techIndex];
  const image = technology.images.portrait;
  const name = technology.name;
  const description = technology.description;

  return (
    <section className="backgroundDestinationImage backgroundTechnologyImage text-center">
      <h1 className="font-Barlow text-White flex items-center justify-center gap-6 p-6">
        <span className="text-base font-bold opacity-25">03</span> Space Launch
        101
      </h1>

      <img src={image} alt="" className="mt-16 max-h-[258px] w-full" />

      <nav className="mt-6 flex items-center justify-center gap-4">
        {Array.from({ length: 3 }, (_, index) => (
          <button
            className="text-Blue-900 block cursor-pointer rounded-full bg-white px-4 py-2.5 text-lg leading-5 font-normal opacity-15"
            style={{ opacity: techIndex === index ? "1" : "" }}
            key={index}
            onClick={() => handleClick(index as 0 | 1 | 2)}
          >
            {index + 1}
          </button>
        ))}
      </nav>

      <h2 className="mt-16 font-normal uppercase">
        <span className="text-lg leading-5 opacity-50">The Terminology...</span>
        <span className="mt-2 block text-2xl leading-7">{name}</span>
      </h2>

      <p className="text-Blue-300 font-Barlow mt-6 min-h-[164px] px-6 pb-12 text-[0.94rem] leading-7 font-normal">
        {description}
      </p>
    </section>
  );
}

export default Technology;
