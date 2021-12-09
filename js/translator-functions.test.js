import { alphabet, morse } from "./data.js";
import { toMorseCode, toEnglish } from "./translator-functions.js";

//jestjs.io/docs/expect

// toMorseCode() Testing

https: describe("Testing toMorseCode()", () => {
    it("Should accept lowercase letters and return '...'", () => {
        expect(toMorseCode("s", alphabet)).toBe("...");
        expect(toMorseCode("sam", alphabet)).toBe("... .- --");
    });

    it("Should accept uppercase letters and return '...'", () => {
        expect(toMorseCode("S", alphabet)).toBe("...");
        expect(toMorseCode("SAM", alphabet)).toBe("... .- --");
    });

    it("Should accept a '3' and return '...--'", () => {
        expect(toMorseCode("3", alphabet)).toBe("...--");
        expect(toMorseCode("6", alphabet)).toBe("-....");
    });

    it("Should accept punctuation such as '!' and return '.-.--'", () => {
        expect(toMorseCode("!", alphabet)).toBe("-.-.--");
        expect(toMorseCode(",", alphabet)).toBe("--··--");
    });

    it("Any other character apart from letters and numbers should return msg", () => {
        expect(toMorseCode("{}", alphabet)).toBe(
            "Cannot translate, enter only letters and numbers."
        );
    });

    it("Should split morse code with 1 space between characters and seperate words with '/'", () => {
        expect(toMorseCode("SAMANTHA LIPPIATT", alphabet)).toBe(
            "... .- -- .- -. - .... .- / .-.. .. .--. .--. .. .- - -"
        );

        expect(toMorseCode("JS IS AWESOME!", alphabet)).toBe(
            ".--- ... / .. ... / .- .-- . ... --- -- . -.-.--"
        );
    });

    // toEnglish() testing

    describe("Testing toEnglish()", () => {
        it("Should accept '...-' and return 'V'", () => {
            expect(toEnglish("...-", morse)).toBe("V");
        });

        it("Should accept '....-' and return '4'", () => {
            expect(toEnglish("....-", morse)).toBe("4");
        });

        it("Should only accept morse code'", () => {
            expect(toEnglish("S", morse)).toBe(
                "Cannot translate, enter morse code only."
            );
        });

        it("Should have spaces between words when converted to text", () => {
            expect(
                toEnglish(
                    "... .- -- .- -. - .... .- / .-.. .. .--. .--. .. .- - -",
                    morse
                )
            ).toBe("SAMANTHA LIPPIATT");
            expect(
                toEnglish(
                    ".--- ... / .. ... / .- .-- . ... --- -- . -.-.--",
                    morse
                )
            ).toBe("JS IS AWESOME!");
        });

        it("Not translate an empty string'", () => {
            expect(toEnglish("", morse)).toBe(
                "Cannot translate, enter morse code only."
            );
        });
    });
});
