import React from "react";

export default function VideoPnW() {
  return (
    <>
      <div className="relative flex h-screen flex-col items-center justify-center">
        <video autoPlay loop muted className="w-4/5">
          <source src="/videos/pnw.mp4"></source>
        </video>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white">
          <h1>FGA Worship</h1>
        </div>
      </div>
    </>
  );
}
