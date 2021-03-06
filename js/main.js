import { toMorseCode, toEnglish } from "./translator-functions.js";
import { alphabet, morse } from "./data.js";

const inputText = document.getElementById("inputBoxText");
const inputCode = document.getElementById("inputBoxMorse");
const translateToMorsebtn = document.getElementById("translateToMorsebtn");
const translateToEnglishBtn = document.getElementById("translateToEnglishBtn");
const outputText = document.getElementById("outputBoxText");
const outputMorse = document.getElementById("outputBoxMorse");

// Select btn to listen for click then take input from top text box and run translate function then output to bottom text box
translateToMorsebtn.addEventListener("click", () => {
    const textToTranslate = inputText.value;
    outputMorse.value = toMorseCode(textToTranslate, alphabet);
});

// Select btn to listen for click then take input from top text box and run translate function then output to bottom text box
translateToEnglishBtn.addEventListener("click", () => {
    const codeToTranslate = inputCode.value;
    outputText.value = toEnglish(codeToTranslate, morse);
});
