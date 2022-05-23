// Adding variables to store our data
const userInput = document.querySelector('.guess');
const userLetterPreview = document.querySelector('.name');
const userPricePreview = document.querySelector('#plaquePrice');


// Refactoring with Arrow Function
const countLetters = (some_data) => {
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLetterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLetters(e.target.value)
}
