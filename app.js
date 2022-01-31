//? ALL VARIALBES USED IN JAVASCRIPT
const input = document.querySelector("#input").children[0];
let degrad = true;
let disabled = true;
let disabledStyle = ` color: gray;
cursor: not-allowed;`;
let enabledStyle = `cursor:pointer;color:black;`;
let memoryp, memoryn;

//---------------------------QUERY SELECTORS-------------------------//

//? QUERYSELECTOR ON NUMBER AND DECIMAL
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

//?QUERYSELECTOR ON CLEAR AND BACK BUTTON
const back = document.querySelector("#back");
const clear = document.querySelector("#clear");

//?OPERATORS
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");

//?upper control
const deg = document.querySelector("#deg");
const fe = document.querySelector("#fe");

//?middle control
const mr = document.querySelector("#mr");
const mc = document.querySelector("#mc");
const mp = document.querySelector("#mp");
const mn = document.querySelector("#mn");
const ms = document.querySelector("#ms");

//?first line
const pi = document.querySelector("#pi");
const natural = document.querySelector("#natural");

//?second line
const sqr = document.querySelector("#sqr");
const inv = document.querySelector("#inv");
const man = document.querySelector("#man");
const exp = document.querySelector("#exp");
const mod = document.querySelector("#mod");

//?third line
const root = document.querySelector("#root");
const lpara = document.querySelector("#lpara");
const rpara = document.querySelector("#rpara");
const fact = document.querySelector("#fact");

//?forth line
const xy = document.querySelector("#xy");

//?fifith line
const x10 = document.querySelector("#x10");

//?sixth line
const log = document.querySelector("#log");

//?seventh line
const ln = document.querySelector("#ln");
const plusminus = document.querySelector("#plusminus");
const equal = document.querySelector("#equal");

//?trigonometry
const sin = document.querySelector("#sin");
const cos = document.querySelector("#cos");
const tan = document.querySelector("#tan");

//?fuction
const floor = document.querySelector("#floor");
const ceil = document.querySelector("#ceil");

//------------------------------EVENT LISTENERS--------------------------//
//?middle control
//* Memory start: start memory functionality
ms.addEventListener("click", () => {
  disabled = false;
  mc.style = enabledStyle;
  mr.style = enabledStyle;
  mc.addEventListener("click", memoryclear);
});

//*memory plus: store result in positive manner
mp.addEventListener("click", () => {
  if (disabled) {
    ms.click();
  }
  memoryp = eval(input.textContent);
  input.textContent = "";
});

//*memory minus: store result in negative manner
mn.addEventListener("click", () => {
  if (disabled) {
    ms.click();
  }
  memoryn = eval(input.textContent);
  input.textContent = "";
});

//*memory recall: add both memory plus and memory minus varialbe and display the result
mr.addEventListener("click", () => {
  if (typeof memoryp === typeof memoryn && typeof memoryp === "number") {
    input.textContent = memoryp - memoryn;
  }
});

//*event listener on numbers
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


//*event listener on operators
plus.addEventListener("click", inputOperator);
mul.addEventListener("click", inputOperator);
minus.addEventListener("click", inputOperator);
div.addEventListener("click", inputOperator);


//*equal: evaluate expression and display the result
equal.addEventListener("click", () => {
  const ip = input.textContent;
  const ans = eval(ip);
  if (declen(ans)) {
    input.textContent = ans.toFixed(5);
    return;
  }
  input.textContent = ans.toString();
});


//* event listener on back and clear button
back.addEventListener("click", () => {
  input.textContent = input.textContent.slice(0, input.textContent.length - 1);
});
clear.addEventListener("click", () => {
  input.textContent = "";
});


//*plusminus: change sign of number
plusminus.addEventListener("click", () => {
  if (input.textContent.includes("e")) {
    const arr = input.textContent.split("e");
    arr[1] *= -1;
    input.textContent = `${arr[0]}e${arr[1]}`;
    return;
  }
  input.textContent = Number(input.textContent) * -1;
});

//?first line

//*PI: display PI(3.14159)
pi.addEventListener("click", () => {
  if (input.textContent.length === 0) {
    input.textContent = Math.PI;
  } else {
    input.textContent += Math.PI.toFixed(3);
  }
});

//*natural: display e(2.71828)
natural.addEventListener("click", () => {
  input.textContent = Math.E;
});


//?second line

//*sqr: squares the input number
sqr.addEventListener("click", () => {
  const ip = Number(input.textContent);
  input.textContent = ip * ip;
});

