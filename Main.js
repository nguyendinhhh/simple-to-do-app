const LinkedList = require('./LinkedList');
const mergeSort = require('./merge-sort');
// let linkedbag1;
// window.onload = function () {
//     linkedbag1 = new LinkedList();
// }

// linkedbag1.add(2);
// linkedbag1.add('aaa');
// linkedbag1.add('hahaha');
// linkedbag1.display();
// linkedbag1.clear();
// console.log('*********DELETE ALL**********');
// linkedbag1.display();

console.log('*********MERGE SORT**********');

const list = [2, 3, 4, 1, 2, 5, 5, 4, 2, 4];
console.log(mergeSort(list));

const array = [{taskName: 'Clean', priorityLevel: 2}, 
{taskName: 'eat', priorityLevel: 5},{taskName: 'sleep', priorityLevel: 3}];

console.log(mergeSort(array));
