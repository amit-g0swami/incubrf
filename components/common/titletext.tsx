import React from "react";
import { useSpring, config, animated } from "react-spring";

interface Props {
  title: string;
}

const TitleText = ({ title }: Props) => {
  const [flip, set] = React.useState(false);

  const { x } = useSpring({
    reverse: flip,
    from: { x: 0 },
    x: 1,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <animated.span
      className="p-2 uppercase border border-white rounded-full px-5 text-4xl 2xl:text-6xl font-extralight"
    >
      {title}
    </animated.span>
  );
};

export default TitleText;
