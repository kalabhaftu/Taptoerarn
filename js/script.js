document.addEventListener("DOMContentLoaded", () => {
    let value = 0;

    const coinValueElement = document.getElementById("coin-value");
    const coinButton = document.getElementById("coin-button");

    function increaseCoinValue() {
        value++;
        coinValueElement.textContent = value;
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
