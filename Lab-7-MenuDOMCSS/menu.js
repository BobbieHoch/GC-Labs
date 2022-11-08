const alphabet = document.getElementById("myalpha");

console.log(alphabet);
alphabet.addEventListener("click", showLetters);


function showLetters() {
    // alphabet.style.display = 'block';
    numbers.style.display = 'none';
}
showLetters();

const numbers = document.getElementById("mynums");

numbers.addEventListener("click", showNumbers);

function showNumbers() {
    numbers.style.display = 'block';
    alphabet.style.display = 'none';
}

const changeLable = document.querySelector("#btn");

changeLable.addEventListener("click", switchLable)

function switchLable() {
    changeLable.button.innerHTML = 'Letters Menu';
}




// function click(event)
// event.preventDefault();


