// ============================================================
// Advent Calendar — GTA VI
// Du 26 octobre au 19 novembre 2026 (jour de la sortie !)
// ============================================================

// ---- Configuration ----
const START_DATE = new Date(2026, 9, 26); // 26 octobre 2026 (mois 9 = octobre)
const GTA_VI_RELEASE = new Date(2026, 10, 19); // 19 novembre 2026
const TOTAL_DAYS = Math.round((GTA_VI_RELEASE - START_DATE) / 86400000) + 1; // 25 portes, la dernière le jour J

// Set to true to open all doors regardless of the date (dev mode)
const DEV_MODE = false;

// Surprises derrière les portes (à personnaliser ensuite)
const SURPRISES = {
  1: "C'est parti ! Le compte à rebours vers Vice City commence officiellement. 🌴",
  2: "Photo du jour : coucher de soleil sur Ocean Drive. 🌅",
  3: "Astuce du jour : à Vice City, la ceinture, c'est optionnel... mais pas pour toi. ⛓️",
  4: "Un néon de plus sur ta bécane. Fonce. 🏍️",
  5: "Conseil lucratif : évite la banque centrale, choisis les petites affaires. 💰",
  6: "Radio exclusive débloquée : Vice City FM t'accompagne jusqu'à la sortie. 🎸",
  7: "Nouveau filtre Insta : 'Vice Sunset'. L'aube te va si bien. 📸",
  8: "Tu as gagné un tour gratuit... en bateau, sans le bateau. 🚤",
  9: "Bonus : +1 étoile de recherche si tu chantes trop fort. ⭐",
  10: "Cadeau du jour : une glace au pamplemousse, comme dans la vraie Vice. 🍦",
  11: "Le gator du marais te souhaite un bon voyage jusqu'à Leonida. 🐊",
  12: "Mi-parcours ! Le demi-tour est un art. 🔙",
  13: "Astuce : si ça brille, prends-le. Ça marche aussi pour ce calendrier. ✨",
  14: "Du bruit, du néon, du Vice : la playlist du jour est prête. 🎶",
  15: "Le grand saut du jour : parachutes recommandés. 🪂",
  16: "Citation du jour : 'Bienvenue à Vice City, où tout a un prix.' 🏖️",
  17: "Ton arme préférée est... la patience. Encore un peu. 🎯",
  18: "Lucia te passe le bonjour depuis Leonida. 🌹",
  19: "Jason a garé la voiture, on y est presque. 🔑",
  20: "Le vrai trésor, c'est les potes qu'on a croisés en route. 🤝",
  21: "Cadeau : un supercar rose t'attend devant la porte 24. Ne le fais pas attendre. 🚗",
  22: "Décision difficile : briller ou survivre. Pourquoi pas les deux ? 💎",
  23: "Dernier droit : plein phares sur la sortie. Regarde la route, pas le rétro. 🏁",
  24: "Veille de sortie : prépare le canapé, les snacks et le congé. 📅",
  25: "SORTIE DE GTA VI !! Vice City t'attend depuis 25 jours... et depuis des années. Amuse-toi bien ! 🎉🌴",
};

