import { alphabet, morse } from "./data.js";

// *** Translate to Morse Code from English

export const toMorseCode = (input, object) => {
    // if (typeof input != "string" || typeof input != "number")
    //   return "Letters and numbers only please, cannot translate other characters";

    // throw an error or [], {}, any other characters

    const inputUpperCase = input.toUpperCase().split(""); // take input and make uppercase then split each letter
    return inputUpperCase
        .map((character) => {
            return object[character] ? object[character] : character;
        })
        .join(" "); // Keep space between characters
};

console.log(toMorseCode("Samantha", alphabet)); //    .. .- -- .- -. - .... .-
// console.log(toMorseCode("JS IS AWESOME", alphabet)); //  .--- ... / .. ... / .- .-- . ... --- -- .
// console.log(toMorseCode("Magic!", alphabet)); //    -- .- --. .. -.-. -·-·--

// *** Translate to English from Morse Code

export const toEnglish = (input, object) => {
    // throw an error for any other characters than (['/', '-', '.', ' '])
    return input
        .split("/") // get words separated
        .map((word) =>
            word
                .split(" ") // get character code 1 spaces apart
                .map((character) => object[character]) // decode Morse code character
                .join("")
        )
        .join(" ") // add spaces between words
        .trim(); //removes whitespace from both ends of a string and returns a new string, without modifying the original string
};

console.log(toEnglish("... .- -- .- -. - .... .-", morse)); //SAMANTHA
// console.log(toEnglish(".--- ... / .. ... / .- .-- . ... --- -- .", morse)); //JS IS AWESOME
// console.log(toEnglish("-- .- --. .. -.-. -·-·--", morse)); //MAGIC!
