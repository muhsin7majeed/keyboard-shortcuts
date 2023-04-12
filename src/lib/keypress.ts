import keypress from "keypress.js";

// @ts-ignore
window.keypress = keypress.keypress;

const keypressListener = new window.keypress.Listener();

export default keypressListener;
