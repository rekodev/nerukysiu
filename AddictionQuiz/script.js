const quizQuestions = [
  {
    id: 1,
    question: 'Kada surūkai savo pirmąją cigaretę nubudęs ryte?',
    answers: [
      'Per&nbsp;<strong>5</strong>&nbsp;min.',
      'Per&nbsp;<strong>6-30</strong>&nbsp;min.',
      'Per&nbsp;<strong>31-60</strong>&nbsp;min.',
      'Po&nbsp;<strong>60</strong>&nbsp;min.',
    ],
  },
  {
    id: 2,
    question:
      'Ar tau sunku susilaikyti nerūkius vietose, kur rūkyti draudžiama?',
    answers: ['Taip', 'Ne'],
  },
  {
    id: 3,
    question: 'Kurios cigaretės tu labiausiai nenorėtum atsisakyti?',
    answers: ['Pirmosions rytinės', 'Bet kurios kitos'],
  },
  {
    id: 4,
    question: 'Kiek cigarečių surūkai per dieną?',
    answers: ['Input'],
  },
  {
    id: 5,
    question:
      'Ar pirmosiomis valandomis po nubudimo tu rūkai dažniau negu kitu dienos metu?',
    answers: ['Taip', 'Ne'],
  },
  {
    id: 6,
    question: 'Ar tu rūkai, kai sergi ir didesnę dalį dienos praleidi lovoje?',
    answers: ['Taip', 'Ne'],
  },
];

let index = 0;

const questionTitle = document.getElementById('question');
const nextQuestionButton = document.getElementById('next-question');
const quizContainer = document.getElementById('quiz');
const answerSection = document.getElementById('answers');
const questionLengthElement = document.getElementById('question-length');
const questionIndexElement = document.getElementById('question-index');

questionLengthElement.innerText = quizQuestions.length;

const enableNextQuestionButton = (div) => {
  const allAnswers = document.querySelectorAll('.answer');
  allAnswers.forEach((answer) => answer.classList.remove('active-answer'));

  div.classList.add('active-answer');
  nextQuestionButton.disabled = false;
};

const renderQuestion = (index) => {
  while (answerSection.firstChild) {
    answerSection.removeChild(answerSection.firstChild);
  }

  questionIndexElement.innerText = index + 1;
  questionTitle.innerText =
    quizQuestions[index].id + '. ' + quizQuestions[index].question;
  nextQuestionButton.setAttribute('disabled', true);

  quizQuestions[index].answers.forEach((answer) => {
    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';
    answerDiv.innerHTML = answer;
    answerDiv.addEventListener('click', () =>
      enableNextQuestionButton(answerDiv)
    );

    answerSection.appendChild(answerDiv);
  });
};

const handleNextQuestionButtonClick = () => {
  if (nextQuestionButton.innerText.toLocaleLowerCase() === 'finish quiz') {
    alert('Yeehaw');
    return;
  }

  if (index === quizQuestions.length - 2) {
    nextQuestionButton.innerText = 'finish quiz';
  }

  index++;
  renderQuestion(index);
};

nextQuestionButton.addEventListener('click', handleNextQuestionButtonClick);

document.addEventListener('DOMContentLoaded', renderQuestion(index));
