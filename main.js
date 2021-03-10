const message1 = ["Today I must remember to", "If in doubt", "Before the end of the week I should try to", "Never forget to", "Before I die I want to", "A wise person once said the best way to celebrate is to"];
const message2 = ["drink coffee", "drink tea", "work hard", "go swimming", "sing to a bear", "learn to fly", "snorkel with manatees", "drink champagne"];
const message3 = ["buy something on the internet", "think of someone else", "go for a bike ride", "snorkel with orca", "feed a badger"];

function randNum(array){
    let rand = Math.floor(Math.random() * array.length);
    return rand;
}

function thoughtForDay(){
    let string = `${message1[randNum(message1)]} ${message2[randNum(message2)]} and ${message3[randNum(message3)]}.`
    return string;
}

console.log(thoughtForDay());