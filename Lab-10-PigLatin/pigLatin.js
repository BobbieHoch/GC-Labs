function Translate(word) {
    word = word.toLowerCase();

    if (['a', 'e', 'i', 'o', 'u'].indexOf(word[0]) > -1){
        return word = word + "way";
    }
    else {
        for (let i = 0; i < word.length; i++) {
            if (['a', 'e', 'i', 'o', 'u'].indexOf(word[i]) > -1){
                let firstCons = word.slice(0, i);
                let middleCons = word.slice(i, word.length);
                word = middle + firstCons + "ay";
                break;
            }
            return word; }
}
console.log(Translate("talk"));
console.log(Translate("igloo"));
console.log(Translate("CRUNCH"));