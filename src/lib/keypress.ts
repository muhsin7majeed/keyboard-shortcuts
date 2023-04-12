// @ts-nocheck
import keypress from "keypress.js";

window.keypress = keypress.keypress;

const keypressListener = new window.keypress.Listener();
export default keypressListener;
