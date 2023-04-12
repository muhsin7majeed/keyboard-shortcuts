import { useState } from "react";
import { KeyboardShortcut } from "keyboard-shortcuts";

import getRandomColor from "@/lib/getRandomColor";

const ComponentB = () => {
  const [boxStyle, setBoxStyle] = useState<React.CSSProperties>({
    color: getRandomColor(),
  });

  const handleTextColor = () => {
    setBoxStyle((prev) => ({ ...prev, color: getRandomColor() }));
  };

  return (
    <>
      <KeyboardShortcut combo="shift b" callback={handleTextColor} description="Changes text color of component B" />
      <div style={boxStyle} className="component__box">
        Component B
      </div>
    </>
  );
};

export default ComponentB;
