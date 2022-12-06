const translate = require("./pigLatin");

describe('words that start with vowel just "way" at end', () => {
    // ARRANGE
    test("translates 'apple' just adds 'way' at the end", () => {
        let startsWithVowel = translate("apple");
        expect(startsWithVowel).toBe("appleway");
    });

    test("translates 'announce' just adds 'way' at the end", () => {
        let startsWithVowel = translate("announce");
        expect(startsWithVowel).toBe("announceway");
    });
    test("translates 'organ' just adds 'way' at the end", () => {
        let startsWithVowel = translate("organ");
        expect(startsWithVowel).toBe("organway");
    });
});

describe("words that start with vowels with capital letters converted to lowercase", () => {
    test("translates Oregami changes to lower case and adds 'way' ", () => {
        let startsWithVowelCap = translate("Eat");
        expect(startsWithVowelCap).toBe("eatway");
    });
    test("translates Oregami changes to lower case and adds 'way' ", () => {
        let startsWithVowelCap = translate("Attack");
        expect(startsWithVowelCap).toBe("attackway");
    });
    test("translates Oregami changes to lower case and adds 'way' ", () => {
        let startsWithVowelCap = translate("Orange");
        expect(startsWithVowelCap).toBe("orangeway");
    });
});

// words that start with one consonant… write tests for the second letter being several different vowels
describe("words that start with one consonant", () => {
    test("translates 'particle'moving p to end and adding 'ay' ", () => {
        let startsWithConsonant = translate("particle");
        expect(startsWithConsonant).toBe("articlepay");
    });
    test("translates 'particle'moving p to end and adding 'ay' ", () => {
        let startsWithConsonant = translate("pony");
        expect(startsWithConsonant).toBe("onypay");
    });
    test("translates 'particle'moving p to end and adding 'ay' ", () => {
        let startsWithConsonant = translate("dog");
        expect(startsWithConsonant).toBe("ogday");
    });
});

// words that start with two consonants
describe("words that start with two consonants", () => {
    test("translates 'crunch' moving 'cr' to end and adding 'ay' ", () => {
        let startsTwoCons = translate("crunch");
        expect(startsTwoCons).toBe("unchcray");
    });
    test("translates 'steak' moving st to end and adding 'ay' ", () => {
        let startsTwoCons = translate("steak");
        expect(startsTwoCons).toBe("eakstay");
    });
    test("translates 'flood' moving'fl' to end and adding 'ay' ", () => {
        let startsTwoCons = translate("flood");
        expect(startsTwoCons).toBe("oodflay");
    });
});