// Défis du jour (à réaliser sur le Discord : photo, vocal, vidéo courte, mème...)
const CHALLENGES = {
  1: "Défi photo : montre ton setup de gaming. Lampe néon ou lumière rouge = bonus style. 📸",
  2: "Défi photo : poste le plus beau coucher de soleil que tu ais (ou trouves). 🌅",
  3: "Défi vocal : imite une sirène de police. Le plus convaincant gagne le respect du serveur. 🚔",
  4: "Défi photo : ton moyen de transport du jour (vélo, trottinette, moto, pieds... tout passe). 🛵",
  5: "Défi vidéo (10 sec max) : ton braquage le plus rapide de la journée. Un snack, un cookies, une télécommande... 🍪",
  6: "Défi musique : poste LA chanson qui te met le plus dans l'ambiance Vice City. 🎵",
  7: "Défi photo : recrée le filtre 'Vice Sunset'. Le kitsch est encouragé, le juste-milieu interdit. 🌴",
  8: "Défi vocal : imite le bruit d'un bateau à moteur. Sans contexte, c'est encore mieux. 🚤",
  9: "Défi vocal : chante le générique d'une série (au choix) en 15 secondes chrono. ⏱️",
  10: "Défi photo : ton snack le plus fluo / le plus orange de ta cuisine. 🧡",
  11: "Défi mème : ton image ou GIF d'animal le plus 'Florida Man' possible. 🐊",
  12: "Mi-parcours réussi ! Défi photo : ta manette après 12 jours d'attente (état émotionnel inclus). 🎮",
  13: "Défi photo : l'objet le plus brillant de ta maison. S'il est inutile ET brillant, c'est un sans-faute. ✨",
  14: "Défi musique : la chanson qui resterait dans ta radio personnelle sur GTA VI. Une seule. Choisir, c'est souffrir. 🎶",
  15: "Défi vidéo (10 sec max) : fais un saut (sécurisé, on est à 10 max ici) et crie 'VICE CITY !' en l'air. 🪂",
  16: "Défi écrit : invente une citation à la GTA sur ta propre vie ('Ils m'ont pris mon dernier cookie...'). 💬",
  17: "Défi photo : ta pile de jeux en attente. Toutes celles jamais terminées comptent double. 📚",
  18: "Défi photo : ta pose GTA la plus classe. Inclinaison de tête + lunettes de soleil obligatoires. 😎",
  19: "Défi photo : tes clés (maison, voiture...) prises avec le maximum de style. Cadrage cinéma bonus. 🗝️",
  20: "Défi vocal : envoie un mot gentil à quelqu'un du serveur. Oui, c'est un test d'amitié. 💌",
  21: "Défi photo : le véhicule le plus moche ou le plus rose que tu croises dans ta journée. 🚗",
  22: "Défi photo : ton accessoire le plus brillant, porté avec fierté. Briller ou survivre, pas les deux. 💎",
  23: "Défi vocal : ton meilleur bruit de moteur. Voiture, moto, aspirateur... l'imagination est la clé. 🏁",
  24: "Défi photo : tes snacks et ta zone de lancement prêts pour le jour J. Aménagement exigé. 🍿",
  25: "Dernier défi : photo ou vidéo de ton lancement du jeu — ou ta tête à l'heure H. Salut Vice City ! 🎉",
};

// ============================================================
// Sons (Web Audio API, synthétisés : aucun fichier requis)
// ============================================================

// ---- Éléments DOM ----
const calendarEl = document.getElementById("calendar");
const modalEl = document.getElementById("modal");
const modalDayEl = document.getElementById("modal-day");
const modalMessageEl = document.getElementById("modal-message");
const modalChallengeBlockEl = document.getElementById("modal-challenge-block");
const modalChallengeEl = document.getElementById("modal-challenge");
const modalCloseEl = document.getElementById("modal-close");
const modalBackdropEl = document.getElementById("modal-backdrop");
const soundToggleEl = document.getElementById("sound-toggle");

const WANTED_STAR_COUNT = 5;
const STAR_STAGGER_DELAY = 0.12; // secondes entre chaque étoile (et chaque ding)

const SOUND_KEY = "gta6-advent-sound";
let soundEnabled = true;
try {
  soundEnabled = localStorage.getItem(SOUND_KEY) !== "off";
} catch {
  // pas de stockage : le son reste activé par défaut
}

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null; // navigateur sans Web Audio : on joue sans son
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

// Petit "whoosh" doux au moment du pop
function playWhooshSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const t = ctx.currentTime;
  const duration = 0.25;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }

  const src = ctx.createBufferSource();
  src.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 1.2;
  filter.frequency.setValueAtTime(400, t);
  filter.frequency.exponentialRampToValueAtTime(1800, t + duration);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.15, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  src.start(t);
}

