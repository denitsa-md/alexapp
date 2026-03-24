const LANGS = {
  da: {
    code: 'da',
    tts: 'da-DK',
    flag: '🇩🇰',
    title: '🌟 Alexandras Alfabet 🌟',
    questionPrefix: 'Hvilken starter med',
    hearBtn: '🔊 Hør',
    nextBtn: 'Næste ➡️',
    pointsLabel: 'point',
    alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Æ','Ø','Å'],
    correct: [
      "🎉 Fantastisk! Du er så klog!",
      "🌟 Rigtigt! Du er en stjerne!",
      "🎊 WOW! Perfekt svar!",
      "🦄 Ja ja ja! Godt klaret!",
      "✨ Bravo Alexandra!",
      "🎈 Hurra! Det er rigtigt!",
    ],
    wrong: [
      "😊 Næsten! Prøv igen næste gang!",
      "💪 Ikke helt – men du lærer det!",
      "🌈 Øv, men godt forsøgt!",
      "🐣 Ikke rigtigt, men du er modig!",
    ],
    items: [
      // A
      { name: "Ananas",      emoji: "🍍", wiki: "Pineapple",         letter: "A", type: "frugt" },
      { name: "Abe",         emoji: "🐒", wiki: "Monkey",            letter: "A", type: "dyr"   },
      { name: "Alligator",   emoji: "🐊", wiki: "Alligator",         letter: "A", type: "dyr"   },
      // B
      { name: "Banan",       emoji: "🍌", wiki: "Banana",            letter: "B", type: "frugt" },
      { name: "Bjørn",       emoji: "🐻", wiki: "Brown bear",        letter: "B", type: "dyr"   },
      { name: "Bæver",       emoji: "🦫", wiki: "Beaver",            letter: "B", type: "dyr"   },
      // C
      { name: "Citron",      emoji: "🍋", wiki: "Lemon",             letter: "C", type: "frugt" },
      { name: "Kakadu",      emoji: "🦜", wiki: "Cockatoo",          letter: "C", type: "dyr"   },
      // D
      { name: "Dragefrugt",  emoji: "🌺", wiki: "Pitaya",            letter: "D", type: "frugt" },
      { name: "Due",         emoji: "🕊️", wiki: "Rock dove",         letter: "D", type: "dyr"   },
      { name: "Delfin",      emoji: "🐬", wiki: "Dolphin",           letter: "D", type: "dyr"   },
      // E
      { name: "Elefant",     emoji: "🐘", wiki: "Asian elephant",    letter: "E", type: "dyr"   },
      { name: "Egern",       emoji: "🐿️", wiki: "Squirrel",          letter: "E", type: "dyr"   },
      // F
      { name: "Fersken",     emoji: "🍑", wiki: "Peach",             letter: "F", type: "frugt" },
      { name: "Flamingo",    emoji: "🦩", wiki: "Flamingo",          letter: "F", type: "dyr"   },
      { name: "Frø",         emoji: "🐸", wiki: "Frog",              letter: "F", type: "dyr"   },
      // G
      { name: "Guava",       emoji: "🍈", wiki: "Guava",             letter: "G", type: "frugt" },
      { name: "Gepard",      emoji: "🐆", wiki: "Cheetah",           letter: "G", type: "dyr"   },
      { name: "Gorilla",     emoji: "🦍", wiki: "Gorilla",           letter: "G", type: "dyr"   },
      { name: "Giraf",       emoji: "🦒", wiki: "Giraffe",           letter: "G", type: "dyr"   },
      // H
      { name: "Haj",         emoji: "🦈", wiki: "Shark",             letter: "H", type: "dyr"   },
      { name: "Hjort",       emoji: "🦌", wiki: "Deer",              letter: "H", type: "dyr"   },
      { name: "Humlebi",     emoji: "🐝", wiki: "Bumblebee",         letter: "H", type: "dyr"   },
      // I
      { name: "Iguana",      emoji: "🦎", wiki: "Green iguana",      letter: "I", type: "dyr"   },
      // J
      { name: "Jackfrugt",   emoji: "🥭", wiki: "Jackfruit",         letter: "J", type: "frugt" },
      { name: "Jaguar",      emoji: "🐆", wiki: "Jaguar",            letter: "J", type: "dyr"   },
      // K
      { name: "Kiwi",        emoji: "🥝", wiki: "Kiwifruit",         letter: "K", type: "frugt" },
      { name: "Koala",       emoji: "🐨", wiki: "Koala",             letter: "K", type: "dyr"   },
      { name: "Kamel",       emoji: "🐪", wiki: "Camel",             letter: "K", type: "dyr"   },
      { name: "Krokodille",  emoji: "🐊", wiki: "Crocodile",         letter: "K", type: "dyr"   },
      // L
      { name: "Litchi",      emoji: "🍒", wiki: "Lychee",            letter: "L", type: "frugt" },
      { name: "Løve",        emoji: "🦁", wiki: "Lion",              letter: "L", type: "dyr"   },
      { name: "Lama",        emoji: "🦙", wiki: "Llama",             letter: "L", type: "dyr"   },
      // M
      { name: "Mango",       emoji: "🥭", wiki: "Mango",             letter: "M", type: "frugt" },
      { name: "Mangostan",   emoji: "🫐", wiki: "Mangosteen",        letter: "M", type: "frugt" },
      { name: "Mus",         emoji: "🐭", wiki: "House mouse",       letter: "M", type: "dyr"   },
      // N
      { name: "Næsehorn",    emoji: "🦏", wiki: "Rhinoceros",        letter: "N", type: "dyr"   },
      // O
      { name: "Orange",      emoji: "🍊", wiki: "Orange (fruit)",    letter: "O", type: "frugt" },
      { name: "Orangutan",   emoji: "🦧", wiki: "Orangutan",         letter: "O", type: "dyr"   },
      { name: "Odder",       emoji: "🦦", wiki: "Otter",             letter: "O", type: "dyr"   },
      // P
      { name: "Papaya",      emoji: "🍈", wiki: "Papaya",            letter: "P", type: "frugt" },
      { name: "Panda",       emoji: "🐼", wiki: "Giant panda",       letter: "P", type: "dyr"   },
      { name: "Pingvin",     emoji: "🐧", wiki: "Penguin",           letter: "P", type: "dyr"   },
      { name: "Papegøje",    emoji: "🦜", wiki: "Parrot",            letter: "P", type: "dyr"   },
      // R
      { name: "Rambutan",    emoji: "🍓", wiki: "Rambutan",          letter: "R", type: "frugt" },
      { name: "Reje",        emoji: "🦐", wiki: "Shrimp",            letter: "R", type: "dyr"   },
      { name: "Ræv",         emoji: "🦊", wiki: "Red fox",           letter: "R", type: "dyr"   },
      // S
      { name: "Stjernefrugt",emoji: "🌟", wiki: "Carambola",         letter: "S", type: "frugt" },
      { name: "Slange",      emoji: "🐍", wiki: "Snake",             letter: "S", type: "dyr"   },
      { name: "Sæl",         emoji: "🦭", wiki: "Pinniped",          letter: "S", type: "dyr"   },
      { name: "Sommerfugl",  emoji: "🦋", wiki: "Butterfly",         letter: "S", type: "dyr"   },
      // T
      { name: "Tiger",       emoji: "🐯", wiki: "Tiger",             letter: "T", type: "dyr"   },
      { name: "Tapir",       emoji: "🐗", wiki: "Tapir",             letter: "T", type: "dyr"   },
      { name: "Tudse",       emoji: "🐸", wiki: "Toad",              letter: "T", type: "dyr"   },
      // U
      { name: "Ugle",        emoji: "🦉", wiki: "Owl",               letter: "U", type: "dyr"   },
      // V
      { name: "Vandmelon",   emoji: "🍉", wiki: "Watermelon",        letter: "V", type: "frugt" },
      { name: "Varan",       emoji: "🦎", wiki: "Monitor lizard",    letter: "V", type: "dyr"   },
      // Y
      { name: "Yak",         emoji: "🐂", wiki: "Yak",               letter: "Y", type: "dyr"   },
      // Z
      { name: "Zebra",       emoji: "🦓", wiki: "Zebra",             letter: "Z", type: "dyr"   },
      // Æ
      { name: "Æble",        emoji: "🍎", wiki: "Apple",             letter: "Æ", type: "frugt" },
      { name: "Æsel",        emoji: "🫏", wiki: "Donkey",            letter: "Æ", type: "dyr"   },
      // Ø
      { name: "Ørn",         emoji: "🦅", wiki: "Eagle",             letter: "Ø", type: "dyr"   },
      // Å
      { name: "Ål",          emoji: "🐟", wiki: "Eel",               letter: "Å", type: "dyr"   },
    ]
  },
  bg: {
    code: 'bg',
    tts: 'bg-BG',
    flag: '🇧🇬',
    title: '🌟 Азбуката на Александра 🌟',
    questionPrefix: 'Кое започва с',
    hearBtn: '🔊 Чуй',
    nextBtn: 'Напред ➡️',
    pointsLabel: 'точки',
    alphabet: ['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ю','Я'],
    correct: [
      "🎉 Браво! Ти си толкова умна!",
      "🌟 Вярно! Ти си звезда!",
      "🎊 УАУ! Перфектен отговор!",
      "🦄 Да да да! Страхотно!",
      "✨ Браво Александра!",
      "🎈 Ура! Правилно е!",
    ],
    wrong: [
      "😊 Почти! Опитай пак следващия път!",
      "💪 Не съвсем – но се учиш!",
      "🌈 Ох, но добър опит!",
      "🐣 Не е правилно, но си смела!",
    ],
    items: [
      // А
      { name: "Ананас",    emoji: "🍍", wiki: "Pineapple",       letter: "А", type: "плод"    },
      { name: "Авокадо",   emoji: "🥑", wiki: "Avocado",         letter: "А", type: "плод"    },
      { name: "Алигатор",  emoji: "🐊", wiki: "Alligator",       letter: "А", type: "животно" },
      // Б
      { name: "Банан",     emoji: "🍌", wiki: "Banana",          letter: "Б", type: "плод"    },
      { name: "Бобър",     emoji: "🦫", wiki: "Beaver",          letter: "Б", type: "животно" },
      { name: "Бизон",     emoji: "🦬", wiki: "American bison",  letter: "Б", type: "животно" },
      // В
      { name: "Вълк",      emoji: "🐺", wiki: "Gray wolf",       letter: "В", type: "животно" },
      { name: "Видра",     emoji: "🦦", wiki: "Otter",           letter: "В", type: "животно" },
      // Г
      { name: "Горила",    emoji: "🦍", wiki: "Gorilla",         letter: "Г", type: "животно" },
      { name: "Гепард",    emoji: "🐆", wiki: "Cheetah",         letter: "Г", type: "животно" },
      { name: "Гущер",     emoji: "🦎", wiki: "Lizard",          letter: "Г", type: "животно" },
      // Д
      { name: "Делфин",    emoji: "🐬", wiki: "Dolphin",         letter: "Д", type: "животно" },
      { name: "Диня",      emoji: "🍉", wiki: "Watermelon",      letter: "Д", type: "плод"    },
      // Е
      { name: "Елен",      emoji: "🦌", wiki: "Deer",            letter: "Е", type: "животно" },
      { name: "Ехидна",    emoji: "🦔", wiki: "Echidna",         letter: "Е", type: "животно" },
      // Ж
      { name: "Жираф",     emoji: "🦒", wiki: "Giraffe",         letter: "Ж", type: "животно" },
      { name: "Жаба",      emoji: "🐸", wiki: "Frog",            letter: "Ж", type: "животно" },
      // З
      { name: "Зебра",     emoji: "🦓", wiki: "Zebra",           letter: "З", type: "животно" },
      { name: "Заек",      emoji: "🐰", wiki: "Rabbit",          letter: "З", type: "животно" },
      // И
      { name: "Игуана",    emoji: "🦎", wiki: "Green iguana",    letter: "И", type: "животно" },
      // К
      { name: "Кенгуру",   emoji: "🦘", wiki: "Kangaroo",        letter: "К", type: "животно" },
      { name: "Кокос",     emoji: "🥥", wiki: "Coconut",         letter: "К", type: "плод"    },
      { name: "Крокодил",  emoji: "🐊", wiki: "Crocodile",       letter: "К", type: "животно" },
      { name: "Кобра",     emoji: "🐍", wiki: "Cobra",           letter: "К", type: "животно" },
      // Л
      { name: "Лъв",       emoji: "🦁", wiki: "Lion",            letter: "Л", type: "животно" },
      { name: "Лимон",     emoji: "🍋", wiki: "Lemon",           letter: "Л", type: "плод"    },
      { name: "Лисица",    emoji: "🦊", wiki: "Red fox",         letter: "Л", type: "животно" },
      // М
      { name: "Маймуна",   emoji: "🐒", wiki: "Monkey",          letter: "М", type: "животно" },
      { name: "Манго",     emoji: "🥭", wiki: "Mango",           letter: "М", type: "плод"    },
      { name: "Мечка",     emoji: "🐻", wiki: "Brown bear",      letter: "М", type: "животно" },
      // Н
      { name: "Носорог",   emoji: "🦏", wiki: "Rhinoceros",      letter: "Н", type: "животно" },
      { name: "Нарвал",    emoji: "🐳", wiki: "Narwhal",         letter: "Н", type: "животно" },
      // О
      { name: "Орел",      emoji: "🦅", wiki: "Golden eagle",    letter: "О", type: "животно" },
      { name: "Орангутан", emoji: "🦧", wiki: "Orangutan",       letter: "О", type: "животно" },
      // П
      { name: "Папагал",   emoji: "🦜", wiki: "Parrot",          letter: "П", type: "животно" },
      { name: "Папая",     emoji: "🍈", wiki: "Papaya",          letter: "П", type: "плод"    },
      { name: "Пингвин",   emoji: "🐧", wiki: "Penguin",         letter: "П", type: "животно" },
      // Р
      { name: "Рак",       emoji: "🦀", wiki: "Crab",            letter: "Р", type: "животно" },
      { name: "Рис",       emoji: "🐱", wiki: "Lynx",            letter: "Р", type: "животно" },
      // С
      { name: "Слон",      emoji: "🐘", wiki: "Asian elephant",  letter: "С", type: "животно" },
      { name: "Сова",      emoji: "🦉", wiki: "Owl",             letter: "С", type: "животно" },
      { name: "Слива",     emoji: "🍑", wiki: "Plum",            letter: "С", type: "плод"    },
      // Т
      { name: "Тигър",     emoji: "🐯", wiki: "Tiger",           letter: "Т", type: "животно" },
      { name: "Тапир",     emoji: "🐗", wiki: "Tapir",           letter: "Т", type: "животно" },
      // У
      { name: "Удав",      emoji: "🐍", wiki: "Boa constrictor", letter: "У", type: "животно" },
      // Ф
      { name: "Фламинго",  emoji: "🦩", wiki: "Flamingo",        letter: "Ф", type: "животно" },
      { name: "Фурма",     emoji: "🌴", wiki: "Date palm",       letter: "Ф", type: "плод"    },
      // Х
      { name: "Хипопотам", emoji: "🦛", wiki: "Hippopotamus",    letter: "Х", type: "животно" },
      { name: "Хамелеон",  emoji: "🦎", wiki: "Chameleon",       letter: "Х", type: "животно" },
      // Ц
      { name: "Цикада",    emoji: "🦗", wiki: "Cicada",          letter: "Ц", type: "животно" },
      // Ч
      { name: "Чакал",     emoji: "🐺", wiki: "Jackal",          letter: "Ч", type: "животно" },
      { name: "Череша",    emoji: "🍒", wiki: "Cherry",          letter: "Ч", type: "плод"    },
      // Ш
      { name: "Шимпанзе",  emoji: "🐒", wiki: "Chimpanzee",      letter: "Ш", type: "животно" },
      { name: "Шипка",     emoji: "🌹", wiki: "Rose hip",        letter: "Ш", type: "плод"    },
      // Щ
      { name: "Щраус",     emoji: "🦤", wiki: "Ostrich",         letter: "Щ", type: "животно" },
      { name: "Щъркел",    emoji: "🐦", wiki: "White stork",     letter: "Щ", type: "животно" },
      // Ю
      { name: "Юзу",       emoji: "🍊", wiki: "Yuzu",            letter: "Ю", type: "плод"    },
      // Я
      { name: "Ягода",     emoji: "🍓", wiki: "Strawberry",      letter: "Я", type: "плод"    },
      { name: "Ягуар",     emoji: "🐆", wiki: "Jaguar",          letter: "Я", type: "животно" },
    ]
  }
};

