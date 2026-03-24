const RHYME_LANGS = {
  da: {
    code: 'da',
    tts: 'da-DK',
    title: '🎵 Alexandras Rim 🎵',
    questionPrefix: 'Hvad rimer med',
    hearBtn: '🔊 Hør',
    nextBtn: 'Næste ➡️',
    pointsLabel: 'point',
    correct: [
      "🎉 Fantastisk! Det rimer!",
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
    groups: [
      { id: 'at', label: '-at', words: [
        { word: 'kat',  emoji: '🐱', wiki: 'Cat' },
        { word: 'hat',  emoji: '🎩', wiki: 'Hat' },
        { word: 'nat',  emoji: '🌙', wiki: 'Night' },
      ]},
      { id: 'us', label: '-us', words: [
        { word: 'hus',  emoji: '🏠', wiki: 'House' },
        { word: 'mus',  emoji: '🐭', wiki: 'House mouse' },
        { word: 'bus',  emoji: '🚌', wiki: 'Bus' },
      ]},
      { id: 'il', label: '-il', words: [
        { word: 'bil',  emoji: '🚗', wiki: 'Automobile' },
        { word: 'pil',  emoji: '🏹', wiki: 'Arrow' },
        { word: 'spil', emoji: '🎮', wiki: 'Game' },
      ]},
      { id: 'and', label: '-and', words: [
        { word: 'and',  emoji: '🦆', wiki: 'Duck' },
        { word: 'sand', emoji: '🏖️', wiki: 'Sand' },
        { word: 'land', emoji: '🌍', wiki: 'Land' },
      ]},
      { id: 'ol', label: '-ol', words: [
        { word: 'sol',  emoji: '☀️', wiki: 'Sun' },
        { word: 'stol', emoji: '🪑', wiki: 'Chair' },
      ]},
      { id: 'ag', label: '-ag', words: [
        { word: 'dag',  emoji: '📅', wiki: 'Day' },
        { word: 'flag', emoji: '🚩', wiki: 'Flag' },
      ]},
      { id: 'o', label: '-o', words: [
        { word: 'ko',   emoji: '🐄', wiki: 'Cattle' },
        { word: 'so',   emoji: '🐷', wiki: 'Pig' },
      ]},
      { id: 'en', label: '-en', words: [
        { word: 'sten', emoji: '🪨', wiki: 'Rock (geology)' },
        { word: 'gren', emoji: '🌿', wiki: 'Branch' },
        { word: 'ren',  emoji: '🦌', wiki: 'Reindeer' },
      ]},
      { id: 'ej', label: '-ej', words: [
        { word: 'vej',  emoji: '🛣️', wiki: 'Road' },
        { word: 'hej',  emoji: '👋', wiki: 'Greeting' },
      ]},
      { id: 'is', label: '-is', words: [
        { word: 'gris', emoji: '🐷', wiki: 'Pig' },
        { word: 'ris',  emoji: '🍚', wiki: 'Rice' },
        { word: 'is',   emoji: '🍦', wiki: 'Ice cream' },
      ]},
      { id: 'orm', label: '-orm', words: [
        { word: 'orm',   emoji: '🪱', wiki: 'Earthworm' },
        { word: 'storm', emoji: '⛈️', wiki: 'Storm' },
      ]},
      { id: 'e', label: '-e', words: [
        { word: 'sne',  emoji: '❄️', wiki: 'Snow' },
        { word: 'ske',  emoji: '🥄', wiki: 'Spoon' },
      ]},
    ],
  },

  bg: {
    code: 'bg',
    tts: 'bg-BG',
    title: '🎵 Римите на Александра 🎵',
    questionPrefix: 'Кое се римува с',
    hearBtn: '🔊 Чуй',
    nextBtn: 'Напред ➡️',
    pointsLabel: 'точки',
    correct: [
      "🎉 Браво! Те се римуват!",
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
    groups: [
      { id: 'ак', label: '-ак', words: [
        { word: 'мак',  emoji: '🌺', wiki: 'Poppy' },
        { word: 'рак',  emoji: '🦀', wiki: 'Crab' },
      ]},
      { id: 'ед', label: '-ед', words: [
        { word: 'мед',  emoji: '🍯', wiki: 'Honey' },
        { word: 'лед',  emoji: '❄️', wiki: 'Ice' },
      ]},
      { id: 'он', label: '-он', words: [
        { word: 'кон',   emoji: '🐴', wiki: 'Horse' },
        { word: 'слон',  emoji: '🐘', wiki: 'Asian elephant' },
        { word: 'лимон', emoji: '🍋', wiki: 'Lemon' },
      ]},
      { id: 'отка', label: '-отка', words: [
        { word: 'котка', emoji: '🐱', wiki: 'Cat' },
        { word: 'лодка', emoji: '⛵', wiki: 'Boat' },
      ]},
      { id: 'ишка', label: '-ишка', words: [
        { word: 'мишка',  emoji: '🐭', wiki: 'House mouse' },
        { word: 'книжка', emoji: '📚', wiki: 'Book' },
      ]},
      { id: 'ук', label: '-ук', words: [
        { word: 'лук',  emoji: '🧅', wiki: 'Onion' },
        { word: 'жук',  emoji: '🐛', wiki: 'Beetle' },
      ]},
      { id: 'ла', label: '-ла', words: [
        { word: 'игла',  emoji: '🪡', wiki: 'Sewing needle' },
        { word: 'скала', emoji: '🪨', wiki: 'Rock (geology)' },
        { word: 'пчела', emoji: '🐝', wiki: 'Honey bee' },
      ]},
      { id: 'оза', label: '-оза', words: [
        { word: 'роза', emoji: '🌹', wiki: 'Rose' },
        { word: 'коза', emoji: '🐐', wiki: 'Goat' },
      ]},
      { id: 'аба', label: '-аба', words: [
        { word: 'жаба', emoji: '🐸', wiki: 'Frog' },
        { word: 'баба', emoji: '👵', wiki: 'Old age' },
      ]},
      { id: 'га', label: '-га', words: [
        { word: 'дъга',  emoji: '🌈', wiki: 'Rainbow' },
        { word: 'книга', emoji: '📖', wiki: 'Book' },
      ]},
      { id: 'ок', label: '-ок', words: [
        { word: 'сок',  emoji: '🥤', wiki: 'Juice' },
        { word: 'ток',  emoji: '⚡', wiki: 'Electric current' },
      ]},
      { id: 'са', label: '-са', words: [
        { word: 'роса', emoji: '💧', wiki: 'Dew' },
        { word: 'лиса', emoji: '🦊', wiki: 'Red fox' },
      ]},
    ],
  },
};

// ── State ────────────────────────────────────────────────────────────────────

let LANG = RHYME_LANGS[localStorage.getItem('lang') || 'da'];
let score  = 0;
let streak = 0;
let answered = false;
let usedGroups = new Set();
let currentGroupIdx = -1;
let currentCorrect = null;

// ── Stars background ─────────────────────────────────────────────────────────

const starsEl = document.getElementById('stars');
for (let i = 0; i < 60; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top  = Math.random() * 100 + 'vh';
  s.style.animationDelay    = Math.random() * 3 + 's';
  s.style.animationDuration = (1.5 + Math.random() * 2) + 's';
  starsEl.appendChild(s);
}

// ── Speech ────────────────────────────────────────────────────────────────────

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang  = LANG.tts;
  u.rate  = 0.85;
  u.pitch = 1.1;
  window.speechSynthesis.speak(u);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Rhyme strip ───────────────────────────────────────────────────────────────

function renderStrip() {
  const strip = document.getElementById('rhymeStrip');
  strip.innerHTML = '';
  LANG.groups.forEach((g, i) => {
    const chip = document.createElement('div');
    chip.className = 'rhyme-chip' +
      (usedGroups.has(i)    ? ' done'    : '') +
      (i === currentGroupIdx ? ' current' : '');
    chip.textContent = g.label;
    strip.appendChild(chip);
  });
}

// ── Round logic ───────────────────────────────────────────────────────────────

function newRound() {
  answered = false;
  document.getElementById('feedback').innerHTML = '';

  // Pick an unused group
  const available = LANG.groups
    .map((_, i) => i)
    .filter(i => !usedGroups.has(i));

  if (available.length === 0) {
    usedGroups.clear();
    newRound();
    return;
  }

  currentGroupIdx = available[Math.floor(Math.random() * available.length)];
  usedGroups.add(currentGroupIdx);

  const group = LANG.groups[currentGroupIdx];
  const [questionWord, correctWord] = shuffle(group.words);
  currentCorrect = correctWord;

  // 2 distractors – one word from each of 2 other randomly chosen groups
  const otherIdxs = shuffle(
    LANG.groups.map((_, i) => i).filter(i => i !== currentGroupIdx)
  );
  const distractors = otherIdxs.slice(0, 2).map(i =>
    shuffle(LANG.groups[i].words)[0]
  );

  const choices = shuffle([correctWord, ...distractors]);

  // Update question display
  document.getElementById('questionEmoji').textContent = questionWord.emoji;
  document.getElementById('questionWord').textContent  = questionWord.word;
  document.getElementById('questionText').textContent  =
    `${LANG.questionPrefix} "${questionWord.word}"?`;

  document.getElementById('hintBtn').onclick = () => speak(questionWord.word);

  renderChoices(choices);
  renderStrip();

  setTimeout(() => speak(questionWord.word), 400);
}

// ── Wikipedia image loading ───────────────────────────────────────────────────

const imgCache = {};

async function fetchWikiImage(title) {
  if (imgCache[title] !== undefined) return imgCache[title];
  imgCache[title] = null;
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=300&origin=*`;
    const res  = await fetch(url);
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];
    imgCache[title] = page.thumbnail?.source || null;
  } catch { imgCache[title] = null; }
  return imgCache[title];
}

// ── Render choices ────────────────────────────────────────────────────────────

function renderChoices(choices) {
  const container = document.getElementById('choices');
  container.innerHTML = '';

  choices.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = 'choice-wrapper';

    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `
      <div class="choice-media loading"></div>
      <span class="choice-name">${item.word}</span>
    `;
    btn.addEventListener('click', () => handleAnswer(wrapper, item));

    const soundBtn = document.createElement('button');
    soundBtn.className = 'sound-btn';
    soundBtn.textContent = LANG.hearBtn;
    soundBtn.addEventListener('click', () => speak(item.word));

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
        img.alt = item.word;
        img.onload  = () => media.appendChild(img);
        img.onerror = () => { media.innerHTML = `<span class="choice-emoji">${item.emoji}</span>`; };
        img.src = src;
      } else {
        media.innerHTML = `<span class="choice-emoji">${item.emoji}</span>`;
      }
    });
  });
}

// ── Handle answer ─────────────────────────────────────────────────────────────

function handleAnswer(wrapper, item) {
  if (answered) return;
  answered = true;

  const isCorrect = item.word === currentCorrect.word;
  document.querySelectorAll('.choice-btn').forEach(b => { b.disabled = true; });

  if (isCorrect) {
    wrapper.classList.add('correct');
    score += 1 + Math.min(streak, 4);
    streak++;
    document.getElementById('score').textContent = score;
    updateStreakDisplay();
    checkMilestone(score);
    speak(item.word);
    showFeedback(true);
    launchStars();
  } else {
    wrapper.classList.add('wrong');
    streak = 0;
    updateStreakDisplay();
    speak(item.word);
    showFeedback(false);
    // Reveal correct answer
    document.querySelectorAll('.choice-wrapper').forEach(w => {
      const nameEl = w.querySelector('.choice-name');
      if (nameEl && nameEl.textContent === currentCorrect.word) {
        w.classList.add('correct');
      }
    });
  }
}

function showFeedback(correct) {
  const msgs = correct ? LANG.correct : LANG.wrong;
  const msg  = msgs[Math.floor(Math.random() * msgs.length)];
  document.getElementById('feedback').innerHTML =
    `<span class="feedback-msg">${msg}</span><button class="next-btn" onclick="newRound()">${LANG.nextBtn}</button>`;
}

// ── Streak ────────────────────────────────────────────────────────────────────

function updateStreakDisplay() {
  const filled = Math.min(streak, 5);
  document.getElementById('streakStars').textContent =
    '★'.repeat(filled) + '☆'.repeat(5 - filled);
}

// ── Milestone ─────────────────────────────────────────────────────────────────

function checkMilestone(newScore) {
  if (newScore > 0 && newScore % 5 === 0) {
    const el = document.getElementById('milestone');
    el.innerHTML = `<div class="milestone-text">⭐ ${newScore} ${LANG.pointsLabel}! ⭐</div>`;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 1900);
  }
}

// ── Star burst ────────────────────────────────────────────────────────────────

const STAR_COLORS = ['#ffd200','#ffec6e','#fff176','#ff9800','#ffffff','#ffe57f','#ffca28'];

function launchStars() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  for (let i = 0; i < 32; i++) {
    const p = document.createElement('div');
    p.className = 'star-burst-piece';
    const angle = (i / 32) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
    const dist  = 120 + Math.random() * 180;
    p.style.setProperty('--tx',  (Math.cos(angle) * dist) + 'px');
    p.style.setProperty('--ty',  (Math.sin(angle) * dist) + 'px');
    p.style.setProperty('--rot', (Math.random() * 360) + 'deg');
    p.style.left  = cx + 'px';
    p.style.top   = cy + 'px';
    p.style.color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
    p.textContent = '★';
    const dur = 0.8 + Math.random() * 0.6;
    p.style.animationDuration = dur + 's';
    p.style.animationDelay    = (Math.random() * 0.15) + 's';
    container.appendChild(p);
    setTimeout(() => p.remove(), (dur + 0.3) * 1000);
  }
}

// ── Themes ────────────────────────────────────────────────────────────────────

const THEMES = [
  { name: 'Lilla',      a: '#667eea', b: '#764ba2' },
  { name: 'Solnedgang', a: '#f7971e', b: '#e040a0' },
  { name: 'Hav',        a: '#2193b0', b: '#6dd5ed' },
  { name: 'Skov',       a: '#11998e', b: '#38ef7d' },
  { name: 'Jordbær',    a: '#f953c6', b: '#b91d73' },
];

function applyTheme(idx) {
  const t = THEMES[idx];
  document.body.style.background = `linear-gradient(135deg, ${t.a} 0%, ${t.b} 100%)`;
  document.querySelectorAll('.theme-dot').forEach((d, i) =>
    d.classList.toggle('active', i === idx));
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
  applyTheme(parseInt(localStorage.getItem('theme') || '0', 10));
}

buildThemePicker();

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

// ── Language switcher ─────────────────────────────────────────────────────────

function setLanguage(code) {
  LANG = RHYME_LANGS[code];
  localStorage.setItem('lang', code);
  document.documentElement.lang = code;
  document.getElementById('appTitle').textContent    = LANG.title;
  document.getElementById('pointsLabel').textContent = LANG.pointsLabel;
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === code));
  usedGroups.clear();
  score = 0; streak = 0;
  document.getElementById('score').textContent = 0;
  updateStreakDisplay();
  newRound();
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));

// Apply saved language on load
const savedLang = localStorage.getItem('lang') || 'da';
LANG = RHYME_LANGS[savedLang];
document.documentElement.lang = savedLang;
document.getElementById('appTitle').textContent    = LANG.title;
document.getElementById('pointsLabel').textContent = LANG.pointsLabel;
document.querySelectorAll('.lang-btn').forEach(b =>
  b.classList.toggle('active', b.dataset.lang === savedLang));

// ── Start ─────────────────────────────────────────────────────────────────────

newRound();
