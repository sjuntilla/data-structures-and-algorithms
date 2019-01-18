// CREATES A FUNCTION THAT REPLICATES THE FUNCTIONALITY OF THE QUICK SORT ALGORITHM! YAY!
const quickSort = (arr) => {
    let copied = arr.slice(); //creates a shallow copy of arr

    if (copied.length < 2) {
        return copied;
    } // if the array's length is smaller than two indices, then you don't need to sort it against itself. your job is done.

    const pivot = copied[Math.floor(Math.random() * copied.length)];
    let right = [];
    let left = [];
    let same = []; // accounts for if the number is the same as the pivot/maybe unnecessary?

    for (let num of copied) { //for any given item in copied...
        if (num > pivot) {
            right.push(num); // if num is greater than the pivot, stick it to the right!
        } else if (num < pivot) {
            left.push(num); // if num is less than the pivot, stick it to the left!
        } else {
            same.push(num); // if num is the same than the pivot, stick it somewhere else!
        }
    }
    return quickSort(left).concat(same).concat(quickSort(right)); // now stick 'em all together!

}

module.exports = quickSort;