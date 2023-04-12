import { WithShortcuts } from "./WithShortcuts";

const ComponentD = () => {
  return (
    <>
      <div
        className="component__box"
        style={{
          flexDirection: "column",
        }}
      >
        <h3 style={{ paddingBottom: 8 }}>Available Shortcuts</h3>

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
      </div>
    </>
  );
};

export default ComponentD;
