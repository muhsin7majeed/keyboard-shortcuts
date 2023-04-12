import { Shortcut } from "@/context/ShortcutsContext";
import useShortcutsContext from "@/hooks/useShortcutsContext";

type WithShortcutsProps = {
  children: (shortcuts: Shortcut[]) => JSX.Element;
};

export function WithShortcuts({ children }: WithShortcutsProps) {
  const { shortcuts } = useShortcutsContext();

  return children(shortcuts);
}
