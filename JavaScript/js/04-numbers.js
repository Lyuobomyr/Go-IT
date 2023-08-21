// ❗️❗️❗️  toFixed

const num1 = 0.3; 
const num2 = 0.6;
const sum1 = num1 + num2; // 0.8999999999999999  Це тому що машина рахує у двійковій системі
console.log(sum1 === 0.9) // false   

// Можна зробити їх цілими, помноживши на N, додати, а потім результат поділити також на N.
console.log((num1 * 100 + num2 * 100) / 100);  // 0.9


//Ще один спосіб - додати, а результат скоротити до певного знаку після коми за допомогою методу toFixed()
console.log(sum1.toFixed(1));  // повертає завжди string


const fixedSum1 = Number(sum1.toFixed(2));
console.log(fixedSum1);        // 0.9



console.log(0.17 + 0.24); // 0.41000000000000003
console.log(Number((0.17 + 0.24).toFixed(2))); // 0.41




// ❗️❗️❗️  Клас Math 
