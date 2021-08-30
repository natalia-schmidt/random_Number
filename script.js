const putMessage = (message) => {
    const getDivResult = document.querySelector(".div-result")
    const newElement = document.createElement ("p");
    const newContent = document.createTextNode(message);

    newElement.appendChild(newContent);
    getDivResult.appendChild(newElement);
};

const getUserNumbers = () => {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    getRandomNumber(number1, number2);
}

const getRandomNumber = (start, range) => {
    const getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start);
    }
    putMessage(`Random number: ${getRandom}`);
    return
}
