import { useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../ui/LoadingSpinner";

function Crew() {
  const [crewIndex, setCrewIndex] = useState<0 | 1 | 2 | 3>(0);

  const { data, isLoading } = useQuery({
    queryKey: ["apiData"],
    queryFn: fetchData,
  });

  function handleClick(value: 0 | 1 | 2 | 3) {
    setCrewIndex(value);
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      if (crewIndex < 3) {
        setCrewIndex((index) => (index + 1) as 0 | 1 | 2);
      } else {
        setCrewIndex(0);
      }
    }, 5 * 1000);

    return () => clearInterval(interval);
  });

  if (isLoading) return <LoadingSpinner />;

  const crew = data.crew;
  console.log(crew);
  const name = crew[crewIndex].name;
  const role = crew[crewIndex].role;
  const bio = crew[crewIndex].bio;
  const image = crew[crewIndex].images.png;

  return (
    <section className="p-6 text-center">
      <h1 className="font-Barlow text-White flex items-center justify-center gap-6">
        <span className="text-base font-bold opacity-25">02</span> Meet your
        crew
      </h1>

      <h2 className="mt-16 font-normal uppercase">
        <span className="text-lg leading-5 opacity-50">{role}</span>
        <span className="mt-2 block text-2xl leading-7">{name}</span>
      </h2>

      <p className="text-Blue-300 font-Barlow mt-6 min-h-[164px] text-[0.94rem] leading-7 font-normal">
        {bio}
      </p>

      <nav className="mt-6 flex items-center justify-center gap-4">
        {Array.from({ length: 4 }, (_, index) => (
          <button
            className="block h-2.5 w-2.5 cursor-pointer rounded-full bg-white opacity-15"
            style={{ opacity: crewIndex === index ? "1" : "" }}
            key={index}
            onClick={() => handleClick(index as 0 | 1 | 2 | 3)}
          ></button>
        ))}
      </nav>

      <img src={image} alt={role + " " + name} className="mt-8 px-7" />
    </section>
  );
}

export default Crew;
