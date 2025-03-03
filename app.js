console.log("HELLO ZULU PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

// print guess to screen
const guessing = (event) => {
    event.preventDefault();
    // get form info
    const formData = new FormData(event.target);
    const formatData = Object.fromEntries(formData);
    //console.log(formatData);

    // grab html
    let output = document.getElementById('output')
    // output.innerText = `${formatData.guess}`

    // append the new guess to output
    let newGuess = document.createElement('p');  
    newGuess.innerText = formatData.guess;  
    output.appendChild(newGuess);  // add to outpus div

    // clear the input field
    event.target.reset();
}

// generte inclusive random number
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let randomNumber = getRandomInt(1, 100)

// get guess
const getGuess = () => {
    const userInput = document.getElementById('user-guess').value; 
    const userGuess = Number(userInput); // convert to a number
    console.log(userGuess); 
};