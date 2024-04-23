document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let rollNumber = document.getElementById("rollNumber").value;
    let name = document.getElementById("name").value;
    let batch = document.getElementById("batch").value;
    let section = document.getElementById("section").value;

    sessionStorage.setItem("rollNumber", rollNumber);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("batch", batch);
    sessionStorage.setItem("section", section);

    alert("Student details submitted successfully!");
});

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let quizHeading = document.getElementById("quizHeading").value;
    let quizTopic = document.getElementById("quizTopic").value;

    let answers = [];
    let correctAnswers = ["a", "b", "c", "d", "a"]; // Adjust correct answers accordingly

    for (let i = 1; i <= 5; i++) {
        let selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedOption) {
            answers.push(selectedOption.value);
        } else {
            answers.push(null);
        }
    }

    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            score++;
        }
    }

    sessionStorage.setItem("quizHeading", quizHeading);
    sessionStorage.setItem("quizTopic", quizTopic);
    sessionStorage.setItem("answers", JSON.stringify(answers));
    sessionStorage.setItem("score", score);

    displayResults();
});

function displayResults() {
    let studentDetails = `
        <h3>Student Details</h3>
        <p>Roll Number: ${sessionStorage.getItem("rollNumber")}</p>
        <p>Name: ${sessionStorage.getItem("name")}</p>
        <p>Batch: ${sessionStorage.getItem("batch")}</p>
        <p>Section: ${sessionStorage.getItem("section")}</p>
    `;

    let quizDetails = `
        <h3>Quiz Details</h3>
        <p>Quiz Heading: ${sessionStorage.getItem("quizHeading")}</p>
        <p>Quiz Topic: ${sessionStorage.getItem("quizTopic")}</p>
    `;

    let answers = JSON.parse(sessionStorage.getItem("answers"));
    let score = sessionStorage.getItem("score");

    let resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.style.display = "block";
    document.getElementById("studentDetails").innerHTML = studentDetails;
    document.getElementById("quizDetails").innerHTML = quizDetails;
    document.getElementById("score").innerHTML = <h3>Score: ${score}/5</h3>;
}