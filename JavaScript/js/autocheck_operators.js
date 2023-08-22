// ❗️❗️❗️ Operators

// AND - &&
// OR  - ||
// NOT - !

// --------------- Ex 01-21 --------------------

function isNumberInRange(start, end, number) {        // є число в діапазоні

  const isInRange = number >= start && end >= number; // AND

  const isNotInRange = !isInRange;                    // NOT

  return isNotInRange;
}
console.log(isNumberInRange(10, 30, 17));             // false тому шо зробили інверсію

