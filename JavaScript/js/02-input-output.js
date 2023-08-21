
// ---- Виведення даних console.log() i alert() ----

//   Як window.alert() блокує інтерпретацію  
window.console.log("До");
alert("qweqweqwe");
console.log("Після");


    
// ---- Отримання даних confirm() i prompt() ----


// confirm
// Ok = true;  Cancel = false;

const isComing = confirm("Please confirm hotel reservation");
console.log(isComing); 

// prompt
// Ok = що ввів користувач; Cancel = null;

const value = prompt("Please enter a number!"); // input 5
console.log(typeof value);   // "string" завжди повернеться рядок
console.log(value); // "5"