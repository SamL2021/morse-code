import { toMorseCode, toEnglish } from "./translator.js";

const inputText = document.getElementById("inputBoxText").value; // grab input
const inputCode = document.getElementById("inputBoxMorse").value; // grab input
const outputText = document.getElementById("outputBoxText");
const outputMorse = document.getElementById("outputBoxMorse");
