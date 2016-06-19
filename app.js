var questions = [
  new Question("Who is Alex Burtson's favorite family dog?", ['Cosmo', 'Charlie'], 'Charlie'),
  new Question("Who is Alex Burtson's favorite brother?", ['Jonny', 'Cherish'], 'Jonny'),
  new Question("What is Alex's favorite color?", ['Red', 'Orange'], 'Red')
]

var quiz = new Quiz(questions);

QuizUI.displayNext();