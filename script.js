const emailContent = document.getElementById('email-content');
const answerOptions = document.querySelectorAll('input[type="radio"]');
const submitButton = document.querySelector('button');
let score = 0; // Initialize score variable

// Replace these with actual phishing email examples and corresponding correct answers (1-based indexing)
const emails = [
  { content: "Your bank account has been suspended! Click here to reactivate. 9 remaining", correctAnswer: 2 },
  { content: "Congratulations! You've won a free gift! Claim it now! 8 remaining", correctAnswer: 1 },
  { content: "Urgent action required: Update your password immediately. 7 remaining", correctAnswer: 1 },
  { content: "We noticed unusual activity on your account. Click here to verify. 6 remaining", correctAnswer: 3 },
  { content: "Your social media account needs immediate attention! Follow this link. 5 remaining", correctAnswer: 1 },
  { content: "Your Netflix subscription is about to expire. Update your payment details. 4 remaining", correctAnswer: 2 },
  { content: "You have a friend request from someone you know. Login to accept the request. 3 remaining", correctAnswer: 2 },
  { content:  "You have just won a lottery ticket. Visit the link to claim your reward. 2 remaining", correctAnswer: 1 },
  { content:  "You just received a bank transfer from a foriegn account. Login to your Bank account to confirm the transfer. 1 remaining", correctAnswer: 1 },
  { content:  "You just got selected for an Interview in our Company. Fill in your BVN and Bank details for payment", correctAnswer: 1 },
];

let currentQuestion = 0;

function displayQuestion() {
  if (currentQuestion >= emails.length) {
    // Quiz completion
    emailContent.textContent = "Congratulations! You've completed the quiz.";
    submitButton.disabled = true;
    const totalQuestions = emails.length;
    const message = `Your score is ${score} out of ${totalQuestions}.`;
    alert(message);
    return;
  }
  const currentEmail = emails[currentQuestion];
  emailContent.textContent = currentEmail.content;
  answerOptions.forEach(option => option.checked = false);
}

displayQuestion();

submitButton.addEventListener('click', () => {
  let selectedAnswer = document.querySelector('input[type="radio"]:checked');
  if (!selectedAnswer) {
    alert("Please select an answer.");
    return;
  }

  const selectedAnswerIndex = parseInt(selectedAnswer.id.slice(6));  // Extract answer number from radio button ID
  const correctAnswer = emails[currentQuestion].correctAnswer;

  let feedback;
  if (selectedAnswerIndex === correctAnswer) {
    feedback = "Correct! You identified a phishing attempt.";
    score++;
  } else {
    feedback = "Incorrect. Be cautious of emails urging immediate action or click-through links.";
  }

  alert(feedback);

  currentQuestion++;
  displayQuestion();
});
