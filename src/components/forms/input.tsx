type Props = {
  placeholder: string;
};

const Input = ({ placeholder }: Props) => {
  return (
    <input
      className="w-full rounded-lg border border-primary-200 p-2 ring-inset focus:outline-0 focus:ring-2 focus:ring-primary-100 dark:border-primary-800 dark:bg-primary-900 dark:focus:ring-primary-800"
      placeholder={placeholder}
    />
  );
};

export default Input;
