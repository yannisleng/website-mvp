import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";

const CYCLogo: React.FC = () => {
  return (
    <Link href="/">
      <img src="/images/cyc_logo_white.png" alt="CYC Logo" className="mr-20" />
    </Link>
  );
};

const SearchBar: React.FC = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleElements = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          className="h-7 w-full cursor-pointer border-none 
          bg-transparent pl-2 outline-none"
          onBlur={toggleElements}
          autoFocus
        />
      ) : (
        <img
          src="/icons/search.svg"
          alt="Search Icon"
          className="h-7 w-7 cursor-pointer"
          onClick={toggleElements}
        />
      )}
    </div>
  );
};

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const [hovered, setHovered] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`sticky top-0 z-[999] flex 
      w-full items-center justify-between 
      bg-transparent px-7 py-5 
      hover:bg-black/40 hover:duration-700 ${
        isTop || hovered ? "border-b border-white/30" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <CYCLogo />
        {(isTop || hovered) && <Navigation />}
      </div>
      <div className="flex">
        <SearchBar />
        <img
          src="/icons/login.svg"
          alt="Login Icon"
          className="ml-5 h-7 w-7 cursor-pointer"
        />
      </div>
    </div>
  );
}
