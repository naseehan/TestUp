const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const topic = urlParams.get("topic");

const subject = (document.querySelector("h1").innerHTML = topic);

const htmlQuestions = [
  {
    q: "1) What is the purpose of the HTML footer tag?",
    options: [
      "Specifies a header for a document or section",
      "Defines a footer for a document or section",
      "Represents a highlighted text in the document",
      "Some other option",
    ],
    answer: 2,
  },
  {
    q: "2) What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: 0,
  },
  {
    q: "3) Which programming language is known as the 'language of the web'?",
    options: ["Java", "Python", "JavaScript", "Ruby"],
    answer: 2,
  },
  {
    q: "4) What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinking Textual Markup Language",
    ],
    answer: 0,
  },
  {
    q: "5) What is the primary function of JavaScript?",
    options: [
      "Styling web pages",
      "Building databases",
      "Creating dynamic web content",
      "Defining document structure",
    ],
    answer: 2,
  },
  {
    q: "6) Which tag is used to create a hyperlink in HTML?",
    options: ["< a >", "< h >", "< p >", "< b >"],
    answer: 0,
  },
  {
    q: "7) What is the file extension for a Cascading Style Sheet?",
    options: [".js", ".html", ".css", ".txt"],
    answer: 2,
  },
  {
    q: "8) Which symbol is used to denote jQuery?",
    options: ["#", "&", "$", "@"],
    answer: 2,
  },
  {
    q: "9) What is the default display property in CSS?",
    options: ["block", "inline", "flex", "grid"],
    answer: 1,
  },
  {
    q: "10) What does API stand for?",
    options: [
      "Application Programming Interface",
      "Automated Programming Interface",
      "Automated Processing Interface",
      "Application Process Interface",
    ],
    answer: 0,
  },
];


if (subject === "HTML") {
  const questionCount = htmlQuestions.length;

  for (let i = 0; i < questionCount; i++) {
    const questionIndex = i + 1;
    const question = htmlQuestions[i];

    document.querySelector(`#question${questionIndex}`).innerHTML = question.q;

    for (let j = 0; j < question.options.length; j++) {
      document.querySelector(
        `.question${questionIndex}_option${j + 1}`
      ).innerHTML = question.options[j];
    }
  }
}

// function handleSubmit(evevt) {
//      window.confirm("Submit?");
//     evevt.preventDefault()
//     window.location.replace("result.html");
// }




function handleSubmit(event) {
    event.preventDefault();

    // Retrieve all selected answers
    const userAnswers = [];
    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector(`input[name="answer${i}"]:checked`);
        if (selectedOption) {
            // const answerIndex = selectedOption.value.slice(-1);
            const answerIndex = selectedOption.value-1;
            userAnswers.push(parseInt(answerIndex));
        } else {
            // If any question is not answered, you can handle it here (skip or show a message)
        }
    }
console.log(userAnswers);
    // Compare user answers with the correct answers and calculate the score
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === htmlQuestions[i].answer) {
            score++;
        }
    }
    localStorage.setItem('score', score);

    // Redirect to the result page with the score
    window.location.replace("result.html");
}
