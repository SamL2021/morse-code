import { alphabet, morse } from "./data.js";

// toMorseCode() Testing

describe("Testing toMorseCode()", (x, y) => {
    it("Should accept lowercase letters and return '...'", () => {
        expect(toMorseCode("s", morse)).toBe("...");
        expect(toMorseCode("sam", morse)).toBe("... .- --");
    });

    it("Should accept uppercase letters and return '...'", (x, y) => {
        expect(toMorseCode("S", morse)).toBe("...");
        expect(toMorseCode("SAM", morse)).toBe("... .- --");
    });

    it("Should accept a '3' or number 2 and return '...--'", (x, y) => {
        expect(toMorseCode("3", morse)).toBe("...--");
        expect(toMorseCode(3, morse)).toBe("....--");
        expect(toMorseCode("6", morse)).toBe("-....");
    });

    it("Should accept punctuation such as '!' and return '·-·--'", (x, y) => {
        expect(toMorseCode("!", morse)).toBe("·-·--");
        expect(toMorseCode(",", morse)).toBe("--··--");
    });

    it("Should accept '[]' and throw an error 'Not a valid entry'", (x, y) => {
        expect(toMorseCode([], morse)).toThrow(
            "Invalid data type entered. Please only enter string or number."
        );
    });

    it("Should accept '{}' and throw an error 'Not a valid entry'", (x, y) => {
        expect(toMorseCode({}, morse)).toThrow(
            "Invalid data type entered. Please only enter string or number."
        );
    });

    it("Any other character apart from letters and numbers should throw an error 'Not a valid entry'", (x, y) => {
        expect(toMorseCode("?", morse)).toThrow(
            "Invalid characters included, cannot translate. Please only include letters and numbers."
        );
    });

    it("Should split morse code with 3 spaces between characters and seperate words with '/'", (x, y) => {
        expect(
            toMorseCode("SAMANTHA LIPPIATT", morse).toBe(
                "... .- -- .- -. - .... .- / .-.. .. .--. .--. .. .- - -"
            )
        );
        expect(toMorseCode("JS IS AWESOME!", morse)).toBe(
            ".--- ... / .. ... / .- .-- . ... --- -- . -.-.--"
        );
    });

    // toEnglish() testing

    describe("Testing toEnglish()", () => {
        it("Should accept '...-' and return 'V'", () => {
            expect(toEnglish("...-", alphabet)).toBe("V");
        });

        it("Should accept '....-' and return '4'", () => {
            expect(toEnglish("....-", alphabet)).toBe("4");
        });

        it("Should accept '[]' and throw an error 'Not valid'", () => {
            expect(toEnglish([], alphabet)).toThrow(
                "Invalid characters entered. Please only enter string or number."
            );
        });

        it("Should accept '{}' and throw an error 'Not valid'", () => {
            expect(toEnglish({}, alphabet)).toThrow(
                "Invalid characters entered. Please only enter string or number."
            );
        });

        it("Should not accept any other character apart from letters and numbers and throw an error 'Not a valid entry'", () => {
            expect(
                toEnglish("?", alphabet).toThrow(
                    "Invalid characters included, cannot translate."
                )
            );
        });

        it("Should preseve spaces between words when converted to text", () => {
            expect(
                toEnglish(
                    "... .- -- .- -. - .... .- / .-.. .. .--. .--. .. .- - -",
                    alphabet
                )
            ).toBe("SAMANTHA LIPPIATT");
            expect(
                toEnglish(
                    ".--- ... / .. ... / .- .-- . ... --- -- . -.-.--",
                    alphabet
                ).toBe("JS IS AWESOME!")
            );
        });
    });
});
