import * as motion from "@/components/animations/motion";
import { TechnologyBadge, Technologies } from "@/components/technology-badge";
import Terminal from "@/components/terminal";
import { ABOUT } from "@/constants/profile";

const Home = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center bg-primary">
      <Terminal text={ABOUT} />
      <motion.ul
        className="m-4 flex w-full max-w-[55rem] flex-wrap items-center justify-center gap-2"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        initial={"initial"}
        animate={"show"}
      >
        {Technologies.map((technology) => (
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
