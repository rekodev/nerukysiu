// Variables
const sliderOne = document.getElementById('slider-1');
const sliderTwo = document.getElementById('slider-2');
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
  cigaretteAmountInput.value = sliderOne.value;
  packPriceInput.value = sliderTwo.value + ' €';

  perDay.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOne.value, sliderTwo.value)
  );
  perWeek.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOne.value, sliderTwo.value, 7)
  );
  perMonth.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOne.value, sliderTwo.value, 30)
  );

  savingsAfterOneYear.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOne.value, sliderTwo.value, 365)
  );
  savingsAfterFiveYears.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOne.value, sliderTwo.value, 365 * 5)
  );
  savingsAfterTenYears.innerText = formatCurrency(
    calculateSmokingCostPerYear(sliderOne.value, sliderTwo.value, 365 * 10)
  );
};

const handleCigaretteAmountInput = () => {
  sliderOne.value = cigaretteAmountInput.value;

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
  sliderTwo.value = price;

  reactToChange();
};

// Event Listeners
sliderOne.addEventListener('input', reactToChange);
sliderTwo.addEventListener('input', reactToChange);
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
