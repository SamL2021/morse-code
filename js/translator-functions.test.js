import { alphabet, morse } from "./data.js";
import { toMorseCode, toEnglish } from "./translator-functions.js";

// toMorseCode() Testing

describe("Testing toMorseCode()", () => {
    it("Should accept lowercase letters and return '...'", () => {
        expect(toMorseCode("s", alphabet)).toBe("...");
        expect(toMorseCode("sam", alphabet)).toBe("... .- --");
    });

    it("Should accept uppercase letters and return '...'", () => {
        expect(toMorseCode("S", alphabet)).toBe("...");
        expect(toMorseCode("SAM", alphabet)).toBe("... .- --");
    });

    it("Should accept a '3' or number 2 and return '...--'", () => {
        expect(toMorseCode("3", alphabet)).toBe("...--");
        // expect(toMorseCode(3, alphabet)).toBe("....--");
        expect(toMorseCode("6", alphabet)).toBe("-....");
    });

    it("Should accept punctuation such as '!' and return '·-·--'", () => {
        expect(toMorseCode("!", alphabet)).toBe("-·-·--");
        expect(toMorseCode(",", alphabet)).toBe("--··--");
    });

    it("Any other character apart from letters and numbers should throw an error 'Not a valid entry'", () => {
        expect(toMorseCode([], alphabet)).toThrow(
            "Invalid characters included, cannot translate. Please only include letters and numbers."
        );
        expect(toMorseCode("?", alphabet)).toThrow(
            "Invalid characters included, cannot translate. Please only include letters and numbers."
        );
        expect(toMorseCode({}, alphabet)).toThrow(
            "Invalid data type entered. Please only enter string or number."
        );
    });

    it("Should split morse code with 1 space between characters and seperate words with '/'", () => {
        expect(
            toMorseCode("SAMANTHA LIPPIATT", alphabet).toBe(
                "... .- -- .- -. - .... .- / .-.. .. .--. .--. .. .- - -"
            )
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

        it("Any other character apart from letters and numbers should throw an error 'Not a valid entry'", () => {
            expect(toEnglish([], morse)).toThrow(
                "Invalid data type entered. Please only enter morse code"
            );
            expect(toEnglish("?", morse)).toThrow(
                "Invalid data type entered. Please only enter morse code"
            );
            expect(toEnglish({}, morse)).toThrow(
                "Invalid data type entered. Please only enter morse code"
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
                ).toBe("JS IS AWESOME!")
            );
        });
    });
});
