let name1 = "Bart Jones";

let name2 = "Aristotle Onassis";

let name3 = "Archibald Smith";

let name1Length = name1.length;
let name2Length = name2.length;
let name3Length = name3.length;



if (name1Length > name2Length && name1Length > name3Length) {
    console.log(`${name1}  has the longest name.`)
} else if (name2Length > name1Length && name2Length > name3Length) {
    console.log(`${name2}  has the longest name.`)
} else if (name3Length > name2Length && name3Length > name1Length) {
    console.log(`${name3}  has the longest name.`)
} else if (name1Length === name2Length && name3Length !== name1Length) {
    console.log(`${name1} and ${name2} tie for the longest name.`);
} else if (name2Length === name3Length && name1Length < name2Length) {
    console.log(`${name2} and ${name3} tie for the longest name`);
} else if (name1Length === name3Length && name2Length < name1Length) {
    console.log(`${name1} and ${name3} tie for the longest name.`);
} else {
    console.log(`All three names are the same length.`);
}