let LANG = LANGS[localStorage.getItem('lang') || 'da'];
let LETTERS = [...new Set(LANG.items.map(i => i.letter))];

let score = 0;
let streak = 0;
let answered = false;
let usedLetters = new Set();
let currentLetter = '';
let currentCorrect = null;

// --- Stars background ---
const starsEl = document.getElementById('stars');
for (let i = 0; i < 60; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top  = Math.random() * 100 + 'vh';
  s.style.animationDelay = Math.random() * 3 + 's';
  s.style.animationDuration = (1.5 + Math.random() * 2) + 's';
  starsEl.appendChild(s);
}

// --- Speech ---
function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = LANG.tts;
  u.rate = 0.85;
  u.pitch = 1.1;
  window.speechSynthesis.speak(u);
}

function playLetter() {
  speak(currentLetter);
}

// --- Alphabet strip ---
function renderStrip() {
  const strip = document.getElementById('alphabetStrip');
  strip.innerHTML = '';
  LANG.alphabet.forEach(l => {
    if (!LETTERS.includes(l)) return;
    const chip = document.createElement('div');
    chip.className = 'alpha-chip' +
      (usedLetters.has(l) ? ' done' : '') +
      (l === currentLetter ? ' current' : '');
    chip.textContent = l;
    strip.appendChild(chip);
  });
}

