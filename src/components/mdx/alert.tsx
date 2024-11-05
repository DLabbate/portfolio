import clsx from "clsx";
import React from "react";
import { Icon, Info, AlertTriangle, XCircle, CheckCircle } from "react-feather";

type Type = "info" | "warning" | "error" | "correct";

type Variant = {
  className: string;
  icon: Icon;
};

const VARIANTS: Record<Type, Variant> = {
  info: {
    className: "text-blue-500 border-blue-500 bg-blue-500/10",
    icon: Info,
  },
  warning: {
    className: "text-yellow-600 border-yellow-600 bg-yellow-500/10",
    icon: AlertTriangle,
  },
  error: {
    className: "text-red-500 border-red-500 bg-red-500/10",
    icon: XCircle,
  },
  correct: {
    className: "text-green-500 border-green-500 bg-green-500/10",
    icon: CheckCircle,
  },
};

type Props = {
  type: Type;
  title?: string;
  text: string;
};

const Alert = ({ type, title, text }: Props) => {
  const { className, icon: Icon } = VARIANTS[type];

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
