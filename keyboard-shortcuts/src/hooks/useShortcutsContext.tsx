import { useContext } from "react";

import { ShortcutsContext } from "@/context/ShortcutsContext";

export const useShortcutsContext = () => {
  return useContext(ShortcutsContext);
};
