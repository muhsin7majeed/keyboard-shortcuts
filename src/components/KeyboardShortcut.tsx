import { useEffect } from "react";

import keypressListener from "@/lib/keypress";
import useShortcutsContext from "@/hooks/useShortcutsContext";

type KeyboardShortcutProps = {
  combo: string;
  callback: () => void;
  description: string;
};

export function KeyboardShortcut({ combo, callback, description }: KeyboardShortcutProps) {
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
}
