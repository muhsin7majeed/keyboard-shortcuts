import { useState } from "react";
import { KeyboardShortcut } from "keyboard-shortcuts";

const ComponentC = () => {
  const [boxStyle, setBoxStyle] = useState<React.CSSProperties>({
    fontSize: 22,
  });

  const handleFontSize = (increment?: boolean) => {
    setBoxStyle((prev) => ({
      ...prev,
      fontSize: increment ? (prev.fontSize as number) + 2 : (prev.fontSize as number) - 2,
    }));
  };

  return (
    <>
      <KeyboardShortcut
        combo="shift i"
        callback={() => handleFontSize(true)}
        description="Increase font size of text in Component C"
      />

      <KeyboardShortcut
        combo="shift d"
        callback={() => handleFontSize(false)}
        description="Decrease font size of text in Component C"
      />

      <div style={boxStyle} className="component__box">
        Component C
      </div>
    </>
  );
};

export default ComponentC;
