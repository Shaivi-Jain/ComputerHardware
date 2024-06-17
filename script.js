function submitQuiz() {
    // Collect user answers
    let answers = [];
    let correctAnswers = ["b", "d", "b", "c", "a", "c", "a", "d", "c","a", "true", "false", "true", "true", "true", "true", "false", "true", "false", "true"];
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        answers.push(input.value);
    });
    document.querySelectorAll('select').forEach(select => {
        answers.push(select.value);
    });

    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            score++;
        }
    }


    // Calculate score (for demo, let's just display the answers)
    alert("Answers: " + answers.join(", "));
    alert(`Your score: ${score}/20`);
}
