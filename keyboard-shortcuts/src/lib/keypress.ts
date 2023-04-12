import keypress from "keypress.js";

// @ts-ignore
window.keypress = keypress.keypress;

export const keypressListener = new window.keypress.Listener();
