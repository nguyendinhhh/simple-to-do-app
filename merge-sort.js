// Split the array into halves and merge them recursively
function mergeSort (arr){
    if (arr.length == 1){
        return arr; // Return if the array has 1 item
    }

    const middle = Math.floor(arr.length/2); // Get the middle item of the array rounded down
    const left = arr.slice(0, middle); // Items on the left side
    const right = arr.slice(middle); // Items on the right side

    return merge(mergeSort(left), mergeSort(right));
}

// Compare the arrays item by item and return the concatenated result
function merge(left, right){
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length){
        if (left[indexLeft] < right[indexRight]){
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++; 
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
module.exports = mergeSort;

