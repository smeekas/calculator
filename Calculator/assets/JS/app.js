//   ALL VARIALBES USED IN JAVASCRIPT
const input = document.querySelector("#input").children[0];
let degreeToRadian = true;
let disabledMemory = true;
const disabledStyle = ` color: gray;
cursor: not-allowed;`;
const enabledStyle = `cursor:pointer;color:black;`;
let memoryPositiveValue = 0,
  memoryNegativeValue = 0;


  function numberFormat(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
function getInputValue() {
  let  currentValue = input.innerText.replace(/,/g, "");;
  return currentValue;
}
//---------------------------QUERY SELECTORS-------------------------//

//   QUERYSELECTOR ON NUMBER AND DECIMAL
const numberZero = document.querySelector("#zero");
const numberOne = document.querySelector("#one");
const numberTwo = document.querySelector("#two");
const numberThree = document.querySelector("#three");
const numberFour = document.querySelector("#four");
const numberFive = document.querySelector("#five");
const numberSix = document.querySelector("#six");
const numberSeven = document.querySelector("#seven");
const numberEight = document.querySelector("#eight");
const numberNine = document.querySelector("#nine");
const decimalPoint = document.querySelector("#decimal");

//  QUERYSELECTOR ON CLEAR AND BACK BUTTON
const backspace = document.querySelector("#back");
const clearInput = document.querySelector("#clear");

//  OPERATORS
const operatorPlus = document.querySelector("#plus");
const operatorMinus = document.querySelector("#minus");
const operatorMul = document.querySelector("#mul");
const operatorDiv = document.querySelector("#div");

//  upper control
const degreeRadian = document.querySelector("#deg");
const ExponentialDecimal = document.querySelector("#fe");

//  middle control
const memoryRecall = document.querySelector("#mr");
const memoryClear = document.querySelector("#mc");
const memoryPositive = document.querySelector("#mp");
const memoryNegative = document.querySelector("#mn");
const memoryStart = document.querySelector("#ms");

//  first line
const pi = document.querySelector("#pi");
const natural = document.querySelector("#natural");

//  second line
const square = document.querySelector("#sqr");
const inverse = document.querySelector("#inv");
const mod = document.querySelector("#man");
const exponential = document.querySelector("#exp");
const modulo = document.querySelector("#mod");

//  third line
const squareRoot = document.querySelector("#root");
const leftParanthesis = document.querySelector("#lpara");
const rightParanthesis = document.querySelector("#rpara");
const factorial = document.querySelector("#fact");

//  forth line
const xToPowerY = document.querySelector("#xy");

//  fifith line
const tenToPowerX = document.querySelector("#x10");

//  sixth line
const logbase10 = document.querySelector("#log");

//  seventh line
const naturalLog = document.querySelector("#ln");
const plusMinus = document.querySelector("#plusminus");
const equal = document.querySelector("#equal");

//  trigonometry
const sin = document.querySelector("#sin");
const cos = document.querySelector("#cos");
const tan = document.querySelector("#tan");
const cosec = document.querySelector("#cosec");
const sec = document.querySelector("#sec");
const cot = document.querySelector("#cot");

//  fuction
const floor = document.querySelector("#floor");
const ceil = document.querySelector("#ceil");
const manInFunction = document.querySelector("#manInFunction");
const truncate = document.querySelector("#trunc");

//------------------------------EVENT LISTENERS--------------------------//
//  middle control
/**
 * @event memoryStart
 * @description start memory function and enable memory recall and memory clear
 */
memoryStart.addEventListener("click", () => {
  disabledMemory = false;
  memoryClear.style = enabledStyle;
  memoryRecall.style = enabledStyle;
  memoryClear.addEventListener("click", memoryClearEvent);
});

/**
 * @event memoryPositive
 * @description store result in positive manner
 */
memoryPositive.addEventListener("click", () => {
  if (disabledMemory) {
    memoryStart.click();
  }
  memoryPositiveValue = eval(getInputValue());
  input.textContent = "";
});

/**
 * @event memoryNegative
 * @description store result in negative manner
 */
memoryNegative.addEventListener("click", () => {
  if (disabledMemory) {
    memoryStart.click();
  }
  memoryNegativeValue = eval(getInputValue());
  input.textContent = "";
});

/**
 * @event memoryRecall
 * @description add both memory plus and memory minus varialbe and display the result
 */
memoryRecall.addEventListener("click", () => {
  // if (typeof memoryPositiveValue === typeof memoryNegativeValue && typeof memoryPositiveValue === "number") {
  input.textContent = numberFormat( memoryPositiveValue - memoryNegativeValue);
  // }
});

// event listener on numbers
numberZero.addEventListener("click", inputNumber);
numberOne.addEventListener("click", inputNumber);
numberTwo.addEventListener("click", inputNumber);
numberThree.addEventListener("click", inputNumber);
numberFour.addEventListener("click", inputNumber);
numberFive.addEventListener("click", inputNumber);
numberSix.addEventListener("click", inputNumber);
numberSeven.addEventListener("click", inputNumber);
numberEight.addEventListener("click", inputNumber);
numberNine.addEventListener("click", inputNumber);
decimalPoint.addEventListener("click", inputNumber);

// event listener on operators
operatorPlus.addEventListener("click", inputOperator);
operatorMul.addEventListener("click", inputOperator);
operatorMinus.addEventListener("click", inputOperator);
operatorDiv.addEventListener("click", inputOperator);

/**
 * @event equal
 * @description evaluate expression and display the result
 */
equal.addEventListener("click", () => {
  const inputValue = getInputValue();
  const answer = eval(inputValue);

  //if answer has more decimal digits then limit it to 5.
  if (declen(answer)) {
    input.textContent = numberFormat( answer.toFixed(5));
    return;
  }
  input.textContent =numberFormat( answer.toString());
});

//  event listener on back and clear button
/**
 * @event backspace
 * @description clear one letter from back
 */
backspace.addEventListener("click", () => {
  input.textContent = numberFormat( input.textContent.slice(0, input.textContent.length - 1));
});
/**
 * @event clearInput
 * @description clear whole display
 */
clearInput.addEventListener("click", () => {
  input.textContent = "";
});

// plusminus: change sign of number
/**
 * @event plusMinus
 * @description change sign of the number
 */
plusMinus.addEventListener("click", () => {
  //if input is in exponential form then change sign accordingly
  if (input.textContent.includes("e")) {
    const arr = input.textContent.split("e");
    arr[1] *= -1;
    input.textContent = `${arr[0]}e${arr[1]}`;
    return;
  }
  input.textContent = Number(getInputValue())*-1;
});

//  first line

// PI: display PI(3.14159)
/**
 * @event pi
 * @description display PI (3.14159)
 */
pi.addEventListener("click", () => {
  if (input.textContent.length === 0) {
    input.textContent = Math.PI;
  } else {
    input.textContent += Math.PI.toFixed(3);
  }
});

// natural: display e(2.71828)
/**
 * @event natural
 * @description display e(2.71828)
 */
natural.addEventListener("click", () => {
  input.textContent = Math.E;
});

//  second line

/**
 * @event square
 * @description squares the input number
 */
square.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  input.textContent =numberFormat( inputValue * inputValue);
});

