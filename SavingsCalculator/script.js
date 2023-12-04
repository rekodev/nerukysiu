// Variables
const sliderOne = document.getElementById('slider-1');
const sliderTwo = document.getElementById('slider-2');

noUiSlider.create(sliderOne, {
  start: [20],
  step: 1,
  range: {
    min: 1,
    max: 80,
  },
  connect: 'lower',
});

noUiSlider.create(sliderTwo, {
  start: [4],
  step: 1,
  range: {
    min: 1,
    max: 15,
  },
  connect: 'lower',
});

const cigaretteAmountInput = document.getElementById('cigarette-amount');
const packPriceInput = document.getElementById('pack-price');

const perDay = document.getElementById('per-day');
const perWeek = document.getElementById('per-week');
const perMonth = document.getElementById('per-month');

const savingsAfterOneYear = document.getElementById('one-year');
const savingsAfterFiveYears = document.getElementById('five-years');
const savingsAfterTenYears = document.getElementById('ten-years');

perDay.innerText = sliderOne.value;
perWeek.innerText = sliderOne.value * 7;
perMonth.innerText = sliderOne.value * 30;

// Functions
const calculateSmokingCostPerYear = (cigaretteAmount, packPrice, days = 1) => {
  const costPerCigarette = Number(packPrice) / 20;
  const totalCost = cigaretteAmount * costPerCigarette * days;

  return totalCost;
};

const formatCurrency = (number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number
  );

const reactToChange = () => {
  const sliderOneValue = Number(sliderOne.noUiSlider.get());
  const sliderTwoValue = Number(sliderTwo.noUiSlider.get());

  // Update the input fields
  cigaretteAmountInput.value = sliderOneValue;
  packPriceInput.value = sliderTwoValue + ' €';

  perDay.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOneValue, sliderTwoValue)
  );
  perWeek.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOneValue, sliderTwoValue, 7)
  );
  perMonth.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOneValue, sliderTwoValue, 30)
  );

  savingsAfterOneYear.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOneValue, sliderTwoValue, 365)
  );
  savingsAfterFiveYears.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOneValue, sliderTwoValue, 365 * 5)
  );
  savingsAfterTenYears.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOneValue, sliderTwoValue, 365 * 10)
  );
};

const handleCigaretteAmountInput = () => {
  sliderOne.noUiSlider.set(cigaretteAmountInput.value);
  reactToChange();
};

const handlePackPriceInput = () => {
  let price = packPriceInput.value.replace(/[^\d.-]/g, '');
  price = Number(price);

  if (price < 1) {
    price = 1;
  } else if (price > 80) {
    price = 80;
  }

  packPriceInput.value = price + ' €';
  sliderTwo.noUiSlider.set(price);

  reactToChange();
};

// Event Listeners
sliderOne.noUiSlider.on('update', reactToChange);
sliderTwo.noUiSlider.on('update', reactToChange);
cigaretteAmountInput.addEventListener('change', handleCigaretteAmountInput);
packPriceInput.addEventListener('change', handlePackPriceInput);

packPriceInput.addEventListener('keypress', function (event) {
  const charStr = event.key;

  if (!charStr.match(/^[0-9]$/)) {
    event.preventDefault();
  }

  if (charStr === 'Enter') {
    event.preventDefault();
    handlePackPriceInput();
  }
});

window.addEventListener('DOMContentLoaded', reactToChange);
