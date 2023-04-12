import { Shortcut } from "@/context/ShortcutsContext";
import useShortcutsContext from "@/hooks/useShortcutsContext";

interface WithShortcutsProps {
  children: (shortcuts: Shortcut[]) => JSX.Element;
}

export function WithShortcuts({ children }: WithShortcutsProps) {
  const { shortcuts } = useShortcutsContext();

  return children(shortcuts);
}
