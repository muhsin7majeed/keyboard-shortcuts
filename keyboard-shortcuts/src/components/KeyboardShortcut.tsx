import { useEffect } from "react";

import { Shortcut } from "../context/ShortcutsContext";
import { useShortcutsContext } from "../hooks/useShortcutsContext";
import { keypressListener } from "../lib/keypress";

type KeyboardShortcutProps = Shortcut & {};

export const KeyboardShortcut = ({ combo, callback, description }: KeyboardShortcutProps) => {
  const { addShortcut, removeShortcut } = useShortcutsContext();

  const shortcut = {
    combo,
    callback,
    description,
  };

  useEffect(() => {
    const combo = shortcut.combo;
    const callback = shortcut.callback;

    keypressListener.simple_combo(combo, callback);
    addShortcut(shortcut);

    return () => {
      keypressListener.unregister_combo(combo);
      removeShortcut(shortcut);
    };
  }, [addShortcut, removeShortcut]);

  return null;
};
