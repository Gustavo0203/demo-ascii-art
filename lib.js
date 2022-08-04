const db = {};

function log(...args) {
  db.store(args);
  console.log(...args);
}

function sayHello(arg) {
  log(`Hello ${arg} World`);
}

function sayGoodbye(arg) {
  log(`Goodbye ${arg} World`);
}

function recurse(n) {
  if (n > 0) {
    recurse(n - 1);
    log(n);
  }
}