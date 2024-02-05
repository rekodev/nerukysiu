const helpCenters = [
  {
    title: 'Varėnos rajono savivaldybės visuomenės sveikatos biuras',
    city: 'Varėna',
    type: 'Konsultacijos telefonu',
    coordinates: [24.576691, 54.212267],
    phone: ['(8 3) 105 6117'],
    email: ['sveikatos.biuras@varena.lt'],
    website: 'https://www.varenosvsb.lt',
  },
  {
    title: 'Telšių rajono savivaldybės visuomenės sveikatos biuras',
    city: 'Telšiai',
    type: 'Konsultacijos telefonu',
    coordinates: [22.250524, 55.983813],
    phone: ['(8 4) 446 0155', '(8 6) 098 4701'],
    email: ['info@telsiurvsb.lt'],
    website: 'https://www.telsiuvsb.lt',
  },
  {
    title: 'Elektrėnų savivaldybės visuomenės sveikatos biuras',
    city: 'Elektrėnai',
    type: 'Konsultacijos elektroniniu paštu',
    coordinates: [24.667226, 54.787115],
    phone: ['(8 6) 591 5727'],
    email: ['vsb@elektrenuvsb.lt', 'koordinatorius@elektrenuvsb.lt'],
    website: 'https://www.elektrenuvsb.lt',
  },
  {
    title: 'Valstybinis psichikos sveikatos centras',
    city: 'Vilnius',
    type: 'Konsultacijos elektroniniu paštu',
    coordinates: [25.417941, 54.685644],
    phone: ['(8 5) 267 1811', '(8 5) 210 2815'],
    email: ['info@vpsc.lt'],
    website: 'https://www.vpsc.lt',
  },
  {
    title: 'Druskininkų savivaldybės visuomenės sveikatos biuras',
    city: 'Druskininkai',
    type: 'Konsultacijos elektroniniu paštu',
    coordinates: [23.986247, 54.013235],
    phone: ['(8 6) 821 0908', '(8 6) 129 7211'],
    email: ['vsb@druskininkai.lt', 'info@vyrukriziucentras.lt'],
    website: 'https://www.druskininkuvsb.lt',
  },
  {
    title: 'Panevėžio miesto savivaldybės visuomenės sveikatos biuras',
    city: 'Panevėžys',
    type: 'Konsultacijos elektroniniu paštu',
    coordinates: [24.357019, 55.729693],
    phone: ['(8 4) 546 7506', '(8 6) 002 3332', '(8 6) 559 6099'],
    email: ['info@panevezysvsb.lt'],
    website: 'https://www.panevezysvsb.lt',
  },
  {
    title: 'Jonavos rajono visuomenės sveikatos biuras',
    city: 'Jonava',
    type: 'Konsultacijos elektroniniu paštu',
    coordinates: [24.262101, 55.075853],
    phone: ['(8 3) 493 1064'],
    email: ['info@jonavavsb.lt'],
    website: 'https://www.jonavavsb.lt',
  },
  {
    title: 'Vilniaus miesto savivaldybės visuomenės sveikatos biuras',
    city: 'Vilnius',
    type: 'Grupiniai užsiėmimai metantiems rūkyti',
    coordinates: [25.303031, 54.681449],
    phone: ['(8 5) 271 1244'],
    email: ['info@vvsb.lt'],
    website: 'https://www.vvsb.lt',
  },
  {
    title: 'Respublikinio priklausomybės ligų centro Panevėžio filialas',
    city: 'Panevėžys',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [24.401301, 55.742401],
    phone: ['(8 4) 558 2673'],
    email: ['registratura.panevezys@rplc.lt'],
    website: 'https://www.rplc.lt/filialai/panevezio-filialas',
  },
  {
    title: 'Tauragės rajono savivaldybės visuomenės sveikatos biuras',
    city: 'Tauragė',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [22.289072, 55.249896],
    phone: ['(8 6) 702 6075'],
    email: ['info@tauragesvsb.lt'],
    website: 'http://www.tauragesvsb.lt',
  },
  {
    title: 'Rokiškio rajono savivaldybės visuomenės sveikatos biuras',
    city: 'Rokiškis',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [25.587256, 55.954433],
    phone: ['(8 4) 585 2055'],
    email: ['info@rsveikata.lt'],
    website: 'https://www.rsveikata.lt',
  },
  {
    title: 'Klaipėdos miesto savivaldybės visuomenės sveikatos biuras',
    city: 'Klaipėda',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [21.164719, 55.678486],
    phone: ['(8 6) 592 1664'],
    email: ['info@sveikatosbiuras.lt'],
    website: 'https://www.sveikatosbiuras.lt',
  },
  {
    title: 'Klaipėdos rajono savivaldybės visuomenės sveikatos biuras',
    city: 'Klaipėda',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [21.397205, 55.710422],
    phone: ['(8 4) 645 3754'],
    email: [
      'info@visuomenessveikata.lt',
      'dalia.petrikiene@visuomenessveikata.lt',
    ],
    website: 'http://www.visuomenessveikata.lt',
  },
  {
    title: 'Pasvalio rajono savivaldybės visuomenės sveikatos biuras',
    city: 'Pasvalys',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [24.398763, 56.061753],
    phone: ['(8 4) 512 0130', '(8 4) 512 0131'],
    email: ['vsbiuras@gmail.com', 'lakritys14@gmail.com'],
    website: 'https://pasvaliovsb.lt',
  },
  {
    title: 'Alytaus miesto visuomenės sveikatos biuras ',
    city: 'Alytus',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [24.032352, 54.39894],
    phone: ['(8 3) 155 1653'],
    email: ['biuras@alytausvsb.lt'],
    website: 'http://www.alytausrajonovsb.lt',
  },
  {
    title: 'Respublikinio priklausomybės ligų centro Kauno filialas',
    city: 'Kaunas',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [23.925544, 54.906152],
    phone: ['(8 3) 733 3255'],
    email: ['registratura.kaunas@rplc.lt'],
    website: 'https://www.rplc.lt/filialai/kauno-filialas',
  },
  {
    title: 'Respublikinio priklausomybės ligų centro Klaipėdos filialas',
    city: 'Klaipėda',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [21.149621, 55.693712],
    phone: ['(8 4) 641 5025', '(8 4) 641 0650'],
    email: ['registratura.klaipeda@rplc.lt'],
    website: 'https://www.rplc.lt/filialai/klaipedos-filialas',
  },
  {
    title: 'Respublikinio priklausomybės ligų centro Šiaulių filialas',
    city: 'Šiauliai',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [23.30857, 55.906355],
    phone: ['(8 4) 145 5644', '(8 4) 145 6456'],
    email: ['registratura.siauliai@rplc.lt'],
    website: 'https://www.rplc.lt/filialai/siauliu-filialas',
  },
  {
    title: 'Respublikinio priklausomybės ligų centro Vilniaus filialas',
    city: 'Vilnius',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [25.318951, 54.715229],
    phone: ['(8 5) 213 7808'],
    email: ['registratura@rplc.lt'],
    website: 'https://www.rplc.lt/filialai/vilniaus-filialas',
  },
  {
    title: 'Ukmergės visuomenės sveikatos biuras',
    city: 'Ukmergė',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [24.751939, 55.246697],
    phone: ['(8 6) 738 4973'],
    email: ['sveikatosbiuras@ukmergesvsb.lt'],
    website: 'http://ukmergesvsb.lt/',
  },
  {
    title: 'Marijampolės savivaldybės visuomenės sveikatos biuras',
    city: 'Marijampolė',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [23.350919, 54.552229],
    phone: ['(8 3) 435 9213'],
    email: ['info@marijampolesvsb.lt'],
    website: 'https://marijampolesvsb.lt',
  },
  {
    title: 'Panevėžio rajono visuomenės sveikatos biuras',
    city: 'Panevėžys',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [24.386671, 55.721447],
    phone: ['(8 4) 543 3106'],
    email: ['vsb@panrs.lt'],
    website: 'https://panrs.lt',
  },
  {
    title: 'Visagino rajono savivaldybės visuomenės sveikatos biuras',
    city: 'Visaginas',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [26.433096, 55.605293],
    phone: ['(8 6) 195 2289'],
    email: ['visaginas@rsveikata.lt'],
    website: 'https://www.rsveikata.lt',
  },
  {
    title: 'Šakių rajono visuomenės sveikatos biuras',
    city: 'Šakiai',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [23.031844, 54.955],
    phone: ['(8 3) 455 2345'],
    email: ['info@sakiaivsb.lt'],
    website: 'https://www.sakiaivsb.lt',
  },
  {
    title: 'Klaipėdos rajono visuomenės sveikatos biuras',
    city: 'Klaipėda',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [21.397223, 55.7104],
    phone: ['(8 4) 645 3754'],
    email: ['gargzdai.biuras@visuomenessveikata.lt'],
    website: 'https://visuomenessveikata.lt',
  },
  {
    title: 'Vilniaus miesto visuomenės sveikatos biuras',
    city: 'Vilnius',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [25.249642, 54.681971],
    phone: ['(8 6) 520 7020'],
    email: ['info@vvsb.lt'],
    website: 'https://www.vilniussveikiau.lt',
  },
  {
    title: 'Pakruojo sveikatos visuomenės sveikatos biuras',
    city: 'Pakruojis',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [23.843351, 55.977661],
    phone: ['(8 4) 215 5077'],
    email: ['vsb.pakruojis@gmail.com'],
    website: 'https://www.pakruojovsb.lt',
  },
  {
    title: 'Anykščių rajono visuomenės sveikatos biuras',
    city: 'Anykščiai',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [25.110235, 55.52579],
    phone: ['(8 6) 404 7123'],
    email: ['vsbiuras.anyksciai@gmail.com'],
    website: 'https://www.anyksciuvsb.lt',
  },
  {
    title: 'Ignalinos rajono visuomenės sveikatos biuras',
    city: 'Ignalina',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [26.15135, 55.341288],
    phone: ['(8 3) 865 2338'],
    email: ['info@ignalinosvsb.lt'],
    website: 'https://www.ignalinosvsb.lt',
  },
  {
    title: 'Vilkaviškio visuomenės sveikatos biuras',
    city: 'Vilkaviškis',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [23.036712, 54.659898],
    phone: ['(8 3) 423 1058', '(8 3) 424 8647'],
    email: ['info@vilkaviskiovsb.lt'],
    website: 'https://vilkaviskiovsb.lt/lt_lt',
  },
  {
    title: 'Radviliškio visuomenės sveikatos biuras',
    city: 'Radviliškis',
    type: 'Individualios specialistų konsultacijos',
    coordinates: [23.546096, 55.80665],
    phone: ['(8 4) 225 6251'],
    email: ['radviliskis@radviliskisvsb.lt'],
    website: 'https://www.radviliskisvsb.lt',
  },
];

