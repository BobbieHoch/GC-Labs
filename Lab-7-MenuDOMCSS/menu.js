const letters = document.getElementById("dropdown-item1");
const numbers = document.getElementById("dropdown-item2");

// console.log(alphabet);

alphabet.addEventListener("click", showLetters);
numbers.addEventListener("click", showNumbers);

function showLetters() {
    let alphabet = document.getElementById("myalpha");
    let numerals = document.getElementById("mynums");
    alphabet.style.display = "block";
    numerals.style.display = "none";
}
// showLetters();



function showNumbers() {
    let alphabet = document.getElementById("myalpha");
    let numerals = document.getElementById("mynums");
    numerals.style.display = "block";
    alphabet.style.display = "none";
}

// const changeLable = document.querySelector("#btn");

// changeLable.addEventListener("click", switchLable)

// function switchLable() {
//     changeLable.button.innerHTML = 'Letters Menu';
// }

// function click(event)
// event.preventDefault();
