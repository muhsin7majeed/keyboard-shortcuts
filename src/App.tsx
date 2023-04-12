import { KeyboardShortcut } from "@/components/KeyboardShortcut";
import { WithShortcuts } from "@/components/WithShortcuts";

function App() {
  return (
    <div className="App">
      <WithShortcuts>
        {(shortcuts) => (
          <ul>
            {shortcuts.map((shortcut, i) => (
              <li key={i}>
                {shortcut.combo} - {shortcut.description}
              </li>
            ))}
          </ul>
        )}
      </WithShortcuts>

      <KeyboardShortcut
        combo="ctrl a"
        callback={() => console.log("ctrl+a")}
        description="Changes background color of component A"
      />

      <KeyboardShortcut
        combo="ctrl b"
        callback={() => console.log("ctrl+b")}
        description="Changes background color of component A"
      />

      <KeyboardShortcut
        combo="ctrl c"
        callback={() => console.log("ctrl+c")}
        description="Changes background color of component A"
      />
    </div>
  );
}

export default App;