// --- Pick next round ---
function pickLetter() {
  const available = LETTERS.filter(l => !usedLetters.has(l));
  if (available.length === 0) {
    usedLetters.clear();
    return pickLetter();
  }
  return available[Math.floor(Math.random() * available.length)];
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function newRound() {
  answered = false;
  document.getElementById('feedback').innerHTML = '';

  currentLetter = pickLetter();
  usedLetters.add(currentLetter);

  const correct = shuffle(LANG.items.filter(i => i.letter === currentLetter))[0];
  currentCorrect = correct;

  // Pick 2 distractors with different letters
  const distractorPool = shuffle(LANG.items.filter(i => i.letter !== currentLetter));
  const distractors = distractorPool.slice(0, 2);

  const choices = shuffle([correct, ...distractors]);

  document.getElementById('letterDisplay').textContent = currentLetter;
  document.getElementById('questionText').textContent =
    `${LANG.questionPrefix} "${currentLetter}"?`;

  renderChoices(choices);
  renderStrip();

  // Auto-announce the letter
  setTimeout(() => speak(currentLetter), 400);
}

// --- Wikipedia image loading ---
const imgCache = {};

async function fetchWikiImage(title) {
  if (imgCache[title] !== undefined) return imgCache[title];
  imgCache[title] = null; // mark as loading
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=300&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];
    imgCache[title] = page.thumbnail?.source || null;
  } catch { imgCache[title] = null; }
  return imgCache[title];
}

