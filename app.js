//? NUMBERS +DECIMALS
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const decimal = document.querySelector("#decimal");

//?CLEAR INPUT
const back = document.querySelector("#back");
const clear = document.querySelector("#clear");

const plusminus = document.querySelector("#plusminus");

//?OPERATORS
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const equal = document.querySelector("#equal");

//?FE
const fe = document.querySelector("#fe");
const input = document.querySelector("#input").children[0];

//?second line
const sqr = document.querySelector("#sqr");
const inv = document.querySelector("#inv");
const man = document.querySelector("#man");
const exp = document.querySelector("#exp");
const mod = document.querySelector("#mod");

//?third line
const root = document.querySelector("#root");
const leftpara = document.querySelector("#leftpara");
const rightpara = document.querySelector("#rightpara");
const fact = document.querySelector("#fact");

zero.addEventListener("click", inputNumber);
one.addEventListener("click", inputNumber);
two.addEventListener("click", inputNumber);
three.addEventListener("click", inputNumber);
four.addEventListener("click", inputNumber);
five.addEventListener("click", inputNumber);
six.addEventListener("click", inputNumber);
seven.addEventListener("click", inputNumber);
eight.addEventListener("click", inputNumber);
nine.addEventListener("click", inputNumber);
decimal.addEventListener("click", inputNumber);

plus.addEventListener("click", inputOperator);
mul.addEventListener("click", inputOperator);
minus.addEventListener("click", inputOperator);
div.addEventListener("click", inputOperator);

equal.addEventListener("click", () => {
  const ip = input.textContent;
  input.textContent = eval(ip).toFixed(8);
});

back.addEventListener("click", () => {
  input.textContent = input.textContent.slice(0, input.textContent.length - 1);
});
clear.addEventListener("click", () => {
  input.textContent = "";
});

plusminus.addEventListener("click", () => {
  input.textContent = Number(input.textContent) * -1;
});

//?second line
sqr.addEventListener("click", () => {
  const ip = Number(input.textContent);
  input.textContent = ip * ip;
});
inv.addEventListener("click", () => {
  const ip = Number(input.textContent);
  input.textContent = (1 / ip).toFixed(8);
});
man.addEventListener("click", () => {
  const ip = Number(input.textContent);
  if (ip < 0) {
    input.textContent = -ip;
  }
});
//TODO: exp and mod

//?third line
root.addEventListener("click", () => {
  const ip = Number(input.textContent);
  const ans = Math.sqrt(ip);
  if (declen(ans)) {
    input.textContent = ans.toFixed(5);
    return;
  }
  input.textContent = ans.toString();
});

fe.addEventListener("click", () => {
  if (!input.textContent.includes("E")) {
    const num = eval(input.textContent);
    //  console.log(num.length);
    const len = numLen(num);
    let tens = 1,
      temp = 0;
    while (temp < len - 1) {
      temp++;
      tens = tens * 10;
    }
    input.textContent = `${num / tens}E${temp}`;

    return;
  }
  if (input.textContent.includes("E")) {
    const arr = input.textContent.split("E");
    console.log(arr);
    let pow = 1;
    while (arr[1] != 0) {
      pow *= 10;
      arr[1]--;
    }

    // console.log();
    input.textContent = Number(arr[0]) * pow;
  }
});

function displayNumber(number) {
  let ip = input.textContent;

  if (ip.length === 15) {
    return;
  }

  if (number === 0 && ip == 0 && ip.length === 1) {
    return;
  }

  if (number === "." && !ip.includes(".")) {
    input.textContent += number;
    return;
  }

  if (number !== ".") input.textContent += number;
}
function inputNumber(e) {
  // console.log(e.currentTarget);
  switch (e.currentTarget.id) {
    case "zero":
      displayNumber(0);
      break;
    case "one":
      displayNumber(1);
      break;
    case "two":
      displayNumber(2);
      break;
    case "three":
      displayNumber(3);
      break;
    case "four":
      displayNumber(4);
      break;
    case "five":
      displayNumber(5);
      break;
    case "six":
      displayNumber(6);
      break;
    case "seven":
      displayNumber(7);
      break;
    case "eight":
      displayNumber(8);
      break;
    case "nine":
      displayNumber(9);
      break;
    case "decimal":
      displayNumber(".");
      break;
  }
}
function inputOperator(e) {
  const id = e.currentTarget.id;
  switch (id) {
    case "plus":
      displayOperator("+");
      break;
    case "minus":
      displayOperator("-");
      break;
    case "mul":
      displayOperator("*");
      break;
    case "div":
      displayOperator("/");
      break;
  }
}

function displayOperator(sign) {
  if (
    input.textContent[input.textContent.length - 1] === sign ||
    input.textContent.length === 15
  ) {
    return;
  }
  input.textContent += sign;
}

//!UTILITY
function declen(num) {
  const arr = num.toString().split(".");
  if (arr[1]) {
    return true;
  }
  return false;
}
const numLen = (num) => {
  let len = 0;
  while (num != 0) {
    len++;
    num = parseInt(num / 10);
  }
  return len;
};
