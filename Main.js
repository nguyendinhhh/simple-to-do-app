const LinkedList = require('./LinkedList');
const mergeSort = require('./merge-sort');
const linkedbag1 = new LinkedList();

linkedbag1.add(2);
linkedbag1.add('aaa');
linkedbag1.add('hahaha');
linkedbag1.display();

console.log('*********MERGE SORT**********');

const list = [2, 3, 4, 1, 2, 5, 5, 4, 2, 4];
console.log(mergeSort(list));
