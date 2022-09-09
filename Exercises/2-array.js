'use strict';

const array = () => {
  const data = [];
  const get = (i) => data[i];
  get.push = (x) => data.push(x);  // Получение метода push через getter
  get.unshift = (x) => data.unshift(x);
  get.pop = () => data.pop();
  return get;
};

const arr = array();

arr.push('first');
arr.unshift('second');

console.log(arr(0));

module.exports = { array };