// Mapbox initialization
mapboxgl.accessToken =
  'pk.eyJ1IjoidmVyeWZhc3RzbmFpbCIsImEiOiJjbG95YmVxMXYwMmM5MmptdnEyOTZyNGE2In0.z1vsMrdrvQNzgrROLSXX2w';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [23.8813, 55.1694],
  zoom: 6.2,
});

const fullscreenControl = new mapboxgl.FullscreenControl();
const nav = new mapboxgl.NavigationControl();

map.addControl(fullscreenControl, 'top-right');
map.addControl(nav, 'bottom-right');
map.scrollZoom.disable();

const filterButton = document.getElementById('filter-button');
const resetButton = document.getElementById('reset-button');

const citySelectElement = document.querySelector('[data-select="city"]');
const typeSelectElement = document.querySelector('[data-select="type"]');

const citySelectTriggerTextElement = document.querySelector(
  '[data-select="city"] .custom-select-trigger p'
);
const typeSelectTriggerTextElement = document.querySelector(
  '[data-select="type"] .custom-select-trigger p'
);

const cityOptionsContainer = document.getElementById('city-options');
const typeOptionsContainer = document.getElementById('type-options');

let currentCity = '';
let currentType = '';

let markers = [];

const formatPhoneNumbers = (phoneNumbers) =>
  phoneNumbers
    .map((number) => `<a href='tel:${number}'>${number}</a>`)
    .join('');