function renderChoices(choices) {
  const container = document.getElementById('choices');
  container.innerHTML = '';
  choices.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = 'choice-wrapper';

    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    const highlightedName = `<span class="first-letter">${item.name[0]}</span>${item.name.slice(1)}`;
    btn.innerHTML = `
      <div class="choice-media loading"></div>
      <span class="choice-name">${highlightedName}</span>
    `;
    btn.addEventListener('click', () => handleAnswer(wrapper, btn, item));

    const soundBtn = document.createElement('button');
    soundBtn.className = 'sound-btn';
    soundBtn.textContent = LANG.hearBtn;
    soundBtn.addEventListener('click', () => speak(item.name));

    wrapper.appendChild(btn);
    wrapper.appendChild(soundBtn);
    container.appendChild(wrapper);

    fetchWikiImage(item.wiki).then(src => {
      const media = btn.querySelector('.choice-media');
      if (!media) return;
      media.classList.remove('loading');
      if (src) {
        const img = document.createElement('img');
        img.className = 'choice-img';
        img.alt = item.name;
        img.onload = () => media.appendChild(img);
        img.onerror = () => { media.innerHTML = `<span class="choice-emoji">${item.emoji}</span>`; };
        img.src = src;
      } else {
        media.innerHTML = `<span class="choice-emoji">${item.emoji}</span>`;
      }
    });
  });
}

