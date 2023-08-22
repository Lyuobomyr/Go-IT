// ❗️❗️❗️ Branching  -  Розгалуження використовуються для виконання різного коду, залежно від умови.
//                     Pезультат виразу в умові блоку if приводиться до буля true або false.

// if else, else if

// --------------- Ex 01-15 --------------------

function checkAge(age) {
  let message;

  if (age >= 18) {
    // if body
    message = "You are an adult";
  } else {
    // else body
    message = "You are a minor";
  }

  return message;
}
console.log(checkAge(20));

// --------------- Ex 01-16 --------------------

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:
// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you."

function checkStorage(available, ordered) {
  let message;

  if (available >= ordered) {
    message = "Order is processed, our manager will contact you.";
  } else {
    message = "Not enough goods in stock!";
  }
  return message;
}

console.log(checkStorage(13, 13));

// ---------------- else if ----------------------

let cost;
const subscription = prompt(
  'Choose your subscription type amongst: "free", "pro" or "premium"'
);

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

console.log(cost);
