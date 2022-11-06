document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("whats up?");
    let data = new FormData(document.querySelector("form"));
    let n = data.get("coins");
    let coins = data.get("moneyType");
    for (let i = 0; i < n; i++) {
        document.querySelector(
            "section"
        ).innerHTML += `<div class = "coinMaker ${coins}"></div>`;
    }
});
document
    .querySelector("#disappear")
    .addEventListener("click", function coins(event) {
        console.log(event.target);

        event.target.remove();
    });

// let coin = document.querySelectorAll("div");

// // disappearCoins.addEventListener('click', () => {
// //     coin.remove()

//     document.getElementById("coinsDiv")
