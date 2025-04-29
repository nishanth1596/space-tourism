import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="mx-8 mt-12 flex flex-col space-y-8">
      <Link
        to="/"
        className="font-Barlow flex items-center gap-3 leading-[19.2px] font-normal tracking-[2px] uppercase"
      >
        <span className="min-w-[18px] text-right font-bold">00</span> Home
      </Link>
      <Link
        to={"/destination"}
        className="font-Barlow flex items-center gap-3 leading-[19.2px] font-normal tracking-[2px] uppercase"
      >
        <span className="min-w-[18px] text-right font-bold">01</span>{" "}
        destination
      </Link>
      <Link
        to={"/crew"}
        className="font-Barlow flex items-center gap-3 leading-[19.2px] font-normal tracking-[2px] uppercase"
      >
        <span className="min-w-[18px] text-right font-bold">02</span> crew
      </Link>
      <Link
        to={"technology"}
        className="font-Barlow flex items-center gap-3 leading-[19.2px] font-normal tracking-[2px] uppercase"
      >
        <span className="min-w-[18px] text-right font-bold">03</span> technology
      </Link>
    </div>
  );
}

export default NavBar;
