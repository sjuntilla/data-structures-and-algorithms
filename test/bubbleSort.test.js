const bubbleSort = require('../sorting/bubbleSort.js');

const arr = [1, 2, 3, 4];

if (arr.join('') == bubbleSort([3, 4, 1, 2]).join('')) {
    console.log('CONGRATION U DONE IT', bubbleSort(arr));
} else {
    console.log('BETTER LUCK NEXT TIME!!!! hope u like disorderly arrays, pleb')
}