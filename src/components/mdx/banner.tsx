import React from "react";
import { Info } from "react-feather";

type Props = {
  type: "info" | "warning";
  title?: string;
  text: string;
};

const Banner = ({ type, title, text }: Props) => {
  return (
    <div className="mb-2 mt-2 grid w-full grid-cols-[min-content_1fr] items-center gap-2 rounded-md border border-blue-500 bg-blue-500/10 p-4 text-blue-500">
      <Info size={24} strokeWidth={2} className="mr-2" />
      {title && <div className="col-start-2 font-bold">{title}</div>}
      <span className="col-start-2">{text}</span>
    </div>
  );
};

export default Banner;
