import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginButton: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <button
      className={`duration-250 hidden px-5 pb-8 text-lg transition-all 
            hover:border-b-4 md:block md:border-[#09203f] md:py-8 
            md:text-3xl md:font-bold md:text-[#09203f] md:transition-none`}
      onClick={sessionData ? () => void signOut() : () => void signIn()}
    >
      {sessionData ? "Logout" : "Login"}
    </button>
  );
};

interface NavigationProps {
  mdDisplay?: boolean;
  handleClose?: () => void;
}

export default function Navigation({
  mdDisplay = true,
  handleClose,
}: NavigationProps) {
  const router = useRouter();
  const routes = ["About", "Media", "Contact", "Connect"];

  return (
    <div
      className={
        mdDisplay ? "md:mt-12 md:flex md:flex-col md:items-center" : "md:hidden"
      }
    >
      <LoginButton />
      {routes.map((route, index) => {
        return (
          <Link
            key={index}
            href={`/${route.toLowerCase().replace(/\s/g, "")}`}
            className={`duration-250 px-5 pb-8 text-lg transition-all hover:border-b-4 
            ${
              router.pathname === `/${route.toLowerCase().replace(/\s/g, "")}`
                ? "border-b-4"
                : ""
            }
            md:border-[#09203f] md:py-8 md:text-3xl md:font-bold 
            md:text-[#09203f] md:transition-none`}
            onClick={handleClose}
          >
            {route}
          </Link>
        );
      })}
    </div>
  );
}
