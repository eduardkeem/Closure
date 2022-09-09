'use strict';

const hash = () => {
  const data = {};
  let counter = 0;
  return (key, value) => {
    data[key] = value;
    counter++;
    console.dir({ counter });
    return data;
  };
};

// Usage

const h1 = hash();       // Присвоение к переменной и создание новой функции h1, которую можно вызвать

h1('name', 'Marcus');
h1('city', 'Roma');
const obj1 = h1('born', 121);
console.dir({ obj1 });
