import { useContext } from "react";

import { ShortcutsContext } from "@/context/ShortcutsContext";

const useShortcutsContext = () => {
  return useContext(ShortcutsContext);
};

export default useShortcutsContext;
