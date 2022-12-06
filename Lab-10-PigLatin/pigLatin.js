function translate(str) {
    str = str.toLowerCase();

    // for words that start with a vowel:
    if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
        return str=str+"way";
    }

    // for words that start with one or more consonants
   else {
   //check for multiple consonants
       for (var i = 0; i<str.length; i++){
           if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1)
           {
               let firstcons = str.slice(0, i);
               let middle = str.slice(i, str.length);
               str = middle+firstcons+"ay";
               break;}
            }
    return str;}
}
//     console.log(translate("talk"));
//     console.log(translate("igloo"));
//     console.log(translate("CRUNCH"));
 module.exports = translate 