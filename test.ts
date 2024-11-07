document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", () => {
            alert("Start button clicked! Welcome to the web app.");
        });
    }
});

