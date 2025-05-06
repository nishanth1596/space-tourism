function Home() {
  return (
    <section className="backgroundEarthImage p-6">
      <h1 className="font-Barlow text-Blue-300 text-center">
        So, you want to travel to{" "}
        <span className="text-White mt-6 block text-[80px] leading-[91.7px] tracking-[0px]">
          space
        </span>
      </h1>

      <p className="text-Blue-300 font-Barlow mt-6 text-center text-[0.94rem] leading-[1.8] font-normal">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <button className="bg-White text-Blue-900 mx-auto my-[119px] block aspect-square rounded-full px-[33.5px] py-[61.5px] text-lg leading-5 font-normal uppercase">
        Explore
      </button>
    </section>
  );
}

export default Home;
