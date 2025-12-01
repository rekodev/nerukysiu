const helpCenters = [
  {
    title: "Akmenės rajono savivaldybės visuomenės sveikatos biuras",
    city: "Akmenė",
    type: "Konsultacijos",
    coordinates: [22.88445, 56.31945],
    phone: ["0 633 39532", "0 639 52727"],
    email: ["liliia.logvin@akmenesrvsb.lt", "psichologas@akmenesrvsb.lt"],
    website: "https://www.akmenesrvsb.lt",
  },
  {
    title: "Alytaus miesto savivaldybės visuomenės sveikatos biuras",
    city: "Alytus",
    type: "Konsultacijos",
    coordinates: [24.032352, 54.39894],
    phone: ["0 615 51653"],
    email: ["biuras@alytausvsb.lt"],
    website: "https://www.alytausvsb.lt/",
  },
  {
    title: "Alytaus rajono savivaldybės visuomenės sveikatos biuras",
    city: "Alytus",
    type: "Konsultacijos",
    coordinates: [24.02492, 54.40245],
    phone: ["0 315 21438"],
    email: ["info@alytausrajonovsb.lt"],
    website: "https://www.alytausrajonovsb.lt",
  },
  {
    title: "Anykščių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Anykščiai",
    type: "Konsultacijos",
    coordinates: [25.110235, 55.52579],
    phone: ["0 679 36139"],
    email: ["psichologe.avsb@gmail.com"],
    website: "https://www.anyksciuvsb.lt",
  },
  {
    title:
      "Birštono savivaldybės gyventojai gali kreiptis į Kauno rajono visuomenės sveikatos biurą",
    city: "Birštonas",
    type: "Konsultacijos",
    coordinates: [24.020556, 54.60278],
    phone: ["0 686 42377"],
    email: ["info.aukodeita@gmail.com"],
    website: "https://www.kaunorvsb.lt",
  },
  {
    title: "Biržų rajono savivaldybės visuomenės sveikatos biuras",
    city: "Biržai",
    type: "Konsultacijos",
    coordinates: [24.75534, 56.19818],
    phone: ["0 633 88482"],
    email: ["birzusveikata@gmail.com"],
    website: "https://www.birzuvsb.lt",
  },
  {
    title: "Druskininkų savivaldybės visuomenės sveikatos biuras",
    city: "Druskininkai",
    type: "Konsultacijos",
    coordinates: [23.986247, 54.013235],
    phone: ["0 645 57665"],
    email: ["psichologe@druskininkuvsb.lt"],
    website: "https://www.druskininkuvsb.lt",
  },
  {
    title: "Elektrėnų savivaldybės visuomenės sveikatos biuras",
    city: "Elektrėnai",
    type: "Konsultacijos",
    coordinates: [24.667226, 54.787115],
    phone: ["0 673 65903"],
    email: ["info@elektrenuvsb.lt"],
    website: "https://www.elektrenuvsb.lt",
  },
  {
    title: "Ignalinos rajono savivaldybės visuomenės sveikatos biuras",
    city: "Ignalina",
    type: "Konsultacijos",
    coordinates: [26.15135, 55.341288],
    phone: ["0 621 47334"],
    email: ["Rita.bogusiene@ignalinosvsb.lt"],
    website: "https://www.ignalinosvsb.lt",
  },
  {
    title: "Jonavos rajono visuomenės sveikatos biuras",
    city: "Jonava",
    type: "Konsultacijos",
    coordinates: [24.262101, 55.075853],
    phone: ["0 645 45326"],
    email: ["monika@jonavavsb.lt"],
    website: "https://www.jonavavsb.lt",
  },
  {
    title: "Joniškio rajono savivaldybės visuomenės sveikatos biuras",
    city: "Joniškis",
    type: "Konsultacijos",
    coordinates: [23.61452, 56.23896],
    phone: ["0 677 83524"],
    email: ["sveikatos.biuras@vsbjoniskis.lt"],
    website: "https://www.vsbjoniskis.lt",
  },
  {
    title: "Jurbarko rajono savivaldybės visuomenės sveikatos biuras",
    city: "Jurbarkas",
    type: "Konsultacijos",
    coordinates: [22.77089, 55.07703],
    phone: ["0 447 41882"],
    email: ["info@jurbarkovsb.lt"],
    website: "https://www.jurbarkovsb.lt",
  },
  {
    title:
      "Kalvarijos savivaldybės gyventojai gali kreiptis į Marijampolės visuomenės sveikatos biurą",
    city: "Kalvarija",
    type: "Konsultacijos",
    coordinates: [23.22583, 54.4141],
    phone: ["0 608 23913"],
    email: ["ineta.dabusinskaite@marijampolesvsb.lt"],
    website: "https://marijampolesvsb.lt",
  },
  {
    title: "Kaišiadorių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Kaišiadorys",
    type: "Konsultacijos",
    coordinates: [24.44915, 54.85822],
    phone: ["0 699 78007", "0 677 62779"],
    email: ["rima.sasnauskiene@gmail.com", "info@psichologunamai.lt"],
    website: "https://www.kaisiadorysvsb.lt",
  },
  {
    title: "Kauno miesto savivaldybės visuomenės sveikatos biuras",
    city: "Kaunas",
    type: "Konsultacijos",
    coordinates: [54.86304, 23.96355],
    phone: ["0 686 42377"],
    email: ["info.aukodeita@gmail.com"],
    website: "https://www.kaunovsb.lt",
  },
  {
    title: "Kauno rajono visuomenės sveikatos biuras",
    city: "Kaunas",
    type: "Konsultacijos",
    coordinates: [23.78025, 54.93807],
    phone: ["0 686 42377"],
    email: ["info.aukodeita@gmail.com"],
    website: "https://www.kaunorvsb.lt",
  },
  {
    title: "Kazlų Rūdos savivaldybės visuomenės sveikatos biuras",
    city: "Kazlų Rūda",
    type: "Konsultacijos",
    coordinates: [23.49722, 54.74142],
    phone: ["0 665 01511"],
    email: ["info@krvsb.lt"],
    website: "https://www.krvsb.lt",
  },
  {
    title: "Kėdainių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Kėdainiai",
    type: "Konsultacijos",
    coordinates: [23.95051, 55.27525],
    phone: ["0 659 82547"],
    email: ["vilijarkedainiuvsb@gmail.com"],
    website: "https://www.kedainiuvsb.lt",
  },
  {
    title: "Kelmės rajono savivaldybės visuomenės sveikatos biuras",
    city: "Kelmė",
    type: "Konsultacijos",
    coordinates: [22.9265, 55.62716],
    phone: ["0 659 46357"],
    email: ["kristina.simkiene@vsbkelme.lt"],
    website: "https://www.vsbkelme.lt",
  },
  {
    title: "Klaipėdos miesto savivaldybės visuomenės sveikatos biuras",
    city: "Klaipėda",
    type: "Konsultacijos",
    coordinates: [21.164719, 55.678486],
    phone: ["0 640 93348"],
    email: ["siga@sveikatosbiuras.lt"],
    website: "https://www.sveikatosbiuras.lt",
  },
  {
    title: "Klaipėdos rajono savivaldybės visuomenės sveikatos biuras",
    city: "Klaipėda",
    type: "Konsultacijos",
    coordinates: [21.397205, 55.710422],
    phone: ["0 46 453754"],
    email: ["gargzdai.biuras@visuomenessveikata.lt"],
    website: "http://www.visuomenessveikata.lt",
  },
  {
    title: "Kretingos rajono savivaldybės visuomenės sveikatos biuras",
    city: "Kretinga",
    type: "Konsultacijos",
    coordinates: [21.245151, 55.894698],
    phone: ["0 656 87553"],
    email: ["psichologas@kretingosvsb.lt"],
    website: "https://www.kretingosvsb.lt/",
  },
  {
    title:
      "Neringos savivaldybės gyventojai gali kreiptis į Klaipėdos miesto visuomenės sveikatos biurą",
    city: "Neringa",
    type: "Konsultacijos",
    coordinates: [21.00683, 55.30322],
    phone: ["0 640 93348"],
    email: ["siga@sveikatosbiuras.lt"],
    website: "https://www.sveikatosbiuras.lt",
  },
  {
    title: "Lazdijų rajono savivaldybės visuomenės sveikatos biuras",
    city: "Lazdijai",
    type: "Konsultacijos",
    coordinates: [23.51751, 54.23607],
    phone: ["0 686 83901"],
    email: ["info@lazdijuvsbiuras.lt"],
    website: "https://www.lazdijuvsb.lt",
  },
  {
    title: "Marijampolės savivaldybės visuomenės sveikatos biuras",
    city: "Marijampolė",
    type: "Konsultacijos",
    coordinates: [23.350919, 54.552229],
    phone: ["0 608 23913"],
    email: ["ineta.dabusinskaite@marijampolesvsb.lt"],
    website: "https://marijampolesvsb.lt",
  },
  {
    title:
      "Molėtų savivaldybės gyventojai gali kreiptis į Utenos rajono visuomenės sveikatos biurą",
    city: "Molėtai",
    type: "Konsultacijos dėl metimo rūkyti",
    coordinates: [25.418001, 55.2265309],
    phone: ["0 675 43542"],
    email: ["info@utenavsb.lt"],
    website: "https://www.utenavsb.lt",
  },
  {
    title: "Mažeikių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Mažeikiai",
    type: "Konsultacijos",
    coordinates: [22.33943, 56.30562],
    phone: ["0 443 41499"],
    email: ["info@mazeikiuvsb.lt"],
    website: "https://www.mazeikiuvsb.lt",
  },
  {
    title: "Pakruojo rajono savivaldybės visuomenės sveikatos biuras",
    city: "Pakruojis",
    type: "Konsultacijos",
    coordinates: [23.843351, 55.977661],
    phone: ["0 617 98807"],
    email: ["vsb.pakruojis@gmail.com"],
    website: "https://www.pakruojovsb.lt",
  },
  {
    title: "Palangos miesto savivaldybės visuomenės sveikatos biuras",
    city: "Palanga",
    type: "Konsultacijos",
    coordinates: [21.068293, 55.921967],
    phone: ["0 663 61420"],
    email: ["stiprinimas@palangosvsb.lt"],
    website: "https://www.palangosvsb.lt/",
  },
  {
    title: "Panevėžio miesto savivaldybės visuomenės sveikatos biuras",
    city: "Panevėžys",
    type: "Konsultacijos",
    coordinates: [24.35981, 55.72901],
    phone: ["0 607 32152"],
    email: ["psichikos.sveikata@panevezysvsb.lt"],
    website: "https://www.paneveziovsb.lt",
  },
  {
    title: "Panevėžio rajono savivaldybės visuomenės sveikatos biuras",
    city: "Panevėžys",
    type: "Konsultacijos",
    coordinates: [24.386671, 55.721447],
    phone: ["0 67 959213"],
    email: ["psichologe.vsb@gmail.com"],
    website: "https://www.paneveziorvsb.lt",
  },
  {
    title: "Pasvalio rajono savivaldybės visuomenės sveikatos biuras",
    city: "Pasvalys",
    type: "Konsultacijos",
    coordinates: [24.398763, 56.061753],
    phone: ["0 451 20130", "0 451 20131"],
    email: ["vsbiuras@gmail.com"],
    website: "https://pasvaliovsb.lt",
  },
  {
    title: "Plungės rajono savivaldybės visuomenės sveikatos biuras",
    city: "Plungė",
    type: "Konsultacijos",
    coordinates: [21.827003, 55.899035],
    phone: ["0 673 34028"],
    email: ["koordinatorius@plungesvsb.lt"],
    website: "https://www.plungesvsb.lt/",
  },
  {
    title: "Prienų rajono savivaldybės visuomenės sveikatos biuras",
    city: "Prienai",
    type: "Konsultacijos",
    coordinates: [23.94661, 54.63669],
    phone: ["0 671 02737"],
    email: ["info@gilessodas.lt"],
    website: "https://www.prienuvsb.lt",
  },
  {
    title:
      "Rietavo savivaldybės gyventojai gali kreiptis į Klaipėdos rajono visuomenės sveikatos biurą",
    city: "Rietavas",
    type: "Konsultacijos",
    coordinates: [21.93333, 55.71667],
    phone: ["0 46 453754"],
    email: ["gargzdai.biuras@visuomenessveikata.lt"],
    website: "http://www.visuomenessveikata.lt",
  },
  {
    title: "Radviliškio rajono savivaldybės visuomenės sveikatos biuras",
    city: "Radviliškis",
    type: "Konsultacijos",
    coordinates: [23.546096, 55.80665],
    phone: ["0 638 06133"],
    email: ["radviliskis@radviliskisvsb.lt"],
    website: "https://www.radviliskisvsb.lt",
  },
  {
    title: "Raseinių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Raseiniai",
    type: "Konsultacijos",
    coordinates: [23.13275, 55.38607],
    phone: ["0 428 70723"],
    email: ["info@raseiniuvsb.lt"],
    website: "https://www.raseiniuvsb.lt",
  },
  {
    title: "Rokiškio rajono savivaldybės visuomenės sveikatos biuras",
    city: "Rokiškis",
    type: "Konsultacijos",
    coordinates: [25.587256, 55.954433],
    phone: ["0 458 52055"],
    email: ["info@rsveikata.lt"],
    website: "https://www.rsveikata.lt",
  },
  {
    title: "Visagino savivaldybės gyventojai dėl metimo rūkyti paslaugų",
    city: "Visaginas",
    type: "Konsultacijos",
    coordinates: [26.433096, 55.605293],
    phone: ["0 619 52289"],
    email: ["visaginas@rsveikata.lt"],
    website: "https://www.rsveikata.lt",
  },
  {
    title:
      "Skuodo savivaldybės gyventojai gali kreiptis į Klaipėdos rajono visuomenės sveikatos biurą",
    city: "Skuodas",
    type: "Konsultacijos",
    coordinates: [21.53333, 56.26667],
    phone: ["0 46 453754"],
    email: ["gargzdai.biuras@visuomenessveikata.lt"],
    website: "http://www.visuomenessveikata.lt",
  },
  {
    title: "Šakių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Šakiai",
    type: "Konsultacijos",
    coordinates: [23.031844, 54.955],
    phone: ["0 630 90003", "0 345 52345"],
    email: ["info@sakiaivsb.lt"],
    website: "https://www.sakiaivsb.lt",
  },
  {
    title: "Šalčininkų rajono savivaldybės visuomenės sveikatos biuras",
    city: "Šalčininkai",
    type: "Konsultacijos",
    coordinates: [25.38017, 54.30578],
    phone: ["0 640 65290", "0 634 07143"],
    email: ["ana.jankelevic@svsb.lt"],
    website: "https://www.svsb.lt",
  },
  {
    title: "Šiaulių miesto savivaldybės visuomenės sveikatos biuras",
    city: "Šiauliai",
    type: "Konsultacijos",
    coordinates: [23.31099, 55.93093],
    phone: ["0 672 50744"],
    email: ["migle.klimaite@sveikatos-biuras.lt"],
    website: "https://www.siauliuvsb.lt",
  },
  {
    title: "Šiaulių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Šiauliai",
    type: "Konsultacijos",
    coordinates: [22.93552, 56.00379],
    phone: ["0 670 46753"],
    email: ["programos@siauliurvsb.lt"],
    website: "https://www.siauliurvsb.lt",
  },
  {
    title: "Šilalės rajono savivaldybės visuomenės sveikatos biuras",
    city: "Šilalė",
    type: "Konsultacijos",
    coordinates: [22.18002, 55.49655],
    phone: ["0 647 79369"],
    email: ["info@silalesvsb.lt"],
    website: "https://www.silalesvsb.lt",
  },
  {
    title: "Šilutės rajono savivaldybės visuomenės sveikatos biuras",
    city: "Šilutė",
    type: "Konsultacijos",
    coordinates: [21.46388, 55.34365],
    phone: ["0 654 46021", "0 441 43210"],
    email: ["info@silutessveikata.lt"],
    website: "https://www.silutessveikata.lt",
  },
  {
    title: "Švenčionių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Švenčionys",
    type: "Konsultacijos",
    coordinates: [26.155234, 55.130451],
    phone: ["0 620 608"],
    email: ["biuras@svencioniuvsb.lt"],
    website: "https://www.svencioniuvsb.lt/",
  },
  {
    title: "Tauragės rajono savivaldybės visuomenės sveikatos biuras",
    city: "Tauragė",
    type: "Konsultacijos",
    coordinates: [22.289072, 55.249896],
    phone: ["0 607 41646"],
    email: ["neringa.slepaviciene@tauragesvsb.lt"],
    website: "http://www.tauragesvsb.lt",
  },
  {
    title: "Telšių rajono savivaldybės visuomenės sveikatos biuras",
    city: "Telšiai",
    type: "Konsultacijos",
    coordinates: [22.25052, 55.98379],
    phone: ["0 609 84701"],
    email: ["info@telsiurvsb.lt"],
    website: "https://www.telsiurvsb.lt",
  },
  {
    title: "Trakų rajono savivaldybės visuomenės sveikatos biuras",
    city: "Trakai",
    type: "Konsultacijos",
    coordinates: [24.93583, 54.63701],
    phone: ["0 611 43841"],
    email: ["irma@trakuvsb.lt"],
    website: "https://www.trakuvsb.lt",
  },
  {
    title: "Ukmergės rajono savivaldybės visuomenės sveikatos biuras",
    city: "Ukmergė",
    type: "Konsultacijos",
    coordinates: [24.751939, 55.246697],
    phone: ["0 673 84973"],
    email: ["sveikatosbiuras@ukmergesvsb.lt"],
    website: "http://ukmergesvsb.lt/",
  },
  {
    title: "Utenos rajono savivaldybės visuomenės sveikatos biuras",
    city: "Utena",
    type: "Konsultacijos dėl metimo rūkyti",
    coordinates: [25.6009, 55.49577],
    phone: ["0 675 43542"],
    email: ["info@utenavsb.lt"],
    website: "https://www.utenavsb.lt",
  },
  {
    title: "Varėnos rajono savivaldybės visuomenės sveikatos biuras",
    city: "Varėna",
    type: "Konsultacijos",
    coordinates: [24.576691, 54.212267],
    phone: ["0 636 56209"],
    email: ["diana.pekarskiene@gmail.com"],
    website: "https://www.varenosvsb.lt",
  },
  {
    title: "Vilkaviškio rajono savivaldybės visuomenės sveikatos biuras",
    city: "Vilkaviškis",
    type: "Konsultacijos",
    coordinates: [23.036712, 54.659898],
    phone: ["0 342 31058", "0 665 23541"],
    email: ["info@vilkaviskiovsb.lt"],
    website: "https://vilkaviskiovsb.lt/lt_lt",
  },
  {
    title: "Vilniaus miesto savivaldybės visuomenės sveikatos biuras",
    city: "Vilnius",
    type: "Konsultacijos",
    coordinates: [25.249642, 54.681971],
    phone: ["0 652 07020"],
    email: ["psichikossveikata@vvsb.lt"],
    website: "https://www.vvsb.lt",
  },
  {
    title: "Vilniaus rajono savivaldybės visuomenės sveikatos biuras",
    city: "Vilnius",
    type: "Konsultacijos",
    coordinates: [25.19547, 54.76559],
    phone: ["0 659 51745"],
    email: ["neringa.silenskiene@vrvsb.lt"],
    website: "https://www.vrvsb.lt",
  },
  {
    title: "Zarasų rajono savivaldybės visuomenės sveikatos biuras",
    city: "Zarasai",
    type: "Konsultacijos",
    coordinates: [26.25028, 55.73267],
    phone: ["0 673 73009"],
    email: ["ana.koval@zarasai.lt"],
    website: "https://www.zarasuvsb.lt",
  },
  {
    title: "Kupiškio rajono savivaldybės visuomenės sveikatos biuras",
    city: "Kupiškis",
    type: "Konsultacijos",
    coordinates: [24.97911, 55.83785],
    phone: ["0 616 82982"],
    email: ["info@kupiskiovsb.lt"],
    website: "https://www.kupiskiovsb.lt",
  },
  {
    title: "Respublikinio priklausomybės ligų centro Panevėžio filialas",
    city: "Panevėžys",
    type: "Individualios specialistų konsultacijos",
    coordinates: [24.401301, 55.742401],
    phone: ["0 45 582 673"],
    email: ["registratura.panevezys@rplc.lt"],
    website: "https://www.rplc.lt/filialai/panevezio-filialas",
  },
  {
    title: "Respublikinio priklausomybės ligų centro Kauno filialas",
    city: "Kaunas",
    type: "Individualios specialistų konsultacijos",
    coordinates: [23.925544, 54.906152],
    phone: ["0 37 333 255"],
    email: ["registratura.kaunas@rplc.lt"],
    website: "https://www.rplc.lt/filialai/kauno-filialas",
  },
  {
    title: "Respublikinio priklausomybės ligų centro Klaipėdos filialas",
    city: "Klaipėda",
    type: "Individualios specialistų konsultacijos",
    coordinates: [21.149621, 55.693712],
    phone: ["0 46 415 025"],
    email: ["registratura.klaipeda@rplc.lt"],
    website: "https://www.rplc.lt/filialai/klaipedos-filialas",
  },
  {
    title: "Respublikinio priklausomybės ligų centro Šiaulių filialas",
    city: "Šiauliai",
    type: "Individualios specialistų konsultacijos",
    coordinates: [23.30857, 55.906355],
    phone: ["0 41 455 644"],
    email: ["registratura.siauliai@rplc.lt"],
    website: "https://www.rplc.lt/filialai/siauliu-filialas",
  },
  {
    title: "Respublikinio priklausomybės ligų centro Vilniaus filialas",
    city: "Vilnius",
    type: "Individualios specialistų konsultacijos",
    coordinates: [25.242691, 54.671405],
    phone: ["0 5 213 7808"],
    email: ["registratura@rplc.lt"],
    website: "https://www.rplc.lt/filialai/vilniaus-filialas",
  },
];

