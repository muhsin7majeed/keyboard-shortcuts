import { useState } from "react";

import getRandomColor from "@/lib/getRandomColor";
import { KeyboardShortcut } from "./KeyboardShortcut";

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
