import { alphabet, morse } from "./data.js";

// *** Translate to Morse Code from English

export const toMorseCode = (input, object) => {
    if (typeof input === "string" && input.length > 0) {
        return input
            .toUpperCase() // take input and make uppercase
            .split("") // then split each letter
            .map((character) => object[character]) // encode character
            .join(" "); // Keep space between characters
    } else {
        return "Cannot translate, enter only letters and numbers.";
    }
};

console.log(toMorseCode("Samantha", alphabet)); //    .. .- -- .- -. - .... .-
// console.log(toMorseCode("JS IS AWESOME", alphabet)); //  .--- ... / .. ... / .- .-- . ... --- -- .
// console.log(toMorseCode("Magic!", alphabet)); //    -- .- --. .. -.-. -·-·--
// console.log(toEnglish("", morse));

// *** Translate to English from Morse Code

export const toEnglish = (input, object) => {
    if (typeof input === "string" && input.length > 0) {
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
    } else {
        return "Cannot translate, enter morse code only.";
    }
};

console.log(toEnglish("... .- -- .- -. - .... .-", morse)); //SAMANTHA
// console.log(toEnglish(".--- ... / .. ... / .- .-- . ... --- -- .", morse)); //JS IS AWESOME
// console.log(toEnglish("-- .- --. .. -.-. -·-·--", morse)); //MAGIC!
// console.log(toMorseCode("", alphabet)); //    .. .- -- .- -. - .... .-