// Mapbox initialization
const MAPBOX_ACCESS_TOKEN = config.MAPBOX_ACCESS_TOKEN;

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: [23.8813, 55.1694],
  zoom: 6.2,
});

const fullscreenControl = new mapboxgl.FullscreenControl();
const nav = new mapboxgl.NavigationControl();

map.addControl(fullscreenControl, "top-right");
map.addControl(nav, "bottom-right");
map.scrollZoom.disable();

const filterButton = document.getElementById("filter-button");
const resetButton = document.getElementById("reset-button");

const citySelectElement = document.querySelector('[data-select="city"]');

const citySelectTriggerTextElement = document.querySelector(
  '[data-select="city"] .custom-select-trigger p',
);

const cityOptionsContainer = document.getElementById("city-options");

let currentCity = "";

let markers = [];

const formatPhoneNumbers = (phoneNumbers) =>
  phoneNumbers
    .map((number) => `<a href='tel:${number}'>${number}</a>`)
    .join("");

const formatEmails = (emails) =>
  emails.map((email) => `<a href='mailto:${email}'>${email}</a>`).join("");

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

  const marker = new mapboxgl.Marker({ color: "#E92239" })
    .setLngLat(coordinates)
    .setPopup(popup)
    .addTo(map);

  markers.push(marker);
};

