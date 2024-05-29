const makeChange = (c) => {
  let change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  // Calculate the number of quarters
  change.q = Math.floor(c / 25);
  c = c % 25;

  // Calculate the number of dimes
  change.d = Math.floor(c / 10);
  c = c % 10;

  // Calculate the number of nickels
  change.n = Math.floor(c / 5);
  c = c % 5;

  // The remainder is the number of pennies
  change.p = c;

  return change;
};

// Do not change the code below
const c = parseInt(prompt("Enter c: "));
alert(JSON.stringify(makeChange(c)));
