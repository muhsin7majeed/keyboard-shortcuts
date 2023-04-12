import { ReactElement, createContext, useCallback, useState } from "react";

export type Shortcut = {
  combo: string;
  callback: (event?: KeyboardEvent | undefined, count?: number | undefined) => any;
  description: string;
};

export type ShortcutContextType = {
  shortcuts: Shortcut[];
  addShortcut: (shortcut: Shortcut) => void;
  removeShortcut: (shortcut: Shortcut) => void;
};

export const ShortcutsContext = createContext<ShortcutContextType>({
  shortcuts: [],
  addShortcut: () => {},
  removeShortcut: () => {},
});

type ShortcutsProviderPropTypes = {
  children: ReactElement;
};

export const ShortcutsProvider = ({ children }: ShortcutsProviderPropTypes) => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

  const addShortcut = useCallback((shortcut: Shortcut) => {
    setShortcuts((shortcuts) => [...shortcuts, shortcut]);
  }, []);

  const removeShortcut = useCallback((shortcut: Shortcut) => {
    setShortcuts((shortcuts) =>
      shortcuts.filter(
        (s) => s.combo !== shortcut.combo || s.callback !== shortcut.callback || s.description !== shortcut.description
      )
    );
  }, []);

  return (
    <ShortcutsContext.Provider
      value={{
        shortcuts,
        addShortcut,
        removeShortcut,
      }}
    >
      {children}
    </ShortcutsContext.Provider>
  );
};
