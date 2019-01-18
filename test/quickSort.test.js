const quickSort = require('../sorting/quickSort.js');

const arr = [1, 2, 3, 4, 5, 5, 6];

if (arr.join('') == quickSort([3, 4, 5, 1, 2, 6, 5]).join('')) {

    console.log('CONGRATION U DONE IT', quickSort(arr));
} else {
    console.log('BETTER LUCK NEXT TIME!!!!  enjoy your unsorted arrays, heathen')
}