import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";


export const Trail: React.FC<{ open: boolean, textSize: string, children: JSX.Element }> = ({ open, textSize, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          className={`${textSize} uppercase`}
          style={style}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
