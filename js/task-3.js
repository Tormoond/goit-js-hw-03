'use strict';
console.log('-------TASK #-3 ------');
function filterArray(numbers, value) {
    // пустой масив
    const newNumbers = [];
    // цикл для итерации каждого елемента и добавление его в масив
    for (let i = 0; numbers.length > i; i++) {
    // условный оператор для проверки каждого обьекта и добавление его в масив
        if (numbers[i] > value) {
            newNumbers.push(numbers[i]);
        }
    }
     return newNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