//*inv: inverses the input number
inv.addEventListener("click", () => {
  const ip = Number(input.textContent);
  input.textContent = (1 / ip).toFixed(8);
});

//* man: mod the input number
man.addEventListener("click", () => {
  const ip = Number(input.textContent);
  if (ip < 0) {
    input.textContent = -ip;
  }
});

//*mod: find the reminder
mod.addEventListener("click", () => {
  input.textContent += "%";
});

//*exp: let user input in exponential form
exp.addEventListener("click", () => {
  input.textContent += "e+";
});


//?third line

//*root: find square root of given number
root.addEventListener("click", () => {
  const ip = Number(input.textContent);
  if(ip<0){
    return;
  }
  const ans = Math.sqrt(ip);
  if (declen(ans)) {
    input.textContent = ans.toFixed(5);
    return;
  }
  input.textContent = ans.toString();
});


//*lpara: left paranthesis
lpara.addEventListener("click", () => {
  input.textContent += "(";
});

//*rpara: right paranthesis
rpara.addEventListener("click", () => {
  input.textContent += ")";
});


//*fact: find factorial of given number
fact.addEventListener("click", () => {
  const ip = Number(input.textContent);
  let ans = 1;
  for (let i = 1; i <= ip; i++) {
    ans *= i;
  }
  if (numLen(ans) > 10) {
    input.textContent = toE(ans);
    return;
  }
  input.textContent = ans;
});

//?forth line

//*xy: find x^y
xy.addEventListener("click", () => {
  input.textContent += "**";
});

//?fifth line

//*x10: find 10^x
x10.addEventListener("click", () => {
  const ip = Number(input.textContent);
  input.textContent = Math.pow(10, ip);
});

//?sixth line

//*log: find log x base 10
log.addEventListener("click", () => {
  const ip = Number(input.textContent);
  input.textContent = Math.log10(ip);
});

//?seventh line

//*ln: find natural log of given number
ln.addEventListener("click", () => {
  const ip = Number(input.textContent);
  input.textContent = Math.log(ip);
});

//?trigonometry
sin.addEventListener("click", () => {
  const ip = eval(input.textContent);
  input.textContent = Math.sin(ip);
});

cos.addEventListener("click", () => {
  const ip = eval(input.textContent);
  input.textContent = Math.cos(ip);
});

tan.addEventListener("click", () => {
  const ip = eval(input.textContent);
  input.textContent = Math.tan(ip);
});

//?fuction
floor.addEventListener("click", () => {
  const ip = eval(input.textContent);
  input.textContent = Math.floor(ip);
});
ceil.addEventListener("click", () => {
  const ip = eval(input.textContent);
  input.textContent = Math.ceil(ip);
});


//?upper control

//*deg: DEGREE to RADIAN and vice versa
deg.addEventListener("click", () => {
  if (degrad) {
    //deg to rad
    deg.textContent = "RAD";
    input.textContent = (eval(input.textContent) * Math.PI) / 180;
    degrad = !degrad;
  } else {
    //rad to deg
    deg.textContent = "DEG";
    input.textContent = (eval(input.textContent) / Math.PI) * 180;
    degrad = !degrad;
  }
});

//*fe: exponential to decimal and vice versa
fe.addEventListener("click", () => {
  if (input.textContent.length === 0) {
    return;
  }
  const num = eval(input.textContent);
  if (!input.textContent.includes("e")) {
    input.textContent = num.toExponential();

    return;
  }
  if (input.textContent.includes("e")) {
    input.textContent = num.toString();
  }
});


//* display the number on screen
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

//* according to pressed button it call dispay number fuction to display the number
function inputNumber(e) {
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

//* according to pressed button it call dispay operator fuction to display the operator
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

//* clears the memory variable
function memoryclear() {
  disabled = true;
  mc.style = disabledStyle;
  mr.style = disabledStyle;
  memoryp = 0;
  memoryn = 0;
  mc.removeEventListener("click", mcel);
}


//*display the operator according to received argument
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
//*check whether number is float or not
function declen(num) {
  const arr = num.toString().split(".");
  if (arr[1]) {
    return true;
  }
  return false;
}

//*find length of number
const numLen = (num) => {
  let len = 0;
  while (num != 0) {
    len++;
    num = parseInt(num / 10);
  }
  return len;
};

//* convert number to exponential form
const toE = (ip) => {
  const num = eval(ip);
  //  console.log(num.length);
  const len = numLen(num);
  let tens = 1,
    temp = 0;
  while (temp < len - 1) {
    temp++;
    tens = tens * 10;
  }
  return `${num / tens}E${temp}`;
};
