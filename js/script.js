 document.addEventListener("DOMContentLoaded", () => {
            // Get saved coin value from local storage, or initialize to 0 if not present
            let value = localStorage.getItem("coinCount") ? parseInt(localStorage.getItem("coinCount")) : 0;

            // Get references to the coin value display element and the coin button
            const coinValueElement = document.getElementById("coin-value");
            const coinButton = document.getElementById("coin-button");

            // Display the saved coin count
            coinValueElement.textContent = value;

            // Function to increase the coin value and update the display and local storage
            function increaseCoinValue() {
                value++;
                coinValueElement.textContent = value;
                localStorage.setItem("coinCount", value); // Save the updated value to local storage
                animateCoin(); // Animate the coin button
            }

            // Function to add a shake animation to the coin button
            function animateCoin() {
                coinButton.classList.add("shake");
                setTimeout(() => {
                    coinButton.classList.remove("shake");
                }, 200); // Remove the animation class after 200ms
            }

            // Add click event listener to the coin button to increase coin value on click
            coinButton.addEventListener("click", increaseCoinValue);
        });
