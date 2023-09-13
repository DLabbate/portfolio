type Props = {
  label: string;
};

const Filter = ({ label }: Props) => {
  return (
    <div className="flex h-10 w-auto cursor-pointer items-center rounded-full border border-primary-200 bg-white px-3 py-2 text-sm transition hover:bg-primary-100 dark:border-primary-800 dark:bg-primary-900 dark:hover:bg-primary-800">
      {label}
    </div>
  );
};

export default Filter;
