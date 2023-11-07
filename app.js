
const quizData = [
    {
        question: "In which city was Virat Kohli born?",
        options: ["Delhi", "Banglore", "Mumbai", "Ranchi"],
        answer: "Delhi"
    },
    {
        question: "Who is the Father of The Nation?",
        options: ["J Nehru", "S C Bose", "M Gandhi", "B SINGH"],
        answer: "M Gandhi"
    },
    {
        question: "Statue of liberty is situated in which city?",
        options: ["Germany", "London", "New york", "Sydney"],
        answer:  "New york"
    },
    {
        question: "Which country Host the ODI World Cup in 2015?",
        options: ["Pakisthan", "England", "India", "Austrila"],
        answer:  "Austrila"
    },
    {
        question: "When was Java script invented?",
        options: ["1995", "1998", "1992", "1996"],
        answer:  "1995"
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    for (const option of question.options) {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    }
}

function checkAnswer(selectedOption) {
    const question = quizData[currentQuestion];
    if (selectedOption === question.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your Score: ${score} out of ${quizData.length}  🎉🎉`;
}

loadQuestion();

