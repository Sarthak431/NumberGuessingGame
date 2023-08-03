let randomNumber;
let attempts;


function guessNumber() {
    document.querySelector('.container').style.background = "azure";

    document.querySelector("#alert").innerHTML = "";
    const previousPlayAgainButton = document.querySelector(".H");
    if (previousPlayAgainButton) {
        previousPlayAgainButton.remove();
    }
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    attempts = 0;

    document.querySelector("#guess").innerHTML = "<p id='B'>Enter your guess (between 1 and 100) : </p>";
    document.querySelector("#inp").innerHTML = "<input id='G' type='number'/>";
    document.querySelector("#btn").innerHTML = "<button id='D' onclick='checkGuess()'>Enter</button><p id='C'>Note : You can use Enter Key on the keyboard as well to check the number</p>";

    const inputElement = document.querySelector("#G");

    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkGuess();
            inputElement.value = "";
        }
    });
}


function checkGuess() {
    let G = parseInt(document.querySelector("#G").value);
    attempts++;

    if (isNaN(G)) {
        document.querySelector("#alert").innerHTML = "<p class='shake'>Invalid input. Please enter a valid number.</p>";
    } else {
        if (G === randomNumber) {
            document.querySelector("#alert").innerHTML = `<p id='green' class='shake'>Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.</p>`;
            document.querySelector("#guess").innerHTML = "";
            document.querySelector("#inp").innerHTML = "";
            document.querySelector("#btn").innerHTML = "";
            const sibling = document.querySelector("#green");
            sibling.insertAdjacentHTML("afterend", "<button class='H' id='K' onclick='guessNumber()'>Play<br>Again</button> ");
            document.querySelector('.container').style.background = "rgb(240, 255, 245)";

        } else if (G < randomNumber) {
            document.querySelector("#alert").innerHTML = "<p id='red' class='shake'>Too low! Try again</p>";
            document.querySelector('.container').style.background = "rgb(255, 240, 240)";
        } else {
            document.querySelector("#alert").innerHTML = "<p id='red' class='shake'>Too high! Try again</p>";
            document.querySelector('.container').style.background = "rgb(255, 240, 240)";
        }
    }
}