// "Ding" métallique façon étoile de recherche, un par étoile
function playStarDing(delay) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const t = ctx.currentTime + delay;

  const osc = ctx.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(880, t);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.1, t + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.4);
}

// "Bzzz" grave : case verrouillée
function playLockedSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = "square";
  osc.frequency.setValueAtTime(110, t);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.06, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.2);
}

// ---- Son d'ouverture en fichier mp3 (avec repli sur les sons synthétisés) ----
// Dépose ton fichier dans sounds/gta_iconic_sound.mp3 pour l'entendre.
const OPEN_SOUND_FILE = "sounds/gta_iconic_sound.mp3";
const openSoundFileEl = new Audio(OPEN_SOUND_FILE);
openSoundFileEl.volume = 0.45;

let openFileSoundAvailable = true;
openSoundFileEl.addEventListener("error", () => {
  // fichier absent ou illisible : on retombera sur le whoosh synthétisé
  openFileSoundAvailable = false;
});

function playSynthOpenSound() {
  playWhooshSound();
  for (let i = 0; i < WANTED_STAR_COUNT; i++) {
    playStarDing(i * STAR_STAGGER_DELAY);
  }
}

function playOpenSound() {
  if (!soundEnabled) return;
  try {
    let filePlayed = false;

    if (openFileSoundAvailable) {
      openSoundFileEl.currentTime = 0; // rejoue depuis le début à chaque ouverture
      const playPromise = openSoundFileEl.play();
      if (playPromise) {
        playPromise
          .then(() => {
            filePlayed = true;
            // les dings restent joués en synchro avec les étoiles
            for (let i = 0; i < WANTED_STAR_COUNT; i++) {
              playStarDing(i * STAR_STAGGER_DELAY);
            }
          })
          .catch(() => {
            openFileSoundAvailable = false;
            playSynthOpenSound();
          });
        return;
      }
    }

    if (!filePlayed) playSynthOpenSound();
  } catch {
    playSynthOpenSound();
  }
}

// Bouton mute
function updateSoundToggleIcon() {
  soundToggleEl.textContent = soundEnabled ? "🔊" : "🔇";
  soundToggleEl.title = soundEnabled ? "Couper le son" : "Activer le son";
}

soundToggleEl.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  try {
    localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off");
  } catch {
    // pas de stockage : le choix vaut pour la session en cours
  }
  updateSoundToggleIcon();
});

// ============================================================
// Fin des sons
// ============================================================

// ---- Sauvegarde des portes ouvertes ----
const STORAGE_KEY = "gta6-advent-opened";

function getOpenedDays() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveOpenedDays(days) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(days));
  } catch {
    // pas de stockage disponible : tant pis pour la persistance
  }
}

// ---- Logique de dates ----
// La porte N correspond à START_DATE + (N - 1) jours
function dateForDay(day) {
  const date = new Date(START_DATE);
  date.setDate(date.getDate() + (day - 1));
  date.setHours(0, 0, 0, 0);
  return date;
}

function isDayUnlocked(day) {
  if (DEV_MODE) return true;
  return new Date() >= dateForDay(day);
}

const MONTHS_FR = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

function formatDayDate(day) {
  const date = dateForDay(day);
  return `${date.getDate()} ${MONTHS_FR[date.getMonth()]}`;
}

// ---- Construction des portes ----
function buildCalendar() {
  const openedDays = getOpenedDays();

  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const date = dateForDay(day);

    const door = document.createElement("button");
    door.className = "door";
    door.dataset.day = String(day);
    door.setAttribute("aria-label", `Porte du ${formatDayDate(day)}`);

    const number = document.createElement("span");
    number.className = "door-number";
    number.textContent = String(date.getDate());
    door.appendChild(number);

    const monthLabel = document.createElement("span");
    monthLabel.className = "door-month";
    monthLabel.textContent = MONTHS_FR[date.getMonth()].slice(0, 3) + ".";
    door.appendChild(monthLabel);

    const unlocked = isDayUnlocked(day);
    const isOpened = openedDays.includes(day);

    if (!unlocked) door.classList.add("locked");
    if (isOpened) door.classList.add("opened");

    door.addEventListener("click", () => openDoor(day, door));
    calendarEl.appendChild(door);
  }
}

