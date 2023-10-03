import clsx from "clsx";
import React from "react";
import { Icon, Info, AlertTriangle } from "react-feather";

type Type = "info" | "warning";

type Variant = {
  className: string;
  Icon: Icon;
};

const VARIANTS: Record<Type, Variant> = {
  info: {
    className: " text-blue-500 border-blue-500 bg-blue-500/10",
    Icon: Info,
  },
  warning: {
    className: " text-yellow-500 border-yellow-500 bg-yellow-500/10",
    Icon: AlertTriangle,
  },
};

type Props = {
  type: Type;
  title?: string;
  text: string;
};

const Alert = ({ type, title, text }: Props) => {
  const { className, Icon } = VARIANTS[type];

  return (
    <div
      className={clsx(
        "mb-2 mt-2 grid w-full grid-cols-[min-content_1fr] items-center gap-2 rounded-md border p-4",
        className
      )}
    >
      <Icon size={24} strokeWidth={2} className="mr-2" />
      {title && <div className="col-start-2 font-bold">{title}</div>}
      <span className="col-start-2">{text}</span>
    </div>
  );
};

export default Alert;
