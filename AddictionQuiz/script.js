const quizQuestions = [
  {
    id: 1,
    question: 'Kada surūkai savo pirmąją cigaretę nubudęs ryte?',
    answers: [
      {
        points: 3,
        content:
          '<i class="fa-regular fa-clock"></i>Per&nbsp;<strong>5</strong>&nbsp;min.',
      },
      {
        points: 2,
        content:
          '<i class="fa-regular fa-clock"></i>Per&nbsp;<strong>6-30</strong>&nbsp;min.',
      },
      {
        points: 1,
        content:
          '<i class="fa-regular fa-clock"></i>Per&nbsp;<strong>31-60</strong>&nbsp;min.',
      },
      {
        points: 0,
        content:
          '<i class="fa-regular fa-clock"></i>Po&nbsp;<strong>60</strong>&nbsp;min.',
      },
    ],
  },
  {
    id: 2,
    question:
      'Ar tau sunku susilaikyti nerūkius vietose, kur rūkyti draudžiama?',
    answers: [
      { points: 1, content: '<i class="fa-regular fa-circle-check"></i>Taip' },
      { points: 0, content: '<i class="fa-regular fa-circle-xmark"></i>Ne' },
    ],
  },
  {
    id: 3,
    question: 'Kurios cigaretės tu labiausiai nenorėtum atsisakyti?',
    answers: [
      {
        points: 1,
        content: '<i class="fa-solid fa-mug-hot"></i>Pirmosions rytinės',
      },
      {
        points: 0,
        content: '<i class="fa-solid fa-smoking"></i>Bet kurios kitos',
      },
    ],
  },
  {
    id: 4,
    question: 'Kiek cigarečių surūkai per dieną?',
    answers: ['input'],
  },
  {
    id: 5,
    question:
      'Ar pirmosiomis valandomis po nubudimo tu rūkai dažniau negu kitu dienos metu?',
    answers: [
      { points: 1, content: '<i class="fa-regular fa-circle-check"></i>Taip' },
      { points: 0, content: '<i class="fa-regular fa-circle-xmark"></i>Ne' },
    ],
  },
  {
    id: 6,
    question: 'Ar tu rūkai, kai sergi ir didesnę dalį dienos praleidi lovoje?',
    answers: [
      { points: 1, content: '<i class="fa-regular fa-circle-check"></i>Taip' },
      { points: 0, content: '<i class="fa-regular fa-circle-xmark"></i>Ne' },
    ],
  },
];

let index = 0;
let currentPoints = 0;
let totalPoints = 0;
const FINISH = 'finish';

const questionTitle = document.getElementById('question');
const nextQuestionButton = document.getElementById('next-question');
const quizContainer = document.getElementById('quiz');
const answerSection = document.getElementById('answers');
const questionLengthElement = document.getElementById('question-length');
const questionIndexElement = document.getElementById('question-index');
const totalPointsElement = document.getElementById('points');

questionLengthElement.innerText = quizQuestions.length;

const renderQuestion = (index) => {
  const enableNextQuestionButton = (div, points) => {
    currentPoints = points;
    const allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach((answer) => answer.classList.remove('active-answer'));

    div.classList.add('active-answer');
    nextQuestionButton.disabled = false;
  };

  while (answerSection.firstChild) {
    answerSection.removeChild(answerSection.firstChild);
  }

  questionIndexElement.innerText = index + 1;
  questionTitle.innerText =
    quizQuestions[index].id + '. ' + quizQuestions[index].question;
  nextQuestionButton.setAttribute('disabled', true);

  quizQuestions[index].answers.forEach((answer) => {
    if (answer === 'input') {
      renderInput();

      return;
    }

    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';
    answerDiv.innerHTML = answer.content;
    answerDiv.addEventListener('click', () =>
      enableNextQuestionButton(answerDiv, answer.points)
    );

    answerSection.appendChild(answerDiv);
  });
};

const renderInput = () => {
  nextQuestionButton.disabled = false;

  const rangeInput = document.createElement('div');
  noUiSlider.create(rangeInput, {
    start: [1],
    step: 1,
    range: {
      min: 1,
      max: 31,
    },
    connect: 'lower',
    tooltips: {
      to: (value) => Math.round(value),
    },
  });
  rangeInput.id = 'values-slider';
  rangeInput.classList.add('slider-styled');

  const handleRangeInputChange = () => {
    currentPoints = Math.ceil(rangeInput.noUiSlider.get() / 10);
  };
  rangeInput.noUiSlider.on('update', handleRangeInputChange);

  answerSection.appendChild(rangeInput);
};

