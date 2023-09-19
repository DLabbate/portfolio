import React from "react";

type Props = {
  views: number;
};

const ViewCounter = ({ views }: Props) => {
  return (
    <span className="inline-block w-auto whitespace-nowrap rounded-sm bg-primary-200 p-1 font-mono dark:bg-primary-800">
      {views.toLocaleString("en-US")} Views
    </span>
  );
};

export default ViewCounter;
