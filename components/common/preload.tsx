import React from "react";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import Design from "../../assets/website-design.svg";
import Development from "../../assets/web-development.svg";
import Deployment from "../../assets/2715620-200.png"

const Preload = () => {
  const [currentHeight, setCurrentHeight] = React.useState<number>(0);

  React.useEffect(() => {
    setCurrentHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setCurrentHeight(window.innerHeight);
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 1, scale: 1, zIndex: 999, position: "fixed" }}
        animate={{
          opacity: 0,
          scale: 0,
          zIndex: -999,
          display: "none",
          translateX: -1000,
        }}
        transition={{ delay: 3, duration: 0.7 }}
        style={{ fontFamily: "Helvetica", height: currentHeight }}
        className="w-full bg-white top-0 left-0 flex justify-center flex-col items-center"
      >
        <motion.div
          initial={{ translateX: 0, opacity: 1, z: 999 }}
          animate={{ translateX: -1000, opacity: 0, z: -999 }}
          transition={{ delay: 3, duration: 0.7 }}
          className=" absolute top-0 bg-white left-0 w-full flex-col h-full flex justify-center items-center"
        >
          <Image src={Design} width={Design.width - 200} height={Design.height - 200} />
          <motion.h1
            // initial={{ opacity: 1, y: 0 }}
            // animate={{ opacity: 0, y: 0 }}
            // transition={{ delay: 2.4, duration: 0.5 }}
            className="text-5xl text-black tracking-widest"
          >
            {"Incridable Design".split("").map((char, index) => (
              <motion.span
                key={uuid()}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: 3,
                  opacity: 0,
                  transition: {
                    delay: parseFloat(`2.${index}`),
                    duration: 0.3,
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 1,
          scale: 1,
          zIndex: 888,
          position: "fixed",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          zIndex: -888,
          display: "none",
          position: "absolute",
        }}
        transition={{ delay: 5, duration: 0.7 }}
        style={{ fontFamily: "Helvetica", height: currentHeight }}
        className="w-full bg-white absolute top-0 left-0 flex justify-center items-center"
      >
        <motion.div
          initial={{ translateX: 0, opacity: 1, z: 777 }}
          animate={{ translateX: -1000, opacity: 0, z: -777 }}
          transition={{ delay: 5, duration: 0.7 }}
          className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
        >
          <Image src={Development} width={Design.width - 150} height={Design.height - 150}  />
          <motion.h1
            // initial={{ opacity: 1, y: 0 }}
            // animate={{ opacity: 0, y: 0 }}
            // transition={{ delay: 2.4, duration: 0.5 }}
            className="text-5xl text-black tracking-widest"
          >
            {"Incridable Design".split("").map((char, index) => (
              <motion.span
                key={char + "dsadad" + index}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: 3,
                  opacity: 0,
                  transition: {
                    delay: parseFloat(`3.${index}`),
                    duration: 0.3,
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* <motion.div
        initial={{
          opacity: 1,
          scale: 1,
          zIndex: 888,
          position: "fixed",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          zIndex: -888,
          display: "none",
        }}
        transition={{ delay: 7, duration: 0.7 }}
        style={{ fontFamily: "TitleFont", height: currentHeight }}
        className="w-full bg-white absolute top-0 left-0 flex justify-center items-center"
      >
        <motion.div
          initial={{ translateX: 0, opacity: 1, z: 774 }}
          animate={{ translateX: -1000, opacity: 0, z: -774 }}
          transition={{ delay: 7, duration: 0.7 }}
          className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
        >
          <Image src={Deployment} />
          <motion.h1
            // initial={{ opacity: 1, y: 0 }}
            // animate={{ opacity: 0, y: 0 }}
            // transition={{ delay: 2.4, duration: 0.5 }}
            className="text-5xl text-black tracking-widest"
          >
            {"Incridable Design".split("").map((char, index) => (
              <motion.span
                key={char + "dsadad" + index}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: 3,
                  opacity: 0,
                  transition: {
                    delay: parseFloat(`5.${index}`),
                    duration: 0.3,
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      </motion.div> */}

      {/* <motion.div
        initial={{ translateX: 0, zIndex: 777, position: "fixed" }}
        animate={{ translateX: -5000, zIndex: -777, position: "absolute" }}
        transition={{ delay: 4.02, duration: 0.7 }}
        style={{ fontFamily: "TitleFont", height: currentHeight }}
        className="w-full bg-[#008081] absolute top-0 left-0 flex justify-center items-center"
      >
        <motion.h1
          // initial={{ opacity: 1, y: 0 }}
          // animate={{ opacity: 0, y: 0 }}
          // transition={{ delay: 2.4, duration: 0.5 }}
          className="text-5xl text-black tracking-widest"
        ></motion.h1>
      </motion.div> */}
    </>
  );
};

export default Preload;
