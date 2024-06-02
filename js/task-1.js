'use strict';
console.log('-------TASK #-1 ------');

function slugify(title) {
  const slug = title.split(' ').join('-').toLowerCase();
  // Разделение рядка на масив, создаем из рядка нижний регистр, соединяем слова через тире)
  return slug;
  // возвращаем
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
