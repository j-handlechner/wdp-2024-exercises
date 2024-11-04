// First half of the pattern
for (let i = 1; i <= 4; i += 2) {
    let line = ""; // this holds the information of our current line.

    for (let j = 1; j <= i; j++) {
        line = line + "*"; // add however many stars we need for the current line
    }

    console.log(line); // print the line
}

// Second half of the pattern
for (let i = 3; i >= 1; i--) {
    let line = "";
    for (let k = 1; k <= 4 - i; k++) {
        line += " ";
    }
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}