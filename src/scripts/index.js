// load styles
import '../styles/style.scss';

// load sitemap & robots
const sitemap = require('../../sitemap.xml');
const robots = require('../../robots.txt');

// load images
import '../images/favicon.ico';
import '../images/favicon.png';
import '../images/share.png';

import Password, {
  NUMBERS,
  LOWERCASE,
  UPPERCASE,
  SPECIAL_CHARACTERS,
  // SIMILAR_CHARS,
} from './genearators/password'
import Passphrase, { PASSPHRASE_WORDLIST } from './genearators/passphrase'

let availableChars = [];

const bodydEl = document.getElementsByTagName('body')[0];
const pwdGeneratedEl = document.getElementById('pwd-generated');
const notificationEl = document.getElementById('notification');
const actionRedoEl = document.getElementById('action-redo');
const notificationDeleteBtnEl = document.querySelector('.notification button.delete');
const settingsPasswordLengthRangeEl = document.getElementById('settings-password-length-range');
const settingsPassphraseLengthRangeEl = document.getElementById('settings-passphrase-length-range');
const settingsPasswordLengthEl = document.getElementById('settings-password-length');
const pwdContainerEl = document.getElementById('pwd-container');
const settingsPassphraseSeparatorEl = document.getElementById('settings-passphrase-separator');
const settingsPassphraseLengthEl = document.getElementById('settings-passphrase-length');
const pwdGeneratedStrengthEl = document.getElementById('pwd-strength');
const pwdGeneratedStrengthTagBoxEl = document.getElementById('pwd-strength-tagbox');
const pwdGeneratedStrengthTagEl = document.getElementById('pwd-strength-tag');
const settingsAllowNumbersEl = document.getElementById('settings-allow-numbers');
const settingsPassphraseCapitalizeEl = document.getElementById('settings-passphrase-capitalize');
const settingsPassphraseIncludeNumbersEl = document.getElementById('settings-passphrase-include-numbers');
const settingsAllowUppercaseEl = document.getElementById('settings-allow-uppercase');
const settingsAllowLowercaseEl = document.getElementById('settings-allow-lowercase');
const settingsAllowSymbolsEl = document.getElementById('settings-allow-symbols');
const settingsExcludeDuplicateEl = document.getElementById('settings-exclude-duplicate-characters');
const settingsExcludeSimilarEl = document.getElementById('settings-exclude-similar-characters');


function getPasswordLength() {
  const length = settingsPasswordLengthEl.value;
  try {
    return parseInt(length || settingsPasswordLengthEl.getAttribute('placeholder'));
  } catch (err) {
    console.error('error', e);
  }
  return 0;
}

function getPassphraseLength() {
  const length = settingsPassphraseLengthEl.value;
  try {
    return parseInt(length || settingsPassphraseLengthEl.getAttribute('placeholder'));
  } catch (err) {
    console.error('error', e);
  }
  return 0;
}

function getPassphraseSeparator() {
  const separator = settingsPassphraseSeparatorEl.value;
  try {
    return separator || settingsPassphraseSeparatorEl.getAttribute('placeholder');
  } catch (err) {
    console.error('error', e);
  }
  return '-';
}

function validateAvailableCharsLength() {
  if (availableChars.length === 0) {
    actionRedoEl.classList.add('is-invisible');
    return;
  }
  actionRedoEl.classList.remove('is-invisible');
}

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
  }, 10000);
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
    return {
      password: '',
      strength: 0,
    };
  }
  const passwordLength = getPasswordLength();
  const generator = new Password(availableChars, passwordLength);
  return generator.generate();
}

function createPassphrase() {
  const passphraseLength = getPassphraseLength();
  const separator = getPassphraseSeparator();
  const capitalize = settingsPassphraseCapitalizeEl.checked;
  const includeNumbers = settingsPassphraseIncludeNumbersEl.checked;
  const generator = new Passphrase(PASSPHRASE_WORDLIST, passphraseLength, separator, includeNumbers, capitalize);
  return generator.generate()
}

