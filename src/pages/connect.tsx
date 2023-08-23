import React from "react";
import Action from "~/components/Action/Action";

export default function connect() {
  const options = [
    {
      title: "参与小组",
      url: "To be develop",
    },
    {
      title: "参与服事",
      url: "To be develop",
    },
    {
      title: "洗礼",
      url: "To be develop",
    },
  ];
  return (
    <>
      <div className="mb-8 mt-8 flex flex-col items-center">
        {options.map((opt, index) => {
          return <Action title={opt.title} url={opt.url}></Action>;
        })}
      </div>
    </>
  );
}
