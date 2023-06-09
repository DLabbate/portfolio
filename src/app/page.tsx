// "use client";
import { Label, Technologies } from "@/components/technology-badge";
import Terminal from "@/components/terminal";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center bg-primary w-full">
        <Terminal />
        {/* <motion.ul
          className="m-4 flex w-full max-w-[55rem] flex-wrap items-center justify-center gap-2"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial={"initial"}
          animate={"show"}
        >
          {Technologies.map((label) => (
            <motion.li
              key={label}
              variants={{
                initial: { opacity: 0, scale: 0.5 },
                show: { opacity: 1, scale: 1 },
              }}
            >
              <Label type={label} />
            </motion.li>
          ))}
        </motion.ul> */}
      </div>
    </>
  );
};

export default Home;