const deselectOptions = (options) => {
  options.forEach((option) => option.classList.remove("selected"));
};

const generateOptionsAndMarkers = () => {
  // Options
  const cities = [];

  helpCenters.forEach((helpCenter) => {
    if (!cities.includes(helpCenter.city)) {
      cities.push(helpCenter.city);

      const optionCity = document.createElement("div");
      optionCity.classList.add("option");
      optionCity.textContent = helpCenter.city;
      optionCity.addEventListener("click", () => {
        const allCityOptions = document.querySelectorAll(
          "#city-options .option",
        );
        deselectOptions(allCityOptions);

        currentCity = helpCenter.city;
        optionCity.classList.add("selected");
        citySelectTriggerTextElement.textContent = optionCity.textContent;
      });

      cityOptionsContainer.appendChild(optionCity);
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
      helpCenter.website,
    ),
  );
};

const removeAllMarkers = () => {
  markers.forEach((marker) => marker.remove());
  markers = [];
};

const filterHelpCenters = (city) => {
  removeAllMarkers();

  const filteredHelpCenters = helpCenters.filter((helpCenter) =>
    helpCenter.city.includes(city),
  );

  filteredHelpCenters.forEach((helpCenter) =>
    generateMarker(
      map,
      helpCenter.coordinates,
      helpCenter.title,
      helpCenter.phone,
      helpCenter.email,
      helpCenter.website,
    ),
  );
};

const resetFilters = () => {
  currentCity = "";

  citySelectTriggerTextElement.textContent = "--- Pasirinkite miestą ---";

  cityOptionsContainer.scrollTop = 0;

  const allCityOptions = document.querySelectorAll("#city-options .option");

  deselectOptions(allCityOptions);

  removeAllMarkers();

  helpCenters.forEach((helpCenter) =>
    generateMarker(
      map,
      helpCenter.coordinates,
      helpCenter.title,
      helpCenter.phone,
      helpCenter.email,
      helpCenter.website,
    ),
  );
};

const handleCitySelectClick = () => {
  if (citySelectElement.className.includes("open")) {
    cityOptionsContainer.scrollTop = 0;
    citySelectElement.classList.remove("open");

    return;
  }

  citySelectElement.classList.add("open");
};

// Function to check if a click occurred outside of an element
const clickOutsideElement = (event, element) => !element.contains(event.target);

document.addEventListener("DOMContentLoaded", () => {
  generateOptionsAndMarkers();
});

citySelectElement.addEventListener("click", handleCitySelectClick);

document.addEventListener("click", (event) => {
  if (clickOutsideElement(event, citySelectElement)) {
    cityOptionsContainer.scrollTop = 0;
    citySelectElement.classList.remove("open");
  }
});

filterButton.addEventListener("click", () => filterHelpCenters(currentCity));

resetButton.addEventListener("click", resetFilters);
