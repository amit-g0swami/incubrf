import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { Trail } from "./textanimation";

interface Props {
  name: string;
  children: string[];
}

const Accordian = (props: Props) => {
  const [canShow, setCanShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    let element = document.getElementById("mainBlock");
    if (element) {
      element.addEventListener("scroll", () => {
        let position = element?.scrollTop || 0;
        let textElement = document.getElementById("textAnimated");
        if (element) {
          if (position > window.innerHeight * 1.7) {
            setCanShow(false)
          } else if (position < window.innerHeight) {
            setCanShow(false)
          } else {
          }
        }
      });
    }
  }, []);

  return (
    <div className="w-full transition-all ease-in-out duration-200">
      <motion.div
        initial={{ translateX: 500 }}
        whileInView={{ translateX: 0 }}
        transition={{ duration: 1.2 }}
        onClick={() => setCanShow(!canShow)}
        className={`w-full flex ${
          canShow ? "justify-start" : "justify-end"
        } border-b border-white items-center cursor-pointer mt-5 py-5 text-7xl xl:text-[5.2rem] 2xl:text-[6vw]`}
      >
        <AiOutlinePlus
          className="text-3xl mx-5 cursor-pointer"
          style={{ transform: canShow ? "rotate(45deg)" : "rotate(0deg)" }}
        />{" "}
        {props.name}
      </motion.div>
      {canShow && (
        <ul className="w-full list-disc transition-all ease-in-out duration-200 px-20 py-10 pt-8 border-b">
          {props.children.map((item) => (
            <Trail key={item} open={canShow} textSize="text-xl 2xl:text-3xl">
              <li className=" font-[400]">{item}</li>
            </Trail>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordian;
