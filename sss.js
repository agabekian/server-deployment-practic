const isEven = num => {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0)
            resolve(true); // Even number
        else
            reject(false); // Odd number
    });
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Iterate through the arr with our callback isEven
for (let n of arr) {
    // Call isEven function for each number
    isEven(n)
        .then(result => {
            console.log(n, 'is even?', result);
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}

const axios = require('axios');

async function getCharacters() {
    try {
        const response = await axios.get('https://swapi.dev/api/people/');
        const characters = response.data.results.reduce((acc, character) => {
            acc[character.name] = character.url;
            return acc;
        }, {});
        console.log(JSON.stringify(characters, null, 2));
        // JSON.stringify(value, replacer, space (actual white spaces)
    } catch (error) {
        console.error('Error fetching characters:', error.message);
    }
}

getCharacters();

function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100); // Random number between 0 and 99
            resolve(randomNumber);
        }, 500); // Resolves after 0.5 seconds
    });
}

// Asynchronous function that invokes getRandomNumber and prints the random number
async function printRandomNumber() {
    try {
        const randomNumber = await getRandomNumber();
        console.log('Random number:', randomNumber);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Invoke the async function
printRandomNumber();