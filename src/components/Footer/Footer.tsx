import React from "react";

export default function Footer() {
  return (
    <div className="abosolute bottom-0 flex bg-transparent px-16 w-full pt-5 pb-16">
      <div className="flex flex-col w-2/5">
        <div className="text-4xl">We Are Chinese Youth Church</div>
        <div
          className="mb-4 mt-7 flex
        items-center justify-between border border-[#cdccd4] p-4 text-lg"
        >
          <div>Friendship Website</div>
          <a href="https://fgacyc.com/church/" target="_blank">+</a>
        </div>
        <div className="text-lg cursor-pointer">Terms & Conditions</div>
      </div>

      <div className="flex flex-col border-t w-3/5 mt-5 ml-10">
        <div className="flex mt-12">
            <a href="https://www.facebook.com/FGACYC/" target="_blank">
            <img src="/icons/facebook.svg" alt="Facebook Icon" className="w-5 h-5 mr-7" />
            </a>
            <a href="https://www.youtube.com/user/fgacyc" target="_blank">
            <img src="/icons/youtube.svg" alt="Youtube Icon" className="w-5 h-5 mr-7" />
            </a>
            <a href="https://www.instagram.com/fgacyc/" target="_blank">
            <img src="/icons/instagram.svg" alt="Instagram Icon" className="w-5 h-5" />
            </a>
        </div>
        <div className="mt-5">© 2023 FGA CYC Tech Team. All Rights Reserved</div>
      </div>
    </div>
  );
}
