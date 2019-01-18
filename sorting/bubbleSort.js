//CREATES A FUNCTION THAT REPLICATES BUBBLE SORT! YAY!
const bubbleSort = (arr) => {
    let copied = arr.slice(); //creates a shallow copy of the array
    let swap; // serves as the 'switch' for the do...while loop
    do {
        swap = false; //sets the switch for the following code block to execute while it's in effect
        for (let i = 0; i < copied.length - 1; ++i) { //iterates through the length of the array
            if (copied[i] > copied[i + 1]) { // if number at any given index is greater than number at next index...
                [copied[i], copied[i + 1]] = [copied[i + 1], copied[i]]; // switches their indices! in theory.
                swap = true; // flip that do...while switch!
            }
        }
    }
    while (swap === true) { // sets conditional for what happens when that do...while switch is flipped
        return copied; //returns the shallow copy of the array, ideally with everything sorted correctly
    }
}

module.exports = bubbleSort;