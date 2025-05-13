import { useState } from "react";
import NavBar from "./NavBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-6">
      <button aria-label="click to go home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          preserveAspectRatio="xMidYMid meet"
          className="h-10 w-10"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </button>

      {isOpen ? (
        <div className="bg-Blue-900/15 fixed top-0 right-0 bottom-0 w-[67.7%] backdrop-blur-3xl">
          <button
            className="my-8 mr-6 ml-auto block"
            aria-label="click to close menu"
            onClick={() => setIsOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </button>

          <NavBar />
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} aria-label="Click to open menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </button>
      )}
    </div>
  );
}

export default Header;