const formatEmails = (emails) =>
  emails.map((email) => `<a href='mailto:${email}'>${email}</a>`).join('');

const generateMarker = (map, coordinates, title, phone, emails, website) => {
  const popupContent = `<div class="mapbox-popup">
    <h4>${title}</h4>
    <h6>Telefonas:</h6>
    ${formatPhoneNumbers(phone)}
    <h6>El. paštas:</h6>
    ${formatEmails(emails)}
    <h6>Svetainės adresas:</h6>
    <a href="${website}">${website}</a>
  </div>`;

  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);

  const marker = new mapboxgl.Marker({ color: '#E92239' })
    .setLngLat(coordinates)
    .setPopup(popup)
    .addTo(map);

  markers.push(marker);
};

const deselectOptions = (options) => {
  options.forEach((option) => option.classList.remove('selected'));
};

const generateOptionsAndMarkers = () => {
  // Options
  const cities = [];
  const types = [];

  helpCenters.forEach((helpCenter) => {
    if (!cities.includes(helpCenter.city)) {
      cities.push(helpCenter.city);

      const optionCity = document.createElement('div');
      optionCity.classList.add('option');
      optionCity.textContent = helpCenter.city;
      optionCity.addEventListener('click', () => {
        const allCityOptions = document.querySelectorAll(
          '#city-options .option'
        );
        deselectOptions(allCityOptions);

        currentCity = helpCenter.city;
        optionCity.classList.add('selected');
        citySelectTriggerTextElement.textContent = optionCity.textContent;
      });

      cityOptionsContainer.appendChild(optionCity);
    }

    if (!types.includes(helpCenter.type)) {
      types.push(helpCenter.type);

      const optionType = document.createElement('div');
      optionType.classList.add('option');
      optionType.textContent = helpCenter.type;
      optionType.addEventListener('click', () => {
        const allTypeOptions = document.querySelectorAll(
          '#type-options .option'
        );
        deselectOptions(allTypeOptions);

        currentType = helpCenter.type;
        optionType.classList.add('selected');
        typeSelectTriggerTextElement.textContent = optionType.textContent;
      });

      typeOptionsContainer.appendChild(optionType);
    }
  });

  // Markers
  helpCenters.forEach((helpCenter) =>
    generateMarker(
      map,
      helpCenter.coordinates,
      helpCenter.title,
      helpCenter.phone,
      helpCenter.email,
      helpCenter.website
    )
  );
};

