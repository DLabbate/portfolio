import { MouseEventHandler } from "react";

export type FilterState = "active" | "disabled" | "neutral";

type Props = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  state: FilterState;
};

const VARIANTS: Record<FilterState, string> = {
  active:
    "cursor-pointer bg-primary-100 dark:bg-primary-800 text-light dark:text-dark",
  disabled:
    "cursor-not-allowed text-light-disabled dark:text-dark-disabled border-primary-100 dark:border-primary-400 dark:border-primary-900",
  neutral:
    "cursor-pointer bg-white bg-primary-900 text-light-medium dark:text-dark-medium bg-white hover:bg-primary-100 dark:hover:bg-primary-800 dark:bg-primary-900",
};
// const Filter = ({ label, onClick, active = false }: Props) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex h-10 w-auto cursor-pointer items-center rounded-full border border-primary-200 bg-white px-3 py-2 text-sm transition hover:bg-primary-100 disabled:cursor-not-allowed dark:border-primary-800 dark:bg-primary-900 dark:hover:bg-primary-800"
//     >
//       {label}
//     </button>
//   );
// };

const Filter = ({ label, onClick, state }: Props) => {
  return (
    <button
      onClick={state === "disabled" ? () => {} : onClick}
      className={`flex h-10 w-auto items-center rounded-full border border-primary-200 px-3 py-2 text-sm transition dark:border-primary-800 ${VARIANTS[state]}`}
    >
      {label}
    </button>
  );
};

export default Filter;
