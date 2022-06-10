import { animated, useSpring } from "react-spring";

export const MysteriousText = ({ children, ...props }: any) => {
  const animation = (i: any) =>
    useSpring({ opacity: 1, from: { opacity: 0 }, delay: Math.random() * 350 });
  return children.split("").map((item: any, index: number) => (
    <animated.span key={index} style={animation(index)} {...props}>
      {item}
    </animated.span>
  ));
};
