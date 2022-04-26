// import functions and grab DOM elements
const button1 = document.getElementById('shell-1-button');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');


// let state
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');


// set event listeners 
button1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
})

const randomShell = Math.ceil(Math.random() * 3);
console.log('the random shell is', randomShell);

  // get user input
if (randomShell === 1) {
    shell1.classList.add('reveal');
    wins++;
} else if (randomShell === 2) {
    shell2.classList.add('reveal');
    losses++
} else {
    shell3.classList.add('reveal');
    losses++;
}

  // use user input to update state 


  // update DOM to reflect the new state
winSpan.textContent = wins;
lossSpan.textContent = losses;
totalSpan.textContent = wins + losses;