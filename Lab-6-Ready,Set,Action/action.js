function main() {
    let bigIt = document.getElementById("grow-me");

    bigIt.classList.add("big");

    console.log(bigIt);

    let shrinky = document.getElementById("shrink-me");

    shrinky.classList.remove("big");

    console.log(shrinky);

    let listem = document.querySelectorAll("li");

    console.log(listem);

    let changeLink = document.querySelectorAll(".link");

    changeLink[0].href = "https://www.example.com";
    changeLink.innerText = "somewhere";
    console.log(changeLink);

    let hideThem = document.getElementById("hide-me");
    hideThem.style.display = "none";

    let blocker = document.getElementById("show-me");
    blocker.style.display = "block";

    let greeting = document.querySelector("name");
    greeting.innerContent = "Welcome +  ${name}!";
}
