import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface ActionProps {
  title: string;
  url: string;
}

export default function Action(props: ActionProps) {
  return (
    <>
      <div className="relative mb-8 mt-8 flex w-2/3 items-center rounded-lg bg-white text-black">
        <div className="mb-8 ms-8 mt-8 text-4xl">{props.title}</div>

        <AiOutlineArrowRight className="absolute right-0 me-10 text-4xl"></AiOutlineArrowRight>
      </div>
    </>
  );
}
