import { toMorseCode, toEnglish } from "./translator-functions.js";

const inputText = document.getElementById("inputBoxText");
const inputCode = document.getElementById("inputBoxMorse");
const translateToMorsebtn = document.getElementById("translateToMorsebtn");
const translateToEnglishBtn = document.getElementById("translateToEnglishBtn");
const outputText = document.getElementById("outputBoxText");
const outputMorse = document.getElementById("outputBoxMorse");

// Select btn to listen for click then take input from top text box and run translate function then output to bottom text box
translateToMorsebtn.addEventListener("click", (e) => {
    e.preventDefault();
    const textToTranslate = inputText.value;
    outputMorse.value = toMorseCode(textToTranslate, alphabet);
});

// Select btn to listen for click then take input from top text box and run translate function then output to bottom text box
translateToEnglishBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const codeToTranslate = inputCode.value;
    outputText.value = toEnglish(codeToTranslate, morse);
});

// preventDefault() https://www.w3schools.com/jsref/event_preventdefault.asp this can be useful when clicking on a "submit" button, prevent it from submitting a form - changed type of btns to button as well so may not need both??