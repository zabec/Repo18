
// Only change code below this line

let fifteenArray = [];
const iterator = myGenerator();

function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  for (let i = 1; i <= 5; i++) {
    yield i;
  }
}

function* insideGenerator2() {
  for (let i = 10; i <= 15; i++) {
    yield i;
  }
}

function* insideGenerator3() {
  for (let i = 6; i <= 9; i++) {
    yield i;
  }
}

for (let i = 0; i <= 15; i++){
  let val = iterator.next();
  fifteenArray.push(val.value + (val.done ? "!" : "#"));
}

console.log(fifteenArray.join(', '));

// Only change code above this line
module.exports = { fifteenArray, myGenerator };