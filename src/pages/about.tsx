import React from "react";
import Intro, { Mission, Slogan, Vision } from "~/components/Intro/Intro";

export default function about() {
  return (
    <>
      {/* <Head>
        <title>Website MVP</title>
        <meta name="description" content="Just a MVP for CYC website" />
        <link rel="icon" href="/images/cyc_logo.png" />
      </Head> */}
      <div className="mb-8 flex flex-col items-center">
        <Intro></Intro>
        <Vision></Vision>
        <Mission></Mission>
        <Slogan></Slogan>
      </div>
    </>
    // <>
    //   <main className="flex flex-col">
    //     <div className="flex h-screen flex-col items-center">
    //       <Intro></Intro>
    //       <Vision></Vision>
    //       <Mission></Mission>
    //       <Slogan></Slogan>
    //     </div>
    //   </main>
    // </>
  );
}