const removeAllMarkers = () => {
  markers.forEach((marker) => marker.remove());
  markers = [];
};

const filterHelpCenters = (city, type) => {
  removeAllMarkers();

  const filteredHelpCenters = helpCenters.filter(
    (helpCenter) =>
      helpCenter.city.includes(city) && helpCenter.type.includes(type)
  );

  filteredHelpCenters.forEach((helpCenter) =>
    generateMarker(
      map,
      helpCenter.coordinates,
      helpCenter.title,
      helpCenter.phone,
      helpCenter.email,
      helpCenter.website
    )
  );
};

const resetFilters = () => {
  currentCity = '';
  currentType = '';
  citySelectTriggerTextElement.textContent = '--- Pasirinkite miestą ---';
  typeSelectTriggerTextElement.textContent = '--- Pasirinkite tipą ---';
  cityOptionsContainer.scrollTop = 0;

  const allCityOptions = document.querySelectorAll('#city-options .option');
  const allTypeOptions = document.querySelectorAll('#type-options .option');
  deselectOptions(allCityOptions);
  deselectOptions(allTypeOptions);

  removeAllMarkers();

  helpCenters.forEach((helpCenter) =>
    generateMarker(
      map,
      helpCenter.coordinates,
      helpCenter.title,
      helpCenter.phone,
      helpCenter.email,
      helpCenter.website
    )
  );
};

const handleCitySelectClick = () => {
  if (citySelectElement.className.includes('open')) {
    cityOptionsContainer.scrollTop = 0;
    citySelectElement.classList.remove('open');

    return;
  }

  citySelectElement.classList.add('open');
};

const handleTypeSelectClick = () => {
  if (typeSelectElement.className.includes('open')) {
    typeSelectElement.classList.remove('open');

    return;
  }

  typeSelectElement.classList.add('open');
};

// Function to check if a click occurred outside of an element
const clickOutsideElement = (event, element) => !element.contains(event.target);

document.addEventListener('DOMContentLoaded', () => {
  generateOptionsAndMarkers();
});

citySelectElement.addEventListener('click', handleCitySelectClick);
typeSelectElement.addEventListener('click', handleTypeSelectClick);

document.addEventListener('click', (event) => {
  if (clickOutsideElement(event, citySelectElement)) {
    cityOptionsContainer.scrollTop = 0;
    citySelectElement.classList.remove('open');
  }

  if (clickOutsideElement(event, typeSelectElement)) {
    typeSelectElement.classList.remove('open');
  }
});

filterButton.addEventListener('click', () =>
  filterHelpCenters(currentCity, currentType)
);
resetButton.addEventListener('click', resetFilters);
