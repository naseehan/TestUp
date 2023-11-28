// Fetch student and quiz data from your API or database
// Assume you have data in the following format
const studentInfo = {
    name: 'John Doe',
    email: 'john@example.com',
  };
  
  const quizzesTaken = [
    { quizId: 1, quizName: 'React', score: 8 },
    { quizId: 2, quizName: 'HTML', score: 9 },
    // Add more quiz data here
  ];
  
  // Populate student info in the dashboard
  document.querySelector('h1').textContent = `Welcome to the Dashboard, ${studentInfo.name}`;
  document.querySelector('p').textContent = `Email: ${studentInfo.email}`;
  
  // Populate quizzes taken
  const quizList = document.getElementById('quizList');
  quizzesTaken.forEach((quiz) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${quiz.quizName} - Score: ${quiz.score}`;
    quizList.appendChild(listItem);
  });
  
  // Populate quiz results table
  const quizResultsTable = document.getElementById('quizResults');
  quizzesTaken.forEach((quiz) => {
    const row = quizResultsTable.insertRow();
    row.insertCell(0).textContent = quiz.quizName;
    row.insertCell(1).textContent = quiz.score;
  });
  