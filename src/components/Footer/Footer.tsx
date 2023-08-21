import React from "react";

export default function Footer() {
  return (
    <div
      className="abosolute bottom-0 flex w-full 
    bg-transparent px-16 pb-16 pt-5 
    md:flex-wrap md:justify-center"
    > 
      <div className="flex w-2/5 flex-col md:w-full">
        <div className="text-4xl">We Are Chinese Youth Church</div>
        <div
          className="mb-4 mt-7 flex
        items-center justify-between border border-[#cdccd4] p-4 text-lg"
        >
          <div>Friendship Website</div>
          <a href="https://greenroom-yannisleng.vercel.app/" target="_blank">
            +
          </a>
        </div>
        <div className="cursor-pointer text-lg">Terms & Conditions</div>
      </div>

      <div className="ml-10 mt-5 flex w-3/5 flex-col border-t md:ml-0 md:mt-12 md:w-full">
        <div className="mt-12 flex">
          <a href="https://www.facebook.com/FGACYC/" target="_blank">
            <img
              src="/icons/facebook.svg"
              alt="Facebook Icon"
              className="mr-7 h-5 w-5"
            />
          </a>
          <a href="https://www.youtube.com/user/fgacyc" target="_blank">
            <img
              src="/icons/youtube.svg"
              alt="Youtube Icon"
              className="mr-7 h-5 w-5"
            />
          </a>
          <a href="https://www.instagram.com/fgacyc/" target="_blank">
            <img
              src="/icons/instagram.svg"
              alt="Instagram Icon"
              className="h-5 w-5"
            />
          </a>
        </div>
        <div className="mt-5">
          © 2023 FGA CYC Tech Team. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