const renderPostQuiz = (total) => {
  const postQuizHeading = document.createElement('h6');
  postQuizHeading.id = 'post-quiz-heading';
  postQuizHeading.innerText = 'Jūs atlikote';

  const postQuizSubheading = document.createElement('p');
  postQuizSubheading.id = 'post-quiz-subheading';
  postQuizSubheading.innerText = 'Priklausomybės nuo nikotino testą';

  const ratingText = document.createElement('p');
  ratingText.innerText = 'Įvertinimas';
  ratingText.classList.add('rating');

  const meterContainer = document.createElement('div');
  meterContainer.classList.add('meter-container');
  const meter = document.createElement('div');
  meter.classList.add('meter');

  const indicatorArc = document.createElement('img');
  indicatorArc.classList.add('meter-indicator-arc');
  indicatorArc.src =
    'https://nerukysiu.edigino.com/wp-content/uploads/2023/12/question-result.png';

  const pointer = document.createElement('img');
  pointer.classList.add('meter-pointer');
  pointer.src =
    'https://nerukysiu.edigino.com/wp-content/uploads/2023/12/question-arrow.png';

  const resultText = document.createElement('p');
  resultText.classList.add('result');

  switch (total) {
    case 1:
      pointer.classList.add('pointer-0');
      resultText.innerText = 'Labai silpnas nikotino priklausomybės lygis.';
      break;
    case 2:
      pointer.classList.add('pointer-10');
      resultText.innerText = 'Labai silpnas nikotino priklausomybės lygis.';
      break;
    case 3:
      pointer.classList.add('pointer-20');
      resultText.innerText = 'Silpnas nikotino priklausomybės lygis.';
      break;
    case 4:
      pointer.classList.add('pointer-30');
      resultText.innerText = 'Silpnas nikotino priklausomybės lygis.';
      break;
    case 5:
      pointer.classList.add('pointer-40');
      resultText.innerText = 'Vidutinio stiprumo nikotino priklausomybė.';
      break;
    case 6:
      pointer.classList.add('pointer-50');
      resultText.innerText = 'Vidutinio stiprumo nikotino priklausomybė.';
    case 7:
      pointer.classList.add('pointer-60');
      resultText.innerText = 'Stiprus nikotino priklausomybės lygis.';
      break;
    case 8:
      pointer.classList.add('pointer-70');
      resultText.innerText = 'Stiprus nikotino priklausomybės lygis.';
      break;
    case 9:
      pointer.classList.add('pointer-80');
      resultText.innerText = 'Labai stiprus nikotino priklausomybės lygis.';
      break;
    case 10:
      pointer.classList.add('pointer-90');
      resultText.innerText = 'Labai stiprus nikotino priklausomybės lygis.';
    case 11:
      pointer.classList.add('pointer-100');
      resultText.innerText = 'Itin stiprus nikotino priklausomybės lygis.';
      break;
    default:
      pointer.classList.add('pointer-0');
      resultText.innerText = 'Neįvertinta.';
  }

  const ctaButton = document.createElement('a');
  ctaButton.innerText = 'Kaip mesti rūkyti?';
  ctaButton.href = 'https://nerukysiu.lt/kaip-mesti-rukyti';

  while (quizContainer.firstChild) {
    quizContainer.removeChild(quizContainer.firstChild);
  }

  meter.append(indicatorArc, pointer);
  meterContainer.append(ratingText, meter, resultText);
  quizContainer.append(
    postQuizHeading,
    postQuizSubheading,
    meterContainer,
    ctaButton
  );
};

const handleNextQuestionButtonClick = (points) => {
  totalPoints += points;

  if (nextQuestionButton.className.includes(FINISH)) {
    alert('Yeehaw');
    renderPostQuiz(totalPoints);
    return;
  }

  if (index === quizQuestions.length - 2) {
    nextQuestionButton.innerText = 'Žiūrėti atsakymą';
    nextQuestionButton.classList.add(FINISH);
  }

  index++;
  renderQuestion(index);
};

nextQuestionButton.addEventListener('click', () =>
  handleNextQuestionButtonClick(currentPoints)
);

const slider = document.getElementById('values-slider');

document.addEventListener('DOMContentLoaded', renderQuestion(index));
