// ❗️❗️❗️ Function  ім'я — дієслово

// function declaration
function sayHi() {
  // function body
  console.log("Hello, this is my first function!");
}
// function call
sayHi();

// --------------------------------------

//  В круглих дужках йдуть параметри - перелік даних, які функція очікує під час виклику
//  Параметри - це локальні змінні, доступні тільки у тілі функції.

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

// Під час виклику функції, в круглих дужках можна передати аргументи - значення для оголошених параметрів функції.
// Порядок передачі аргументів повинен відповідати порядку оголошених параметрів.

add(3, 7, 60);

// --------------------------------------

//  ❗️
// Оператор return використовується для передачі значення з тіла функції у зовнішній код

function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 5));

// Результат роботи функції можна зберегти у змінну

let result = multiply(12, 10);
console.log(result);

// --------------- Ex 01-12 --------------------

// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про
// покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.
// повертає повідомлення про замовлення у форматі
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  return message;
}

console.log(makeOrderMessage(14, 490, 100));
