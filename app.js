let bulls = 0;

function getHint(secret, guess) {
    bulls = 0;
    let cows = 0;
    let numbers = new Array(10);
    for (let i = 0; i < 10; i++) {
        numbers[i] = 0;
    }
    for (let i = 0; i < secret.length; i++) {
        let s = secret.charCodeAt(i) - 48;
        let g = guess.charCodeAt(i) - 48;
        if (s == g) bulls++;
        else {
            if (numbers[s] < 0) 
           { console.log(s); 
            cows++;}
            if (numbers[g] > 0) cows++;
            numbers[s]++;
            numbers[g]--;
        }
    }
    return "Bulls: " + bulls + "; Cows: " + cows + ";";
}

function uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}
let rand = uniq((Math.random() * 10000).toFixed(0).split('')).join('');

while (rand < 1000) {
rand = uniq((Math.random() * 10000).toFixed(0).split('')).join('');
}
console.log(rand);

let attempts = 1;
const reader = require("readline-sync"); 
while (true) {
    let guess = reader.question("Attempt: ");
    if (guess.length > 4) {
        continue;
    }
    if (guess != rand) {
        console.log(getHint(rand, guess));
        attempts++;
    } else {
        console.log(`You guessed the number! Attempts: ${attempts}`);
        break;
    }
}