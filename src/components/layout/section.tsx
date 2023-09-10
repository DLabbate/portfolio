import * as motion from "../animations/motion";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;

const Section = ({ title, children }: Props) => {
  return (
    <motion.section
      className="flex w-full flex-col items-center"
      initial={"hidden"}
      whileInView={"visible"}
      variants={VARIANTS}
      transition={{ staggerChildren: 0.25 }}
      viewport={{ once: true }}
    >
      <motion.h1 className="mb-8 text-3xl font-bold" variants={VARIANTS}>
        {title}
      </motion.h1>
      <motion.div variants={VARIANTS} className="w-full">
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
