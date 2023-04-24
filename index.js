// Code your solutions in this file

function writeCards(names) {
    var thankYous = [];

    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYous;
}

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
    return
}