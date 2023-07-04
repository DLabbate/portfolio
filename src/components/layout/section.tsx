type Props = {
  title: string;
  children?: React.ReactNode;
};

const Section = ({ title, children }: Props) => {
  return (
    <section className="flex w-full flex-col items-center">
      <h1 className="mb-8 text-3xl">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
