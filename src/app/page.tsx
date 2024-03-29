import * as motion from "@/components/animations/motion";
import { ABOUT, TECHNOLOGIES } from "@/constants/profile";
import { Terminal, TechnologyBadge } from "@/components/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domenic Labbate",
  description:
    "Portfolio and blog website built by Domenic Labbate. I am a Computer Engineer passionate about learning and writing documentation.",
};

const Home = () => {
  return (
    <div className="bg-primary flex w-full flex-1 flex-col items-center justify-center">
      <Terminal text={ABOUT} />
      <motion.ul
        className="m-4 flex w-full max-w-[50rem] flex-wrap items-center justify-center gap-2"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        initial={"initial"}
        animate={"show"}
      >
        {TECHNOLOGIES.map((technology) => (
          <motion.li
            key={technology}
            variants={{
              initial: { opacity: 0, scale: 0 },
              show: { opacity: 1, scale: 1 },
            }}
          >
            <TechnologyBadge type={technology} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Home;
