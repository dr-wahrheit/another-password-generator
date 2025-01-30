// load styles
import '../styles/style.scss';

// load sitemap & robots
const sitemap = require('../../sitemap.xml');
const robots = require('../../robots.txt');

// load images
import faviconIco from '../images/favicon.ico';
import faviconImage from '../images/favicon.png';
import shareImage from '../images/share.png';

class Password {
  #excludeDuplicates;
  #chars;
  #length = 0;
  constructor(excludeDuplicates) {
    this.#excludeDuplicates = excludeDuplicates;
    this.#chars = this.#excludeDuplicates ? new Set() : [];
  }

  addChar(char) {
    if (this.#excludeDuplicates) {
      this.#chars.add(char);
      this.#length = this.#chars.size;
    } else {
      this.#chars.push(char);
      this.#length++;
    }
  }

  get length() {
    return this.#length;
  }

  toString() {
    if (this.#excludeDuplicates) {
      return Array.from(this.#chars).join('');
    } else {
      return this.#chars.join('');
    }
  }

  clear() {
    if (this.#excludeDuplicates) {
      this.#chars.clear();
    } else {
      // this.#chars.fill(0);
      this.#chars.length = 0;
    }
    this.#length = 0;
  }
}

const NUMBERS = new Uint8Array([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
const LOWERCASE = new Uint8Array([
  97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
  121, 122,
]);
const UPPERCASE = new Uint8Array([
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
]);
const SPECIAL_CHARACTERS = new Uint8Array([33, 35, 36, 37, 38, 40, 41, 42, 43, 64, 94]);
const SIMILAR_CHARS = {
  0: [48, 79, 111, 73, 105], // 0, O, l, I
  1: [49, 76, 108], // 1, l, I
  5: [53, 83, 115, 56, 88], // 5, S, s, 8, B
  6: [54, 66, 98], // 6, b, B
  8: [56, 66, 98], // 8, B, b
  9: [57, 71, 103, 54, 66], // 9, g, G, 6, b
  a: [97, 64, 65], // a, @, A
  e: [101, 67, 99], // e, c, C
  g: [103, 81, 113, 57], // g, q, Q, 9
  l: [108, 49, 73, 105], // l, 1, I, i
  o: [111, 48, 79, 97, 65], // o, 0, O, a, A
  s: [115, 53, 83], // s, 5, S
  t: [116, 55, 84], // t, 7, T
  z: [122, 50], // z, 2
};

let availableChars = [];

const pwdGeneratedEl = document.getElementById('pwd-generated');
const notificationEl = document.getElementById('notification');
const actionRedoEl = document.getElementById('action-redo');
const notificationDeleteBtnEl = document.querySelector('.notification button.delete');
const settingsPasswordLengthRangeEl = document.getElementById('settings-password-length-range');
const settingsPasswordLengthEl = document.getElementById('settings-password-length');
const pwdGeneratedStrengthEl = document.getElementById('pwd-strength');
const pwdGeneratedStrengthTagEl = document.getElementById('pwd-strength-tag');
const settingsAllowNumbersEl = document.getElementById('settings-allow-numbers');
const settingsAllowUppercaseEl = document.getElementById('settings-allow-uppercase');
const settingsAllowLowercaseEl = document.getElementById('settings-allow-lowercase');
const settingsAllowSymbolsEl = document.getElementById('settings-allow-symbols');
const settingsExcludeDuplicateEl = document.getElementById('settings-exclude-duplicate-characters');
const settingsExcludeSimilarEl = document.getElementById('settings-exclude-similar-characters');

function isSimilarCharExcluded(char) {
  const similarGroup = SIMILAR_CHARS[char];
  return !!similarGroup && settingsExcludeSimilarEl.checked && availableChars.some((el) => similarGroup.includes(el));
}

function getPasswordLength(settingsPasswordLength) {
  const length = settingsPasswordLength.value;
  try {
    return parseInt(length || settingsPasswordLength.getAttribute('placeholder'));
  } catch (e) {
    console.log('error', e);
  }
  return 0;
}

function validateAvailableCharsLength() {
  if (availableChars.length === 0) {
    actionRedoEl.classList.add('is-invisible');
    return;
  }
  actionRedoEl.classList.remove('is-invisible');
}

// Update availableChars based on settings during initialization
// function updateAvailableChars() {
//   console.time('updateAvailableChars');
//   availableChars = [
//     ...(settingsAllowNumbersEl.checked ? NUMBERS : []),
//     ...(settingsAllowUppercaseEl.checked ? UPPERCASE : []),
//     ...(settingsAllowLowercaseEl.checked ? LOWERCASE : []),
//     ...(settingsAllowSymbolsEl.checked ? SPECIAL_CHARACTERS : []),
//   ];
//   validateAvailableCharsLength();
//   console.timeEnd('updateAvailableChars');
// }

function updateAvailableChars() {
  console.time('updateAvailableChars');
  availableChars = new Set();

  if (settingsAllowNumbersEl.checked) availableChars = new Set([...availableChars, ...NUMBERS]);
  if (settingsAllowUppercaseEl.checked) availableChars = new Set([...availableChars, ...UPPERCASE]);
  if (settingsAllowLowercaseEl.checked) availableChars = new Set([...availableChars, ...LOWERCASE]);
  if (settingsAllowSymbolsEl.checked) availableChars = new Set([...availableChars, ...SPECIAL_CHARACTERS]);

  validateAvailableCharsLength();
  console.timeEnd('updateAvailableChars');
}

function showNotification() {
  notificationEl.classList.remove('is-invisible');
  setTimeout(() => {
    notificationEl.classList.add('is-invisible');
  }, 3000);
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(pwdGeneratedEl.innerText);
    showNotification();
  } catch (err) {
    console.error('Error copying text: ', err);
  }
}

function createPassword() {
  if (availableChars.size === 0) {
    return '';
  }

  console.time('createPassword');

  const passwordLength = getPasswordLength(settingsPasswordLengthRangeEl);
  const charsArray = Array.from(availableChars);
  const randomValues = crypto.getRandomValues(new Uint32Array(passwordLength));

  const password = Array.from({ length: passwordLength }, (_, i) => {
    return String.fromCharCode(charsArray[randomValues[i] % charsArray.length]);
  }).join('');

  console.timeEnd('createPassword');
  return password;
}

// function createPassword() {
//   if (availableChars.size === 0) {
//     return '';
//   }

//   console.time('createPassword');

//   const passwordLength = getPasswordLength(settingsPasswordLengthRangeEl);
//   const charsArray = Array.from(availableChars);
//   const indexes = crypto.getRandomValues(new Uint32Array(charsArray.length));
//   const password = new Password(settingsExcludeDuplicateEl.checked);

//   const maxPasswordLength = settingsExcludeDuplicateEl.checked
//     ? Math.min(passwordLength, charsArray.length)
//     : passwordLength;

//   let loop = 0;
//   while (password.length < maxPasswordLength) {
//     const index = indexes[loop % indexes.length] % charsArray.length;
//     const char = String.fromCharCode(charsArray[index]);

//     if (!isSimilarCharExcluded(char)) {
//       password.addChar(char);
//     }
//     loop++;
//   }

//   const passwordAsString = password.toString();

//   // Clear password in memory
//   password.clear();

//   console.timeEnd('createPassword');
//   return passwordAsString;
// }

function updateSettings() {
  const pwdMode = document.querySelector('input[name="pwd-mode"]:checked').value;
  switch (pwdMode) {
    case 'easy-to-read': {
      settingsExcludeSimilarEl.checked = true;
      settingsExcludeDuplicateEl.checked = false;

      settingsAllowNumbersEl.checked = false;
      settingsAllowUppercaseEl.checked = true;
      settingsAllowLowercaseEl.checked = true;
      settingsAllowSymbolsEl.checked = false;
      break;
    }
    case 'easy-to-say': {
      settingsExcludeSimilarEl.checked = false;
      settingsExcludeDuplicateEl.checked = false;

      settingsAllowNumbersEl.checked = false;
      settingsAllowUppercaseEl.checked = true;
      settingsAllowLowercaseEl.checked = true;
      settingsAllowSymbolsEl.checked = false;
      break;
    }
    case 'all-characters':
    default: {
      settingsExcludeSimilarEl.checked = false;
      settingsExcludeDuplicateEl.checked = false;

      settingsAllowNumbersEl.checked = true;
      settingsAllowUppercaseEl.checked = true;
      settingsAllowLowercaseEl.checked = true;
      settingsAllowSymbolsEl.checked = true;
      break;
    }
  }
  updateAvailableChars();
}

function calculatePasswordEntropy(length, charsetSize) {
  return length * Math.log2(charsetSize);
}

function calculatePasswordLevel() {
  console.log('calculatePasswordLevel');

  const pwdLength = getPasswordLength(settingsPasswordLengthRangeEl);
  const charsetSize = availableChars.size || 1;
  const entropy = calculatePasswordEntropy(pwdLength, charsetSize);
  console.log('entropy', entropy, 'charsetSize', charsetSize, 'pwdLength', pwdLength);

  pwdGeneratedStrengthEl.classList.remove('is-danger', 'is-warning', 'is-info', 'is-success');
  pwdGeneratedStrengthTagEl.classList.remove('has-background-danger', 'has-background-warning', 'has-background-info', 'has-background-success');

  if (entropy < 28) {
    pwdGeneratedStrengthEl.classList.add('is-danger'); // Molto debole
    pwdGeneratedStrengthTagEl.classList.add('has-background-danger', 'has-text-danger-light'); // Molto debole
    pwdGeneratedStrengthTagEl.innerText = 'Too easy to guess';
  } else if (entropy < 36) {
    pwdGeneratedStrengthEl.classList.add('is-warning'); // Debole
    pwdGeneratedStrengthTagEl.classList.add('has-background-warning', 'has-text-warning-dark'); // Debole
    pwdGeneratedStrengthTagEl.innerText = 'At risk of being compromised';
  } else if (entropy < 60) {
    pwdGeneratedStrengthEl.classList.add('is-info'); // Buona
    pwdGeneratedStrengthTagEl.classList.add('has-background-info', 'has-text-info-light'); // Buona
    pwdGeneratedStrengthTagEl.innerText = 'Secure for normal use';
  } else {
    pwdGeneratedStrengthEl.classList.add('is-success'); // Molto sicura
    pwdGeneratedStrengthTagEl.classList.add('has-background-success', 'has-text-success-light'); // Molto sicura
    pwdGeneratedStrengthTagEl.innerText = 'Protects against hacking attempts';
  }
}

function bindEvents() {
  settingsPasswordLengthRangeEl.addEventListener('input', () => {
    settingsPasswordLengthEl.value = settingsPasswordLengthRangeEl.value;
  });
  settingsPasswordLengthEl.addEventListener('change', () => {
    if (settingsPasswordLengthEl.value < 4) {
      settingsPasswordLengthEl.value = 4;
    }
    if (settingsPasswordLengthEl.value > 56) {
      settingsPasswordLengthEl.value = 56;
    }
    settingsPasswordLengthRangeEl.value = settingsPasswordLengthEl.value;
  });

  notificationDeleteBtnEl.addEventListener('click', () => {
    notificationEl.classList.add('is-invisible');
  });

  actionRedoEl.addEventListener('click', handlePasswordCreation);

  document.getElementById('action-copy-to-clipboard').addEventListener('click', copyToClipboard);

  for (let el of document.getElementsByClassName('setting-element')) {
    el.addEventListener('change', updateAvailableChars);
  }

  for (let el of document.getElementsByClassName('setting-pwd-mode')) {
    el.addEventListener('change', updateSettings);
  }
}

function writeWellcomeMessage() {
  const wellcomeMessageSettings = 'color:#485fc7; font-size: 16px; font-weight: 700; font-family: monospace';
  console.log('%c⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀', wellcomeMessageSettings);
  console.log('%c⠀⠀⠀ Welcome to the developer vault!.                     ⠀⠀⠀', wellcomeMessageSettings);
  console.log('%c⠀⠀⠀ Top secret password generation happens here...       ⠀⠀⠀', wellcomeMessageSettings);
  console.log('%c⠀⠀⠀ Mostly. ^_^                                          ⠀⠀⠀', wellcomeMessageSettings);
  console.log('%c⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀', wellcomeMessageSettings);
}

function displayPage() {
  document.body.style = 'display: auto';
}

function handlePasswordCreation() {
  pwdGeneratedEl.innerHTML = createPassword();
  calculatePasswordLevel();
}

function initalizePageElements() {
  document.getElementById('settings-allow-symbols-list').innerHTML = Array.from(SPECIAL_CHARACTERS).map((el) =>
    String.fromCharCode(el)
  );
}

// Init
function init() {
  writeWellcomeMessage();

  bindEvents();
  initalizePageElements();

  // Update the AvailableChars array based on the html default
  // and create the first password
  updateAvailableChars();
  handlePasswordCreation();

  // Show content only when page is loaded
  displayPage();
}

window.onload = init;
