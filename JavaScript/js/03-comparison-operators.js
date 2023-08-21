// ❗️❗️❗️ Загальні правила порівняння

// Результатом порівняння буде бульове значення - true або false

// При порівнянні різних типів операнди приводяться до числа (крім операторів === та !==)
// null не дорівнює нічому крім себе та undefined.
// undefined не дорівнює нічому крім себе та null.
// NaN не дорівнює нічому, навіть самому собі
// Рядки між собою порівнюються за unicode (посимвольно).


// ❗️❗️❗️ Правила приведення різних типів до числа:

// // true --> 1
// // false --> 0
// // '', а також рядок з пробілами --> 0
// // null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

console.log(Number(null));       // 0
console.log(Number(""));         // 0
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(undefined));  // NaN
console.log(Number("qwerty"));   // NaN
console.log(Number("34"));       // 34


// ❗️❗️❗️ Number()   Приведення до числа
const string = "3";
console.log(string);
console.log(typeof string);    // string

const numb = Number(string);
console.log(numb);             // 3
console.log(typeof numb);      // number


// ❗️❗️❗️ Number.isNaN(val)

const b = "qwerty";
console.log(Number.isNaN(Number(b)));   // true

const toNumber = Number(b);
console.log(Number.isNaN(toNumber))     // true
console.log(toNumber == NaN)            // false  NaN не дорівнює нічому, навіть самому собі



const data = prompt("Enter a number, please");   // input  "qwerty"

const dataToNumber = Number.parseInt(data);      // parse integer
console.log(dataToNumber);                       // NaN якщо немає цифр

const isNaN = Number.isNaN(dataToNumber);        
console.log(isNaN);                              // true


