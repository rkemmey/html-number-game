console.log("HELLO ZULU PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

// generte inclusive random number
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let randomNumber = getRandomInt(1, 100)
console.log(randomNumber)

// print guess to screen
const guessing = (event) => {
    event.preventDefault();

    // grab html div
    let output = document.getElementById('output')

    // get guess convert to num
    const userInput = document.getElementById('user-guess').value; 
    let userGuess = Number(userInput); // convert to a number

    let newGuess = document.createElement('p'); 
    newGuess.innerText = userGuess;

    // text to go with guess
    let text = '';
    if (userGuess > randomNumber) {
        text = "Too high! Try again.";
    } else if (userGuess < randomNumber) {
        text = "Too low! Try again.";
    } else if (userGuess === randomNumber) {
        text = "Congratulations! You guessed it! Generating new number...";
        randomNumber = getRandomInt(1, 100);
        console.log(randomNumber);
        output.innerHTML = '';
    } else {
        text = "Please enter a valid number.";
    }

    let feedback = document.createElement('p');
    feedback.innerText = text;

    // append to html div
    output.appendChild(newGuess);
    output.appendChild(feedback);
    console.log(userGuess); 

    // clear the input field
    event.target.reset();
}





