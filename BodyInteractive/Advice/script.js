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
const textContentContainerElement = document.getElementById('text-content');

const timelineTexts = [
  'PO 1 - 4 VALANDŲ',
  'PO 8 - 12 VALANDŲ',
  'PO 1 DIENOS',
  'PO 2 IR 3 DIENŲ',
  'PO 4 IR 5 DIENŲ',
  'PO 1 SAVAITĖS',
  'PO 2 - 3 SAVAIČIŲ',
  'PO 5 - 6 SAVAIČIŲ',
  'PO 2 IR 4 MĖNESIŲ',
  'PO 6 - 9 MĖNESIŲ',
  'PO 1 IR 5 METŲ',
  'PO 10 IR 15 METŲ',
];

const timelineTextsContent = [
  [
    {
      heading: 'PO PIRMOS VALANDOS',
      subheading: 'Sumažėja kraujo spaudimas ir ne taip tankiai plaka širdis',
      text: 'Nesakyk „tai buvo mano paskutinė cigaretė“, sakyk „šiandien aš nerūkysiu“. Atmink, tu gali atsispirti nikotino potraukiui. Pati pradžia, metus rūkyti, nebus lengva. Bet kuo ilgiau atsilaikysi nerūkęs, tuo troškimas užsirūkyti mažės. Sudaryk sąrašą, surašydamas priežastis, kodėl nori atsikratyti šio įpročio, kokia tau bus iš to nauda. Sąrašą ateityje galėsi vis papildyti naujais tave motyvuojančiais mesti rūkyti dalykais.',
    },
    {
      heading: 'PO KETURIŲ VALANDŲ',
      subheading: 'Gali džiaugtis gaivesniu burnos kvapu',
      text: 'Iš burnos nebesklinda nemalonus kvapas, kurį sukeldavo rūkymas. Savo namuose, mašinoje ir darbo vietoje pašalink visus daiktus (pvz. peleninės, žiebtuvėliai), kurie tau asocijuojasi su rūkymu.',
    },
  ],
  [
    {
      heading: 'PO 8 VALANDŲ',
      subheading:
        'Širdies dažnis normalizuojasi, pagerėja kraujotaka ir tavo pirštų galiukai jau nebe tokie šalti',
      text: 'Keisk kasdienę dienotvarkę, pvz. pakeisk savo rytinės ruošos (prausimosi, dantų valymo, pusryčių) eilės tvarką. Stenkis visą laiką būti užsiėmęs.',
    },
    {
      heading: 'PO 12 VALANDŲ',
      subheading:
        'Kraujyje žymiai sumažėja nikotino ir anglies monoksido, pradeda mažėti širdies priepuolio tikimybė',
      text: 'Suplanuok būdus, kaip gali sumažinti abstinencijos požymius ir potraukį nikotinui. Pasivaikščiojimai, karšta vonia, gero filmo žiūrėjimas, jogos užsiėmimai tik keli iš daugybės atsipalaidavimo būdų.',
    },
  ],
  [
    {
      heading: 'PO 20 VALANDŲ',
      subheading: 'Gerėja uoslės ir skonio jutimai',
      text: 'Rinkis mažiau kaloringus užkandžius (pvz., vaisius, daržoves), gerk daug vandens. Pirmosiomis nerūkymo savaitėmis pasistenk gerti mažiau gėrimų, kuriuose yra kofeino, nes metus rūkyti kofeino poveikis gali būti stipresnis.',
    },
    {
      heading: 'PO 1 DIENOS',
      subheading:
        'Iki normalaus lygio nukrinta anglies monoksidas ir pakyla deguonies kiekis kraujyje, kuris padeda geriau funkcionuoti tavo organams',
      text: 'Savo draugams, šeimos nariams ir bendradarbiams pasakyk, kaip jie galėtų tau padėti mesti rūkyti. Vienas lengviausių būdų tau padėti, yra tavo rūkančių draugų pasižadėjimas nesiūlyti tau parūkyti, neskolinti cigarečių. Paprašyk bendradarbių, draugų ir šeimos palaikymo prieš mesdamas rūkyti.',
    },
  ],
  [
    {
      heading: 'PO 2 DIENŲ',
      subheading: 'Nikotino skilimo produktai iš tavo organizmo jau pasišalino',
      text: 'Būtų gerai, kad pirmosiomis dienomis metus rūkyti neleistum laiko su rūkančiaisiais. Jeigu jauti didžiulį norą užsirūkyti, pasistenk truputėlį palaukti. Vos per 10 minučių stiprus noras parūkyti tikrai praeis.',
    },
    {
      heading: 'PO 3 DIENŲ',
      subheading: 'Tu jauti padidėjusį energijos kiekį',
      text: 'Būtų gerai, kad pirmosiomis dienomis metus rūkyti neleistum laiko su rūkančiaisiais. Jeigu jauti didžiulį norą užsirūkyti, pasistenk truputėlį palaukti. Vos per 10 minučių stiprus noras parūkyti tikrai praeis.',
    },
  ],
  [
    {
      subheading:
        'Kepenys ir inkstai šalina iš organizmo rūkymo metu susikaupusias toksines medžiagas. Sustiprėja antioksidantų poveikis organizmui, padedant kovoti su ligomis (širdies ir kraujagyslių, virškinimo, nervų sistemų)',
      text: 'Pirmosios dienos metus rūkyti pačios sunkiausios, bet tu puikiai susitvarkei. Apdovanok save, – už metus rūkyti sutaupytus pinigus įsigyk ką nors sau (pvz., naują knygą ar nueik su draugu į kiną).',
    },
  ],
  [
    {
      subheading:
        'Gerėja plaučių funkcija, tavo uoslės ir skonio jutimai sustiprėja',
      text: 'Iš anksto apgalvok situacijas, kaip reaguosi, kai sulauksi siūlymų parūkyti. Naudok frazę “Ačiū, aš nerūkau”. Dažniausiai daroma klaida – manoma, kad viena surūkyta cigaretė nepakenks. Stenkis, kad tavo rankos visada būtų užimtos, – laikyk rankose pieštuką / tušinuką / telefoną.',
    },
  ],
  [
    {
      subheading:
        'Mažėja geltonos dėmės, kurios buvo atsiradusios ant pirštų nuo rūkymo',
      text: 'Pradžioje venk situacijų, kuriose bus rūkančiųjų, ypatingai jei bus vartojami ir alkoholiniai gėrimai. Laiką leisk su draugais, kurie nerūko.',
    },
  ],
  [
    {
      subheading:
        'Pagerėja kraujotaka organizme; vitamino C lygis tavo kraujyje normalizuojasi, todėl gerėja odos būklė',
      text: 'Tave vis dar aplanko mintys apie rūkymą, ypatingai, kai atsiduri situacijose, kurios asocijuojasi su rūkymu. Žinok, visos pastangos, kurių tau jau prireikė, kad mestum rūkyti, ar dar prireiks, tikrai to vertos. Peržiūrėk savo sudarytą sąrašą, kodėl verta nerūkyti.',
    },
  ],
  [
    {
      heading: 'PO 2 MĖNESIŲ',
      subheading: 'Sumažėjęs kosulys, dusulys',
      text: 'Galvok tik apie tai, kad esi nerūkantis. Venk „tik vienos“ cigaretės, nes taip dauguma žmonių vėl pradeda rūkyti.',
    },
    {
      heading: 'PO 3 MĖNESIŲ',
      subheading:
        'Pagerėja plaučių darbas, todėl gerėja gleivių, dervų ir dulkių pašalinimas',
      text: 'Eksrūkaliai tvirtina, kad jų gyvenimo kokybė žymiai pagerėjo po to, kai metė rūkyti.',
    },
    {
      heading: 'PO 4 MĖNESIŲ',
      subheading:
        'Kraujotaka gerėja, pagerėja „gerojo” cholesterolio lygis kraujyje, kraujas nebe toks tirštas, tad sumažėja ūmių trombų susiformavimo rizika',
      text: 'Tavo sveikatos būklė pagerėjo, mažiau sergi ir jauti ne tokius intensyvius rūkymo sukeltus simptomus.',
    },
  ],
  [
    {
      heading: 'PO 6 MĖNESIŲ',
      subheading: 'Patiri mažiau streso, jautiesi ramesnis, mažiau nervingas',
      text: 'Noras užsirūkyti vis dar gali užplūsti. Visos tavo pastangos, kurių tau prireikė, kad mestum rūkyti, to vertos.',
    },
    {
      heading: 'PO 9 MĖNESIŲ',
      subheading:
        'Sustiprėjusi imuninė sistema. Sumažėjęs / išnykęs atsikosėjimas skrepliais',
      text: 'Mėgaukis nerūkančiojo gyvenimu. Tau nebereikia apgaudinėti savęs ir teisintis, kodėl rūkei. Negalvok, kad rūkei dėl problemų ar patiriamo streso. Rūkymas buvo tavo problema. Dabar tu jos nebeturi.',
    },
  ],
  [
    {
      heading: 'PO 1 METŲ',
      subheading: 'Išeminės širdies ligos rizika sumažėja 50 proc.',
      text: 'Net ir praėjus daugybei laiko po to, kai metei rūkyti, gali patirti trumpas intensyvias abstinencijos kančias. Vis prisimink teigiamus dalykus, kodėl verta nerūkyti. Didžiuokis savo dideliu pasiekimu.',
    },
    {
      heading: 'PO 5 METŲ',
      subheading: 'Insulto rizika sumažėja iki vidutinės statistinės ribos.',
      text: 'Gali užtikrintai didžiuotis, kad įveikei sau išsikeltą iššūkį, – mesti rūkyti ir pagerinti savo gyvenimo kokybę.',
    },
  ],
  [
    {
      heading: 'PO 10 METŲ',
      subheading:
        'Plaučių vėžio rizika sumažėja 50 proc., o taip pat mažesnė gerklų, virškinimo trakto, šlapimo pūslės, skydliaukės bei kepenų vėžio rizika.',
      text: 'Rūkymas jau praeitis, tu jau gali gerai jaustis ir prie kitų rūkančiųjų.',
    },
    {
      heading: 'PO 15 METŲ',
      subheading:
        'Išeminės širdies ligos rizika sumažėja iki tokios pačios ribos kaip nerūkančių žmonių.',
      text: 'Savo didelių pastangų dėka gali džiaugtis pagerėjusia gyvenimo kokybe.',
    },
  ],
];

const generateTextContentElement = (textContentObjectArray) => {
  // Clear existing content
  while (textContentContainerElement.firstChild) {
    textContentContainerElement.removeChild(
      textContentContainerElement.firstChild
    );
  }

  // Iterate through each object in the array
  textContentObjectArray.forEach((obj) => {
    if (obj.heading) {
      const heading = document.createElement('h2');
      heading.textContent = obj.heading;
      textContentContainerElement.appendChild(heading);
    }

    if (obj.subheading) {
      const subheading = document.createElement('h4');
      subheading.textContent = obj.subheading;
      textContentContainerElement.appendChild(subheading);
    }

    if (obj.text) {
      const text = document.createElement('p');
      text.textContent = obj.text;
      textContentContainerElement.appendChild(text);
    }
  });
};

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

    addActiveClassToBodyPart(index);

    generateTextContentElement(timelineTextsContent[index]);
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
