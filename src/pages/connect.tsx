import React from "react";
import Action from "~/components/Action/Action";

export default function connect() {
  const options = [
    {
      title: "参与小组",
      url: "cg",
    },
    {
      title: "参与服事",
      url: "ministry",
    },
    {
      title: "洗礼",
      url: "baptism",
    },
  ];
  return (
    <>
      <div className="mb-8 mt-8 flex flex-col items-center">
        {options.map((opt, index) => {
          return <Action key={index} title={opt.title} url={opt.url} />;
        })}
      </div>
    </>
  );
}
