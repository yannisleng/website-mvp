import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
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

const LoginButton: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <img
      src={sessionData?.user?.image ?? "/icons/user.svg"}
      alt={sessionData ? "Profile Picture" : "Login Icon"}
      className="ml-5 h-8 w-8 cursor-pointer rounded-full md:hidden"
      onClick={sessionData ? () => void signOut() : () => void signIn()}
    />
  );
};

const SideNavigation: React.FC = () => {
  const [isCrossIcon, setIsCrossIcon] = useState(false);

  const toggleIcon = () => {
    setIsCrossIcon((prevIsCrossIcon) => !prevIsCrossIcon);
  };

  return (
    <>
      <img
        src={isCrossIcon ? "/icons/cross.svg" : "/icons/navigation.svg"}
        alt={isCrossIcon ? "Close Icon" : "Navigation Icon"}
        className="ml-5 hidden h-7 w-7 cursor-pointer md:block"
        onClick={toggleIcon}
      />
      {isCrossIcon && (
        <div
          className="glass absolute left-0 top-[90px] w-screen bg-white
          flex items-center justify-center"
          style={{ height: "calc(100vh - 90px)" }}
        >
          <Navigation handleClose={toggleIcon} />
        </div>
      )}
    </>
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
        {(isTop || hovered) && <Navigation mdDisplay={false} />}
      </div>
      <div className="flex items-center">
        <SearchBar />
        <LoginButton />
        <SideNavigation />
      </div>
    </div>
  );
}
