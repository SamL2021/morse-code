import { alphabet, morse } from "./data.js";

// *** Translate to Morse Code from English

export const toMorseCode = (input, object) => {
    const regex = /^[0-9a-zA-Z\ \!\.\,\\\/\-]+$/; // Check for specific characters only

    if (
        typeof input !== "string" ||
        regex.test(input) === false ||
        input.length < 0
    ) {
        return "Cannot translate, enter only letters and numbers."; // return msg to user
    } else {
        return input
            .toUpperCase() // take input and make uppercase
            .split("") // then split each letter
            .map((character) => object[character]) // encode character
            .join(" "); // Keep space between characters
    }
};

console.log(toMorseCode("", alphabet)); //
console.log(toMorseCode("ta-da", alphabet)); //    .. .- -- .- -. - .... .-
console.log(toMorseCode("JS IS AWESOME", alphabet)); //  .--- ... / .. ... / .- .-- . ... --- -- .
console.log(toMorseCode("Magic!", alphabet)); //    -- .- --. .. -.-. -.-.--
console.log(toMorseCode("Another test input", alphabet)); //    -- .- --. .. -.-. -.-.--

// *** Translate to English from Morse Code

export const toEnglish = (input, object) => {
    const regex = /^[\ \!\.\\\/\-]+$/; // Check for specific characters only

    if (
        typeof input !== "string" ||
        regex.test(input) === false ||
        input.length < 0
    ) {
        return "Cannot translate, enter morse code only."; // return msg to user
    } else {
        return input
            .split("/") // get words separated
            .map((word) =>
                word
                    .split(" ") // get character code 1 spaces apart
                    .map((character) => object[character]) // decode character
                    .join("")
            )
            .join(" ") // add spaces between words
            .trim(); //removes whitespace from both ends of a string and returns a new string, without modifying the original string
    }
};

console.log(toEnglish("", morse));
console.log(toEnglish("... .- -- .- -. - .... .-", morse)); //SAMANTHA
console.log(toEnglish(".--- ... / .. ... / .- .-- . ... --- -- .", morse)); //JS IS AWESOME
console.log(toEnglish("-- .- --. .. -.-. -.-.--", morse)); //MAGIC!