// --- Handle answer ---
function handleAnswer(wrapper, btn, item) {
  if (answered) return;
  answered = true;

  const isCorrect = item.letter === currentLetter;
  const allBtns = document.querySelectorAll('.choice-btn');
  allBtns.forEach(b => { b.disabled = true; });

  if (isCorrect) {
    wrapper.classList.add('correct');
    score += 1 + Math.min(streak, 4);
    streak++;
    document.getElementById('score').textContent = score;
    updateStreakDisplay();
    checkMilestone(score);
    speak(item.name);
    showFeedback(true, item.name);
    launchStars();
  } else {
    wrapper.classList.add('wrong');
    streak = 0;
    updateStreakDisplay();
    speak(item.name);
    showFeedback(false, item.name);
    // Reveal correct
    document.querySelectorAll('.choice-wrapper').forEach(w => {
      if (w.querySelector('.choice-name').textContent === currentCorrect.name) {
        w.classList.add('correct');
      }
    });
  }
}

function showFeedback(correct, name) {
  const msgs = correct ? LANG.correct : LANG.wrong;
  const msg = msgs[Math.floor(Math.random() * msgs.length)];
  const fb = document.getElementById('feedback');
  fb.innerHTML = `<span class="feedback-msg">${msg}</span><button class="next-btn" onclick="newRound()">${LANG.nextBtn}</button>`;
}

