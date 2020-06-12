


let rate = 0;
let sum = 0;
let years = 0;
let appendingValue = 0;

class DomElement {

  constructor (domType) {
    this.element = document.createElement(domType);
  }

  withId(id) {
    this.element.id = id;
    return this;
  }

  withInnerHtml(html) {
    this.element.innerHTML = html;
    return this;
  }

  build() {
    return this.element;
  }

}

createInputs();


const button = elementById("CalculateButton");
button.onclick = calcIntrest;
const resultContainter = elementById("Result");


async function calcIntrest() {
  console.log("Calculate intrest..");

  rate = elementById("RateInput").value;
  sum = elementById("SumInput").value;
  years = elementById("YearsInput").value;
  appendingValue = elementById("Appending valueInput").value;

  let newSum = sum;
  clearChildren(resultContainter);

  let element = newElement('p');
  resultContainter.appendChild(element)
  element.innerHTML = `${0}: ${newSum}`;;

  for (let i = 1; i < Number(years) + 1; i++) {
    element = newElement('p');
    resultContainter.appendChild(element)

    newSum = Number(newSum) + Number(appendingValue);
    newSum = newSum * ((rate / 100) + 1);
    element.innerHTML = `${i}: ${newSum}`;;
  }

}

/*
async function promptValue(question) {
  return new Promise(resolve => {
    prompter.question(question, answer => {
      resolve(answer)
    });
  })
}
*/

function createInputs() {

  const inputs = [
    "Rate",
    "Sum",
    "Years",
    "Appending value"
  ];

  const inputsContainer = elementById("inputsContainer");

  inputs.forEach(input => {
    const inputContainter = newElement("div");


    const inputText = new DomElement("p").withInnerHtml(input + ": ").build();

    const inputElement = newElement("input");
    inputElement.id = input + "Input";

    console.log(inputText);
    inputContainter.appendChild(inputText);
    inputContainter.appendChild(inputElement);

    inputsContainer.appendChild(inputContainter);
  })
}

function clearChildren(element) {
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
  }
}

function newElement(type)  {
  return document.createElement(type);
}

function elementById(id) {
  return document.getElementById(id);
}

function elementsByClass(className) {
  return document.getElementsByClass(className);
}
