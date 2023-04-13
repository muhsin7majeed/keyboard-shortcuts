# Keyboard-Shortcuts

Keyboard-Shortcuts is a simple library for creating keyboard shortcuts in React applications.

## Getting Started

To get started using Keyboard-Shortcuts in your React application, follow these simple steps:

1.  Install the Keyboard-Shortcuts package via npm:
    `npm install ./keyboard-shortcuts`
2.  Import the `ShortcutsProvider` component from the package and wrap it around your application:

    ```
    import React from "react";
    import { ShortcutsProvider } from "keyboard-shortcuts";

    const App = () => {
      return (
        <ShortcutsProvider>
          {/* Your application code here */}
        </ShortcutsProvider>
      );
    };

    export default App;
    ```

3.  Add your keyboard shortcuts using the `KeyboardShortcut` component:

    ```
    import React from "react";
    import { KeyboardShortcut } from "keyboard-shortcuts";

    const MyComponent = () => {
      const handleSave = () => {
        // Do something when the user presses the "Ctrl + S" key combination
      };

      return (
        <div>
          <KeyboardShortcut combo="ctrl+s" callback={handleSave} description="Save" />
          {/* Your component code here */}
        </div>
      );
    };

    export default MyComponent;

    ```

4.  Access the list of shortcuts anywhere in your application using the `WithShortcuts` component:

    ```
    import React from "react";
    import { WithShortcuts } from "keyboard-shortcuts";

    const MyComponent = () => {
      return (
        <div>
          <WithShortcuts>
            {(shortcuts) => (
              <ul>
                {shortcuts.map((shortcut) => (
                  <li key={shortcut.combo}>{shortcut.description}</li>
                ))}
              </ul>
            )}
          </WithShortcuts>
          {/* Your component code here */}
        </div>
      );
    };

    export default MyComponent;

    ```

## API

### `ShortcutsProvider`

The `ShortcutsProvider` component is used to provide the context for your application's keyboard shortcuts. It takes no props and should wrap your entire application.

### `KeyboardShortcut`

The `KeyboardShortcut` component is used to define a keyboard shortcut. It takes the following props:

- `combo` (string) - The keyboard combination that triggers the shortcut, e.g. `"ctrl+s"`.
- `callback` (function) - The function to call when the shortcut is triggered.
- `description` (string) - A description of the shortcut, used for display purposes.

### `WithShortcuts`

`WithShortcuts` is a higher-order component that provides the list of registered keyboard shortcuts to its children components through a render prop. Its purpose is to enable components to access the list of keyboard shortcuts without needing to import and use the `useShortcutsContext` hook directly.

It takes a single prop, `children`, which should be a function that receives the list of keyboard shortcuts as an argument and returns a JSX element.