// --- Star burst ---
const STAR_COLORS = ['#ffd200','#ffec6e','#fff176','#ff9800','#ffffff','#ffe57f','#ffca28'];
function launchStars() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  for (let i = 0; i < 32; i++) {
    const p = document.createElement('div');
    p.className = 'star-burst-piece';
    const angle = (i / 32) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
    const dist = 120 + Math.random() * 180;
    p.style.setProperty('--tx', (Math.cos(angle) * dist) + 'px');
    p.style.setProperty('--ty', (Math.sin(angle) * dist) + 'px');
    p.style.setProperty('--rot', (Math.random() * 360) + 'deg');
    p.style.left = cx + 'px';
    p.style.top  = cy + 'px';
    p.style.color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
    p.textContent = '★';
    const dur = 0.8 + Math.random() * 0.6;
    p.style.animationDuration = dur + 's';
    p.style.animationDelay = (Math.random() * 0.15) + 's';
    container.appendChild(p);
    setTimeout(() => p.remove(), (dur + 0.3) * 1000);
  }
}

// --- Streak display ---
function updateStreakDisplay() {
  const filled = Math.min(streak, 5);
  document.getElementById('streakStars').textContent =
    '★'.repeat(filled) + '☆'.repeat(5 - filled);
}

// --- Milestone celebration ---
function checkMilestone(newScore) {
  if (newScore > 0 && newScore % 5 === 0) {
    const el = document.getElementById('milestone');
    el.innerHTML = `<div class="milestone-text">⭐ ${newScore} stjerner! ⭐</div>`;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 1900);
  }
}

