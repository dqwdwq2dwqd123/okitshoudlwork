let currentQuestion = 1;
let noClickCount = 0; // Track how many times Maria clicks "No"
const noTextVariations = [
  "Pretty please with a TINY BLOCK OF CHEESE?",
  "Pretty please with a SMALL BLOCK OF CHEESE?",
  "Pretty please with a MEDIUM BLOCK OF CHEESE?",
  "Pretty please with a BIG BLOCK OF CHEESE?",
  "Pretty please with a LARGE BLOCK OF CHEESE?",
  "Pretty please with a MASSIVE BLOCK OF CHEESE?"
];

function checkAnswer(questionNumber, isCorrect) {
  if (isCorrect) {
    // Hide the current question
    document.getElementById(`question-${questionNumber}`).classList.add('hidden');
    document.getElementById(`options-${questionNumber}`).classList.add('hidden');

    // Show the next question if it exists
    const nextQuestion = document.getElementById(`question-${questionNumber + 1}`);
    const nextOptions = document.getElementById(`options-${questionNumber + 1}`);

    if (nextQuestion && nextOptions) {
      nextQuestion.classList.remove('hidden');
      nextOptions.classList.remove('hidden');
    } else {
      // If no more questions, show the final message
      document.getElementById('final-message').classList.remove('hidden');
      document.getElementById('final-buttons').classList.remove('hidden');
    }
  } else {
    alert("Oops! Try again, Maria. 💔");
  }
}

function finalYes() {
  const response = document.getElementById('valentine-response');
  response.textContent = "YAYYYYY! I knew you'd say yes 💖";
  response.classList.remove('hidden');
}

function finalNo() {
  const yesBtn = document.getElementById('yes-btn');
  noClickCount++;
  
  // Change the text and grow the button
  if (noClickCount <= noTextVariations.length) {
    yesBtn.textContent = noTextVariations[noClickCount - 1];
  } else {
    yesBtn.textContent = "Just say yes already! 😅";
  }

  // Increase button size
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 4) + "px";
  yesBtn.style.padding = "15px " + (30 + noClickCount * 10) + "px";
}
