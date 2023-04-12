import { useState } from "react";
import { KeyboardShortcut } from "keyboard-shortcuts";

import getRandomColor from "@/lib/getRandomColor";

const ComponentA = () => {
  const [boxStyle, setBoxStyle] = useState<React.CSSProperties>({
    backgroundColor: getRandomColor(),
  });

  const handleBgColor = () => {
    setBoxStyle((prev) => ({ ...prev, backgroundColor: getRandomColor() }));
  };

  return (
    <>
      <KeyboardShortcut
        combo="shift a"
        callback={handleBgColor}
        description="Changes background color of component A"
      />

      <div style={boxStyle} className="component__box">
        Component A
      </div>
    </>
  );
};

export default ComponentA;