/**
 * @event inverse
 * @description inerses the input number
 */
inverse.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  input.textContent = numberFormat((1 / inputValue).toFixed(8));
});

/**
 * @event mod
 * @description mod the input number
 */

mod.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  if (inputValue < 0) {
    input.textContent = -inputValue;
  }
});

/**
 * @event modulo
 * @description find the reminder
 */

modulo.addEventListener("click", () => {
  input.textContent += "%";
});

// exp: let user input in exponential form

/**
 * @event exponential
 * @description let user input the number in exponential form
 */
exponential.addEventListener("click", () => {
  input.textContent += "e+";
});

//  third line

/**
 * @event root
 * @description find the square root of given number
 */
squareRoot.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  if (inputValue < 0) {
    return;
  }
  const answer = Math.sqrt(inputValue);
  if (declen(answer)) {
    input.textContent =numberFormat( answer.toFixed(5));
    return;
  }
  input.textContent =numberFormat( answer.toString());
});

// lpara: left paranthesis
/**
 * @event leftParanthesis
 * @description display left paranthesis
 */

leftParanthesis.addEventListener("click", () => {
  input.textContent += "(";
});

/**
 * @event rightParanthesis
 * @description display right paranthesis
 */
rightParanthesis.addEventListener("click", () => {
  input.textContent += ")";
});

/**
 * @event factorial
 * @description find factorial of given number
 */
factorial.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  let answer = 1;
  for (let i = 1; i <= inputValue; i++) {
    answer *= i;
  }

  //if answer is too big convert it to exponential form
  if (numLen(answer) > 20) {
    input.textContent = toExponential(answer);
    return;
  }
  input.textContent = numberFormat( answer);
});

//  forth line

/**
 * @event xToPowerY
 * @description find x to the power y
 */
xToPowerY.addEventListener("click", () => {
  input.textContent += "**";
});

//  fifth line

/**
 * @event tenToPowerX
 * @description find 10^x
 */
tenToPowerX.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  input.textContent = numberFormat( Math.pow(10, inputValue));
});

//  sixth line

/**
 * @event logbase10
 * @description find log x base 10
 */
logbase10.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  input.textContent = numberFormat(Math.log10(inputValue));
});

//  seventh line

/**
 * @event naturalLog
 * @description find natural log of given number
 */

