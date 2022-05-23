const buyNow = (letter) => {
  if (letter === "") {
    alert("Please enter some letters");
    return;
  }

  if (letter.length > 15) {
    alert("Sorry, you have exceeded the number of available letters");
    return;
  }

  if (letter === "YOUR NAME") {
    alert("Please enter custom letters");
    return;
  }
  alert("Congratulations, your name has been saved!");
};

const buyBtn = document.getElementById("buy_btn");
const input = document.getElementById("guessField");

buyBtn.onclick = () => {
  const letters = input.value.trim().toUpperCase();
  buyNow(letters);
};
