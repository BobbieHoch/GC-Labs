const alphabet = document.getElementById("myalpha");
const numbers = document.getElementById("mynums");

// console.log(alphabet);

alphabet.addEventListener("click", showLetters);

function showLetters() {
    let alphabet = document.getElementById("myalpha");
    let numbers = document.getElementById("mynums");
    alphabet.style.display = "block";
    numbers.style.display = "none";
}
// showLetters();

numbers.addEventListener("click", showNumbers);

function showNumbers() {
    let alphabet = document.getElementById("myalpha");
    let numbers = document.getElementById("mynums");
    numbers.style.display = "block";
    alphabet.style.display = "none";
}

// const changeLable = document.querySelector("#btn");

// changeLable.addEventListener("click", switchLable)

// function switchLable() {
//     changeLable.button.innerHTML = 'Letters Menu';
// }

// function click(event)
// event.preventDefault();
