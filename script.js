const rangeOfCharacter = document.querySelector("#rangeOfCharacter");
const numberOfCharacter = document.querySelector("#NumberOfCharacter");
const passwordGeneratorForm = document.querySelector(".passwordGeneratorForm");
const passwordGeneratorBtn = document.getElementById("passwordGeneratorBtn");
const uppercaseCheckbox = document.getElementById("UppercaseCheckbox")
const numbersCheckbox = document.getElementById("numbersCheckbox")
const symbolCheckbox = document.getElementById("symbolCheckbox")
const passwordDisplay = document.querySelector('.password-input h3')

rangeOfCharacter.addEventListener("input", syncValue);
numberOfCharacter.addEventListener("input", syncValue);

const charCodeUppercase = arrayForRange(65, 90);
const charCodeLowercase = arrayForRange(97, 122);
const charCodeSymbols = arrayForRange(33, 46)
  .concat(arrayForRange(58, 64))
  .concat(arrayForRange(91, 96))
  .concat(arrayForRange(123, 126));
const charCodeNumbers = arrayForRange(48, 57);

function arrayForRange(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

passwordGeneratorForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

passwordGeneratorBtn.addEventListener("click", () => {
  console.log('enter');
  const characterNumbers = numberOfCharacter.value;
  const includeUppercase = uppercaseCheckbox.checked
  const includeNumbers = numbersCheckbox.checked
  const includeSymbols = symbolCheckbox.checked
  const password = generatePassword(
    characterNumbers,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password

});

function generatePassword(characterNumbers, includeUppercase, includeNumbers, includeSymbols){
    const charCode = []
    const password = []
    charCodeLowercase.forEach(char=> charCode.push(char))
    if(includeNumbers) charCodeNumbers.forEach(char => charCode.push(char))
    if(includeUppercase) charCodeUppercase.forEach(char => charCode.push(char))
    if(includeSymbols) charCodeSymbols.forEach(char => charCode.push(char))
    for(let i=0 ; i<characterNumbers ;i++){
        password.push(String.fromCharCode(charCode[Math.floor(Math.random() * charCode.length)]))
    }
    console.log(password);
    return password.join('')
}

function syncValue(e) {
  rangeOfCharacter.value = e.target.value;
  numberOfCharacter.value = e.target.value;
}
