// For male
const tracheaMale = document.getElementById('trachea-male');
const lungsMale = document.getElementById('lungs-male');
const gutsMale = document.getElementById('guts-male');
const skinMale = document.getElementById('skin-male');
const circulatorySystemMale = document.getElementById(
  'circulatory-system-male'
);
const teethMale = document.getElementById('teeth-male');
const reproductiveSystemMale = document.getElementById('repro-male');
const stomachMale = document.getElementById('stomach-male');
const brainMale = document.getElementById('brain-male');
const eyesMale = document.getElementById('eyes-male');

const liverMale = document.getElementById('liver-male');

// For female
const tracheaFemale = document.getElementById('trachea-female');
const lungsFemale = document.getElementById('lungs-female');
const gutsFemale = document.getElementById('guts-female');
const skinFemale = document.getElementById('skin-female');
const circulatorySystemFemale = document.getElementById(
  'circulatory-system-female'
);
const teethFemale = document.getElementById('teeth-female');
const reproductiveSystemFemale = document.getElementById('repro-female');
const stomachFemale = document.getElementById('stomach-female');
const brainFemale = document.getElementById('brain-female');
const eyesFemale = document.getElementById('eyes-female');
const liverFemale = document.getElementById('liver-female');

const genderMale = document.getElementById('gender-male');
const genderFemale = document.getElementById('gender-female');

const maleBody = document.querySelector('.svg-male');
const femaleBody = document.querySelector('.svg-female');

const timelineTitle = document.querySelector('#timeline-title h2');
const timelineSteps = document.querySelectorAll('.step');
const listItems = document.querySelectorAll('#timeline-text-wrapper ul li');

const timelineTexts = [
  'Po 20 minučių',
  'Po 8 valandų',
  'Po 24 valandų',
  'Po 48 valandų',
  'Po 72 valandų',
  'Po 2-12 savaičių',
  'Po 3-9 mėnesių',
  'Po 1 metų',
  'Po 5 metų',
  'Po 10 metų',
  'Po 15 metų',
  'Po 20 metų',
];

const removeActiveClassesFromBody = () => {
  const bodyParts = document.querySelectorAll('.hoverable');
  bodyParts.forEach((part) => {
    part.classList.remove('active');
  });
};

const addActiveClassToBodyPart = (index) => {
  removeActiveClassesFromBody();

  switch (index) {
    case 0:
      circulatorySystemMale.classList.add('active');
      circulatorySystemFemale.classList.add('active');
      break;
    case 1:
      circulatorySystemMale.classList.add('active');
      circulatorySystemFemale.classList.add('active');
      break;
    case 2:
      lungsMale.classList.add('active');
      lungsFemale.classList.add('active');
      tracheaMale.classList.add('active');
      tracheaFemale.classList.add('active');
      break;
    case 3:
      teethMale.classList.add('active');
      teethFemale.classList.add('active');
      break;
    case 4:
      lungsMale.classList.add('active');
      lungsFemale.classList.add('active');
      tracheaMale.classList.add('active');
      tracheaFemale.classList.add('active');
      break;
    case 5:
      lungsMale.classList.add('active');
      lungsFemale.classList.add('active');
      circulatorySystemMale.classList.add('active');
      circulatorySystemFemale.classList.add('active');
      break;
    case 6:
      lungsMale.classList.add('active');
      lungsFemale.classList.add('active');
      tracheaMale.classList.add('active');
      tracheaFemale.classList.add('active');
      break;
    case 7:
      circulatorySystemMale.classList.add('active');
      circulatorySystemFemale.classList.add('active');
      break;
    case 8:
      circulatorySystemMale.classList.add('active');
      circulatorySystemFemale.classList.add('active');
      break;
    case 9:
      lungsMale.classList.add('active');
      lungsFemale.classList.add('active');
      tracheaMale.classList.add('active');
      tracheaFemale.classList.add('active');
      break;
    case 10:
      circulatorySystemMale.classList.add('active');
      circulatorySystemFemale.classList.add('active');
      break;
    case 11:
      break;

    default:
      circulatorySystemMale.classList.add('active');
      circulatorySystemFemale.classList.add('active');
      break;
  }
};

const disableTransitions = () => {
  document.querySelectorAll('.hoverable').forEach((el) => {
    el.style.transition = 'none';
  });
};

const enableTransitions = () => {
  document.querySelectorAll('.hoverable').forEach((el) => {
    el.style.transition = '';
  });
};

timelineSteps.forEach((step, index) => {
  step.addEventListener('mouseover', () => {
    timelineSteps.forEach((s) => s.classList.remove('active-step'));

    step.classList.add('active-step');
    timelineTitle.textContent = timelineTexts[index].toUpperCase();

    listItems.forEach((item) => item.classList.remove('active-li'));
    listItems[index].classList.add('active-li');

    addActiveClassToBodyPart(index);
  });
});

listItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    listItems.forEach((i) => i.classList.remove('active-li'));

    item.classList.add('active-li');
    timelineTitle.textContent = timelineTexts[index].toUpperCase();

    timelineSteps.forEach((step) => step.classList.remove('active-step'));
    timelineSteps[index].classList.add('active-step');

    addActiveClassToBodyPart(index);
  });
});

genderMale.addEventListener('click', () => {
  disableTransitions();

  femaleBody.classList.remove('active-gender');
  maleBody.classList.add('active-gender');
  genderFemale.classList.remove('gender-selected');
  genderMale.classList.add('gender-selected');

  setTimeout(enableTransitions, 200);
});

genderFemale.addEventListener('click', () => {
  disableTransitions();

  maleBody.classList.remove('active-gender');
  femaleBody.classList.add('active-gender');
  genderMale.classList.remove('gender-selected');
  genderFemale.classList.add('gender-selected');

  setTimeout(enableTransitions, 200);
});
