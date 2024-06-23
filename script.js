function submitQuiz() {
    // Correct answers array
    let correctAnswers = ["b", "d", "b", "c", "a", "c", "a", "d", "c", "a", "true", "false", "true", "true", "true", "true", "false", "true", "false", "true"];

    // Collect user answers
    let answers = [];
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        answers.push(input.value);
    });
    document.querySelectorAll('select').forEach(select => {
        answers.push(select.value);
    });

    // Loop through answers and compare with correct answers
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        const answerValue = answers[i];
        const correctAnswer = correctAnswers[i];

        // Mark correct or wrong answers
        const selectedAnswer = document.querySelectorAll(`input[type="radio"][name="q${i + 1}"]:checked`);
        if (selectedAnswer.length > 0) {
            if (answerValue === correctAnswer) {
                selectedAnswer[0].parentElement.classList.add('correct-answer');
            } else {
                selectedAnswer[0].parentElement.classList.add('wrong-answer');
            }
        }

        // Increase score if answer is correct
        if (answerValue === correctAnswer) {
            score++;
        }
    }

    // Display answers and score
    alert("Answers: " + answers.join(", "));
    alert(`Your score: ${score}/20`);
}
