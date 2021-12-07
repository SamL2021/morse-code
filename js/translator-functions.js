import { alphabet, morse } from "./data.js";

export const toMorseCode = (input, object) => {
    // ** input:
    //  * type string or Number
    // (typeof input == "string" || typeof input == "number") {
    // * lowercase and uppercase letters
    // const inputUpperCase = input.toUpperCase();
    // * punctuation - how to manage or should exclude?
    // * throw an error or [], {}, any other characters
    // hasInvalidCharacters = 0;
    // return "Please only include letters and numbers, cannot translate other characters";
    // **output:
    // * convert to morse, loop over items in input and create new output based on morse
    // new array, let code [],
    // * split morse code with /
    // for (let i = 0; i < uppercaseInput.length; i++) {
    // if (object[uppercaseInput[i]]) {
    //   code.push(object[uppercaseInput[i]]);
    // return code
    // .split( )
    // .join(" ")
    // .replaceAll("   ");
};

export const toEnglish = (input, object) => {};

// ** input:
// * throw an error letters, numbers, [], {}, any other characters then dots and dashes .. --
// hasInvalidCharacters = 0;
// return "Please only morse code, using dashes and dots and seperating words with /, cannot translate other characters";

// **output:
// * convert to English, loop over items in input and create new output based on english
// new array, let text [],
// * split words with / forEach((word) => {
//  const eachWord = word.split("/");
//  let translatedWord = "";

// for (let i = 0; i < .length; i++) {
// if (object[[i]]) {
//   text.push(object[[i]]);

// return text
// translated.push(translatedWord);