function updatePasswordSettings() {
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

function setStrength(strength) {
  bodydEl.classList.remove(
    'is-danger',
    'is-warning',
    'is-info',
    'is-success',
  );
  pwdGeneratedStrengthEl.classList.remove(
    'is-danger',
    'is-warning',
    'is-info',
    'is-success',
  );
  pwdContainerEl.classList.remove(
    'is-danger',
    'is-warning',
    'is-info',
    'is-success',
  );
  settingsPasswordLengthRangeEl.classList.remove(
    'is-danger',
    'is-warning',
    'is-info',
    'is-success',
  );
  pwdGeneratedStrengthTagBoxEl.classList.remove(
    'has-background-danger',
    'has-background-warning',
    'has-background-info',
    'has-background-success',
    'has-text-danger-light',
    'has-text-warning-dark',
    'has-text-info-light',
    'has-text-success-light'
  );

  if (strength < 28) {
    // Molto debole
    bodydEl.classList.add('is-danger');
    pwdContainerEl.classList.add('is-danger');
    pwdGeneratedStrengthEl.classList.add('is-danger');
    settingsPasswordLengthRangeEl.classList.add('is-danger');
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-danger', 'has-text-danger-light');
    pwdGeneratedStrengthTagEl.innerText = 'Too easy to guess';
  } else if (strength < 36) {
    // Debole
    bodydEl.classList.add('is-warning');
    pwdContainerEl.classList.add('is-warning');
    pwdGeneratedStrengthEl.classList.add('is-warning');
    settingsPasswordLengthRangeEl.classList.add('is-warning');
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-warning', 'has-text-warning-dark');
    pwdGeneratedStrengthTagEl.innerText = 'At risk of being compromised';

  } else if (strength < 60) {
    // Buona
    bodydEl.classList.add('is-info');
    pwdContainerEl.classList.add('is-info');
    pwdGeneratedStrengthEl.classList.add('is-info');
    settingsPasswordLengthRangeEl.classList.add('is-info');
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-info', 'has-text-info-light');
    pwdGeneratedStrengthTagEl.innerText = 'Secure for normal use';

  } else {
    // Molto sicura
    bodydEl.classList.add('is-success');
    pwdContainerEl.classList.add('is-success');
    pwdGeneratedStrengthEl.classList.add('is-success');
    settingsPasswordLengthRangeEl.classList.add('is-success');
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-success', 'has-text-success-light');
    pwdGeneratedStrengthTagEl.innerText = 'Protects against hacking attempts';

  }
}

function togglePwdType(event) {
  if (event.target.parentElement.classList.contains('is-active')) {
    return;
  }

  document.querySelectorAll('#pwd-type-selector-tab li a').forEach(el => el.parentElement.classList.remove('is-active'));
  const type = event.target.getAttribute('data-type');
  document.querySelectorAll('.settings').forEach(el => {
    if (!el.classList.contains('is-hidden')) {
      el.classList.add('is-hidden')
    }
  });
  document.getElementById(`${type}-settings`).classList.remove('is-hidden');
  event.target.parentElement.classList.add('is-active');

  handlePasswordCreation();
}

function bindEvents() {
  settingsPasswordLengthRangeEl.addEventListener('input', () => {
    settingsPasswordLengthEl.value = settingsPasswordLengthRangeEl.value;
    handlePasswordCreation()
  });
  settingsPassphraseLengthRangeEl.addEventListener('input', () => {
    settingsPassphraseLengthEl.value = settingsPassphraseLengthRangeEl.value;
    handlePasswordCreation()
  });
  settingsPassphraseSeparatorEl.addEventListener('keyup', () => {
    handlePasswordCreation();
  });

  settingsPasswordLengthEl.addEventListener('change', () => {
    if (settingsPasswordLengthEl.value < 1) {
      settingsPasswordLengthEl.value = 1;
    }
    if (settingsPasswordLengthEl.value > 256) {
      settingsPasswordLengthEl.value = 256;
    }
    settingsPasswordLengthRangeEl.value = settingsPasswordLengthEl.value;
    handlePasswordCreation();
  });

  notificationDeleteBtnEl.addEventListener('click', () => {
    notificationEl.classList.add('is-invisible');
  });

  actionRedoEl.addEventListener('click', handlePasswordCreation);

  document.getElementById('action-copy-to-clipboard').addEventListener('click', copyToClipboard);

  for (let el of document.getElementsByClassName('setting-element')) {
    el.addEventListener('change', () => {
      updateAvailableChars();
      handlePasswordCreation();
    });
  }

  for (let el of document.getElementsByClassName('setting-pwd-mode')) {
    el.addEventListener('change', () => {
      updatePasswordSettings()
      handlePasswordCreation()
    });
  }

  document.querySelectorAll('#pwd-type-selector-tab li a').forEach((el) => {
    el.addEventListener('click', togglePwdType);
  });
}

function writeWellcomeMessage() {
  const wellcomeMessageSettings = 'color:#3e8ed0; font-size: 16px; font-weight: 700; font-family: monospace';
  console.info('%c⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀', wellcomeMessageSettings);
  console.info('%c⠀⠀⠀ Welcome to the developer vault!.                     ⠀⠀⠀', wellcomeMessageSettings);
  console.info('%c⠀⠀⠀ Top secret password generation happens here...       ⠀⠀⠀', wellcomeMessageSettings);
  console.info('%c⠀⠀⠀ Mostly. ^_^                                          ⠀⠀⠀', wellcomeMessageSettings);
  console.info('%c⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀', wellcomeMessageSettings);
}

function displayPage() {
  // document.body.style = 'display: auto';
  document.body.classList.remove('is-invisible')
}

function handlePasswordCreation() {
  if (document.querySelector('#pwd-type-selector-tab li.is-active a').getAttribute('data-type') === 'passphrase') {
    const { passphrase, strength } = createPassphrase();
    pwdGeneratedEl.innerHTML = passphrase;
    setStrength(strength);
    return;
  }

  const { password, strength } = createPassword();
  pwdGeneratedEl.innerHTML = password;
  setStrength(strength);
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
