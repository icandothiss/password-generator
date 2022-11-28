const generate = document.getElementById("generate");
const length = document.getElementById("length");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const result = document.getElementById("result");
const clipboard = document.getElementById("clipboard");
// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandom() {
  let allChars = [
    { key: getRandomUpper(), value: "upper" },
    { key: getRandomLower(), value: "lower" },
    { key: getRandomNumber(), value: "number" },
    { key: getRandomSymbol(), value: "symbol" },
  ];
  let deleteIndex;

  if (!upperCase.checked) {
    for (let index = 0; index < allChars.length; index++) {
      if (allChars[index].value === "upper") {
        deleteIndex = index;
      }
    }
    allChars.splice(deleteIndex, 1);
  }
  if (!lowerCase.checked) {
    for (let index = 0; index < allChars.length; index++) {
      if (allChars[index].value === "lower") {
        deleteIndex = index;
      }
    }
    allChars.splice(deleteIndex, 1);
  }
  if (!numbers.checked) {
    for (let index = 0; index < allChars.length; index++) {
      if (allChars[index].value === "number") {
        deleteIndex = index;
      }
    }
    allChars.splice(deleteIndex, 1);
  }
  if (!symbols.checked) {
    for (let index = 0; index < allChars.length; index++) {
      if (allChars[index].value === "symbol") {
        deleteIndex = index;
      }
    }
    allChars.splice(deleteIndex, 1);
  }
  let numOfChecked = [
    upperCase.checked + lowerCase.checked + numbers.checked + symbols.checked,
  ][0];
  if (numOfChecked > 0) {
    console.log("y");
    let finalResult = allChars.map(({ key, value }) => ({ key }));
    let exemple = finalResult[Math.floor(Math.random() * allChars.length)].key;
    return exemple;
  } else {
    exemple = "";
    return exemple;
  }
}

generate.addEventListener("click", () => {
  let passWordLength = length.value;
  let resultPassword = "";
  for (let index = 0; index < passWordLength; index++) {
    resultPassword += getRandom();
  }
  result.textContent = resultPassword;
  console.log(resultPassword);
});

clipboard.addEventListener("click", () => {
  console.log("f");
  // Copy the text inside the text field
  navigator.clipboard.writeText(result.innerText);

  // Alert the copied text
  alert("Copied the text: " + result.innerText);
});
