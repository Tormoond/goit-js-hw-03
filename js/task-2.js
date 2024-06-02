'use strict';
console.log('-------TASK #-2 ------');

function makeArray(firstArray, secondArray, maxLength) {
  // Создаем новый масив который обьеденяет firstArray и secondArray
  const commonArray = firstArray.concat(secondArray);
  const shortCommonArray = commonArray.slice(0, maxLength);
  // Если количество елементов больше maxLenght то возвращаем "малый" масив
  if (commonArray.length > maxLength) {
    return shortCommonArray;
    // усли нет то возвращаем весь масив
  } else return commonArray;
}



console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