naturalLog.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  input.textContent = numberFormat(Math.log(inputValue));
});

//  trigonometry
/**
 * @event sin
 * @description find sin of given radian
 */
sin.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent = numberFormat( Math.sin(inputValue));
});

/**
 * @event cos
 * @description find cos of given radian
 */

cos.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent = numberFormat( Math.cos(inputValue));
});

/**
 * @event tan
 * @description find tan of given radian
 */

tan.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent = numberFormat( Math.tan(inputValue));
});

/**
 * @event cosec
 * @description find cosec of given radian
 */

cosec.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent = numberFormat( 1 / Math.sin(inputValue));
});

/**
 * @event sec
 * @description find sec of given radian
 */

sec.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent = numberFormat( 1 / Math.cos(inputValue));
});

/**
 * @event cot
 * @description find cot of given radian
 */

cot.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent =numberFormat( 1 / Math.tan(inputValue));
});

//  fuction
/**
 * @event floor
 * @description find floor  of given number
 */
floor.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent =numberFormat( Math.floor(inputValue));
});
/**
 * @event ceil
 * @description find ceil of given number
 */
ceil.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent =numberFormat( Math.ceil(inputValue));
});
/**
 * @event truncate
 * @description truncate the given number
 */
truncate.addEventListener("click", () => {
  const inputValue = eval(getInputValue());
  input.textContent = umberFormat(Math.floor(inputValue));
});
/**
 * @event manInFunction
 * @description mod the input number
 */
manInFunction.addEventListener("click", () => {
  const inputValue = Number(getInputValue());
  if (inputValue < 0) {
    input.textContent = -inputValue;
  }
});
//  upper control

/**
 * @event degreeRadian
 * @description convert degree to radian and vice versa
 */
degreeRadian.addEventListener("click", () => {
  if (degreeToRadian) {
    //deg to rad
    degreeRadian.textContent = "RAD";
    input.textContent =numberFormat(( (eval(getInputValue())) * Math.PI) / 180);
    degreeToRadian = !degreeToRadian;
  } else {
    //rad to deg
    degreeRadian.textContent = "DEG";
    input.textContent =numberFormat( (eval(getInputValue()) / Math.PI) * 180);
    degreeToRadian = !degreeToRadian;
  }
});

// fe: exponential to decimal and vice versa

/**
 * @event ExponentialDecimal
 * @description convert exponential number to decimal and vice versa
 */
ExponentialDecimal.addEventListener("click", () => {
  if (getInputValue().length === 0) {
    return;
  }
  const answer = eval(getInputValue());
  if (!input.textContent.includes("e")) {
    input.textContent = answer.toExponential();

    return;
  }
  if (input.textContent.includes("e")) {
    input.textContent =numberFormat( answer.toString());
  }
});

/**
 * @function displayNumber
 * @description display the number on screen
 */
function displayNumber(number) {
  let inputValue = getInputValue();
  //below if take care that user can't press multiple zeros if display is empty
  if (number === 0 && inputValue == 0 && inputValue.length === 1) {
    return;
  }
  //below if used for displaying decimal point
  if (number === "." && !inputValue.includes(".")) {
    input.textContent += number;
    return;
  }
  //below if used to display number
  if (number !== ".") input.textContent += number;
  input.textContent=numberFormat(getInputValue())
}

/**
 * @function inputNumber
 * @description according to pressed button it call dispay number fuction to display the number
 */
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

/**
 * @function inputOperator
 * @description according to pressed button it call dispay operator fuction to display the operator
 */

function inputOperator(e) {
  switch (e.currentTarget.id) {
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

//  clears the memory variable
/**
 * @function memoryClearEvent
 * @description clear the memory varialbe
 */

function memoryClearEvent() {
  disabledMemory = true;
  memoryClear.style = disabledStyle;
  memoryRecall.style = disabledStyle;
  memoryPositiveValue = 0;
  memoryNegativeValue = 0;
  memoryClear.removeEventListener("click", memoryClearEvent);
}

/**
 * @function displayOperator
 * @description display the operator according to received argument
 */

function displayOperator(sign) {
  if (input.textContent[input.textContent.length - 1] === sign) {
    return;
  }
  input.textContent += sign;
}

// UTILITY
/**
 * @function declen
 * @description check whether number is float or not
 */

function declen(num) {
  const arr = num.toString().split(".");
  if (arr[1]) {
    return true;
  }
  return false;
}

/**
 * @function numLen
 * @description find length of number
 */

const numLen = (num) => {
  let len = 0;
  while (num != 0) {
    len++;
    num = parseInt(num / 10);
  }
  return len;
};

/**
 * @function toExponential
 * @description convert number to exponential form
 */

const toExponential = (inputValue) => {
  const num = eval(inputValue);
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