// ---- Ouverture d'une porte ----
function openDoor(day, doorEl) {
  if (!isDayUnlocked(day)) {
    if (soundEnabled) {
      try {
        playLockedSound();
      } catch {
        // pas grave, on continue sans son
      }
    }
    showModal(day, "Patience... Vice City n'ouvre pas avant l'heure. 🔒");
    return;
  }

  const openedDays = getOpenedDays();
  if (!openedDays.includes(day)) {
    openedDays.push(day);
    saveOpenedDays(openedDays);
  }
  doorEl.classList.add("opened");

  // Petit "pop" façon mission validée (l'animation est retirée à la fin
  // pour pouvoir la rejouer si on re-clique la case)
  doorEl.classList.remove("pop");
  void doorEl.offsetWidth; // force le reflow pour relancer l'animation
  doorEl.classList.add("pop");
  doorEl.addEventListener(
    "animationend",
    () => doorEl.classList.remove("pop"),
    {
      once: true,
    },
  );

  spawnWantedStars(doorEl);
  playOpenSound();

  const message = SURPRISES[day] ?? "Surprise mystère ! 🎁";
  const challenge = CHALLENGES[day] ?? null;
  showModal(day, message, challenge);
}

// Étoiles de recherche : 5 étoiles qui apparaissent l'une après l'autre
// puis disparaissent, comme un niveau de recherche qui monte dans GTA
function spawnWantedStars(doorEl) {
  const STAR_COUNT = WANTED_STAR_COUNT;
  const STAR_DELAY = STAR_STAGGER_DELAY;
  const ANIM_DURATION = 1.4; // durée de l'animation d'une étoile

  // on retire un éventuel reste d'une ouverture précédente
  doorEl.querySelector(".door-stars")?.remove();

  const starsEl = document.createElement("div");
  starsEl.className = "door-stars";

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.textContent = "★";
    star.style.animationDelay = `${i * STAR_DELAY}s`;
    starsEl.appendChild(star);
  }

  doorEl.appendChild(starsEl);

  // nettoyage une fois toutes les étoiles disparues
  const totalMs = (STAR_COUNT * STAR_DELAY + ANIM_DURATION) * 1000;
  setTimeout(() => starsEl.remove(), totalMs);
}

// ---- Modale ----
function showModal(day, message, challenge = null) {
  modalDayEl.textContent = `${formatDayDate(day)} — Jour ${day}`;
  modalMessageEl.textContent = message;

  if (challenge) {
    modalChallengeEl.textContent = challenge;
    modalChallengeBlockEl.classList.remove("hidden");
  } else {
    modalChallengeBlockEl.classList.add("hidden");
  }

  modalEl.classList.remove("hidden");
  modalEl.setAttribute("aria-hidden", "false");
}

function hideModal() {
  modalEl.classList.add("hidden");
  modalEl.setAttribute("aria-hidden", "true");
}

modalCloseEl.addEventListener("click", hideModal);
modalBackdropEl.addEventListener("click", hideModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideModal();
});

// ---- Compteur jusqu'à la sortie de GTA VI ----
function updateCountdown() {
  const now = new Date();
  const diff = GTA_VI_RELEASE - now;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("cd-days").textContent = days;
  document.getElementById("cd-hours").textContent = hours;
  document.getElementById("cd-minutes").textContent = minutes;
  document.getElementById("cd-seconds").textContent = seconds;
}

// ---- Démarrage ----
buildCalendar();
updateCountdown();
updateSoundToggleIcon();
setInterval(updateCountdown, 1000);