// --- Themes ---
const THEMES = [
  { name: 'Lilla',    a: '#667eea', b: '#764ba2' },
  { name: 'Solnedgang', a: '#f7971e', b: '#e040a0' },
  { name: 'Hav',      a: '#2193b0', b: '#6dd5ed' },
  { name: 'Skov',     a: '#11998e', b: '#38ef7d' },
  { name: 'Jordbær',  a: '#f953c6', b: '#b91d73' },
];

function applyTheme(idx) {
  const t = THEMES[idx];
  document.body.style.background = `linear-gradient(135deg, ${t.a} 0%, ${t.b} 100%)`;
  document.querySelectorAll('.theme-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
  localStorage.setItem('theme', idx);
}

function buildThemePicker() {
  const picker = document.getElementById('themePicker');
  THEMES.forEach((t, i) => {
    const dot = document.createElement('button');
    dot.className = 'theme-dot';
    dot.title = t.name;
    dot.style.background = `linear-gradient(135deg, ${t.a}, ${t.b})`;
    dot.addEventListener('click', () => { applyTheme(i); picker.classList.remove('open'); });
    picker.appendChild(dot);
  });
  const saved = parseInt(localStorage.getItem('theme') || '0', 10);
  applyTheme(saved);
}

buildThemePicker();

// Theme popup toggle
const themeToggle = document.getElementById('themeToggle');
const themePopup  = document.getElementById('themePicker');
themeToggle.addEventListener('click', () => {
  const isOpen = themePopup.classList.contains('open');
  themePopup.classList.toggle('open');
  if (!isOpen) {
    const rect = themeToggle.getBoundingClientRect();
    themePopup.style.top   = (rect.bottom + 8) + 'px';
    themePopup.style.right = (window.innerWidth - rect.right) + 'px';
  }
});
document.addEventListener('click', e => {
  if (!themeToggle.contains(e.target) && !themePopup.contains(e.target))
    themePopup.classList.remove('open');
});

// --- Language switcher ---
function setLanguage(code) {
  LANG = LANGS[code];
  LETTERS = [...new Set(LANG.items.map(i => i.letter))];
  localStorage.setItem('lang', code);
  document.documentElement.lang = code;
  document.getElementById('appTitle').textContent = LANG.title;
  document.getElementById('pointsLabel').textContent = LANG.pointsLabel;
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === code));
  usedLetters = new Set();
  score = 0; streak = 0;
  document.getElementById('score').textContent = 0;
  newRound();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Apply saved language on load (sync UI without resetting score)
const savedLang = localStorage.getItem('lang') || 'da';
document.documentElement.lang = savedLang;
document.getElementById('appTitle').textContent = LANG.title;
document.getElementById('pointsLabel').textContent = LANG.pointsLabel;
document.querySelectorAll('.lang-btn').forEach(b =>
  b.classList.toggle('active', b.dataset.lang === savedLang));

// Register service worker for network-first cache busting
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

// Letter display click
document.getElementById('letterDisplay').addEventListener('click', playLetter);

// Start!
newRound();
