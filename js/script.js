document.addEventListener("DOMContentLoaded", () => {
    let value = localStorage.getItem("coinCount") ? parseInt(localStorage.getItem("coinCount")) : 0;

    const coinValueElement = document.getElementById("coin-value");
    const coinButton = document.getElementById("coin-button");

    // Display the saved coin count
    coinValueElement.textContent = value;

    function increaseCoinValue() {
        value++;
        coinValueElement.textContent = value;
        localStorage.setItem("coinCount", value);
        animateCoin();
    }

    function animateCoin() {
        coinButton.classList.add("shake");
        setTimeout(() => {
            coinButton.classList.remove("shake");
        }, 200);
    }

    coinButton.addEventListener("click", increaseCoinValue);
});