let paragraph="Java script is easy & Java script is powerful";
let words=paragraph.toLowerCase().replace(/[.,!?]/g,"").split(" ");
let frequency={};

for (let word in words) {
    frequency[words[word]] = (frequency[words[word]] || 0) + 1;
}

for (let word in frequency) {
    console.log(word + ": " + frequency[word]);
}
