const translate = require("/pigLatin");


describe('words that start with vowel just "way" at end', () => {
  // ARRANGE
  test("translates 'apple' just adds 'way' at the end", () => {
    let startsWithVowel = pigLatin.translate("apple");
    expect(startsWithVowel).toBe('appleway');
  });

  test("translates 'announce' just adds 'way' at the end", () => {
    let startsWithVowel = pigLatin.translate("announce");
    expect(startsWithVowel).toBe('announceway');
  });
  test("translates 'organ' just adds 'way' at the end", () => {
    let startsWithVowel = pigLatin.translate("organ");
    expect(startsWithVowel).toBe('organway');
  });
});



describe('words that start with vowels with capital letters converted to lowercase', () => {
  test("translates Oregami changes to lower case and adds 'way' ", () => {
    let startsWithVowelCap = pigLatin.translate("Eat");
    expect(startsWithVowelCap).toBe('eatway');
  });
  test("translates Oregami changes to lower case and adds 'way' ", () => {
    let startsWithVowelCap = pigLatin.translate("Attack");
    expect(startsWithVowelCap).toBe('atackway');
  }); test("translates Oregami changes to lower case and adds 'way' ", () => {
    let startsWithVowelCap = pigLatin.translate("Orange");
    expect(startsWithVowelCap).toBe('orangeway');
  });
});



// words that start with one consonant… write tests for the second letter being several different vowels
describe('words that start with one consonants', () => {
  test("translates 'particle'moving p to end and adding 'ay' ", () => {
    let startsWithConsonant = pigLatin.translate("particle");
    expect(startsWithConsonant).toBe('articlepay');
  });
  test("translates 'particle'moving p to end and adding 'ay' ", () => {
    let startsWithConsonant = pigLatin.translate("pony");
    expect(startsWithConsonant).toBe('onypay');
  });
  test("translates 'particle'moving p to end and adding 'ay' ", () => {
    let startsWithConsonant = pigLatin.translate("dog");
    expect(startsWithConsonant).toBe('ogday');
  });
});

// words that start with two consonants
describe('words that start with two consonants', () => {
  test("translates 'particle'moving p to end and adding 'ay' ", () => {
    let startsWith2Cons = pigLatin.translate("crunch");
    expect(startsWith2Cons).toBe('runchcay');
  });
  test("translates 'particle'moving p to end and adding 'ay' ", () => {
    let startsWith2Consonant = pigLatin.translate("steak");
    expect(startsWith2Cons).toBe('eakstay');
  });  test("translates 'particle'moving p to end and adding 'ay' ", () => {
    let startsWith2Consonant = pigLatin.translate("flood");
    expect(startsWith2Cons).toBe('loodfay');
  });
});
