import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const routes = ["About", "Media", "Contact", "Connect"];

  return (
    <div>
      {routes.map((route, index) => {
        return (
          <Link
            key={index}
            href={`/${route.toLowerCase().replace(/\s/g, "")}`}
            className={`duration-250 px-5 pb-8 text-lg transition-all hover:border-b-4 ${
              router.pathname === `/${route.toLowerCase().replace(/\s/g, "")}`
                ? "border-b-4"
                : ""
            }`}
          >
            {route}
          </Link>
        );
      })}
    </div>
  );
}
