const rollButton = document.querySelector('.btn')
const numberOfDice = document.querySelector('.number-of-dice')
const diceResult = document.querySelector('.dice-result')
const diceImages = document.querySelector('.dice-images')
const diceTotal = document.querySelector('.dice-total')


function rollDice() {

    let values = [];
    let images = [];
    let total;

    for (let i = 0; i < numberOfDice.value; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice-${value}.png" alt="images">`)
    }


    total = values.reduce(getTotal);

    function getTotal(accumulator, element) {
        return accumulator + element;
    }


    diceResult.innerHTML = `Dice Result : <span>${values.join(", ")}</span>`
    diceImages.innerHTML = images.join(" ");
    diceTotal.innerHTML = `Total Dice: <span>${total}</sapn>`

    setTimeout(() => {
        diceResult.classList.add("visible");
        diceImages.classList.add("visible");
    }, 10);
}

rollButton.addEventListener('click', () => {
    diceResult.classList.remove("visible");
    diceImages.classList.remove("visible");

    rollDice();
});

numberOfDice.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        diceResult.classList.remove("visible");
        diceImages.classList.remove("visible");
        rollDice();
    }
})
