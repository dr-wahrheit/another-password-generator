import _ from 'lodash';
// import printMe from './print.js';
// import * as QrCodeManager from './qr-code.js';

// load styles
import '../styles/style.scss';

// load images
import faviconImage from '../images/favicon.png';
import shareImage from '../images/share.jpg';
import qrcodeImage from '../images/qr-code.jpg';
import arrowImage from '../images/arrow.svg';
import saleSignImage from '../images/sale-sign.svg';
import saleSignNoQrcImage from '../images/sale-sign-no-qrc.svg';
import introImage from '../images/intro-img.svg';
import introQrImage from '../images/intro-img-qr.jpg';
import favicong from '../images/favicon.ico';

const arrayRange = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);

const NUMBERS = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const LOWERCASE = [
  97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
  121, 122,
];
const UPPERCASE = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
];
const SPECIAL_CHARACTERS = [33, 35, 36, 37, 38, 40, 41, 42, 43, 64, 94];
// const SPECIAL_CHARACTERS = [
//   33, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125,
//   126,
// ];

// function logCharsArray(code, chars) {
//   chars.forEach((char) => {
//     console.log(code, char, String.fromCharCode(char));
//   });
// }

// logCharsArray('SPECIAL_CHARACTERS', SPECIAL_CHARACTERS);

const pwdGeneratedEl = document.getElementById('pwd-generated');
const settingsPasswordLengthEl = document.getElementById('settings-password-length');
const settingsAllowNumbersEl = document.getElementById('settings-allow-numbers');
const settingsAllowUppercaseEl = document.getElementById('settings-allow-uppercase');
const settingsAllowLowercaseEl = document.getElementById('settings-allow-lowercase');
const settingsAllowSymbolsEl = document.getElementById('settings-allow-symbols');
const settingsExcludeDuplicateEl = document.getElementById('settings-exclude-duplicate');
const settingsExcludeSimilarEl = document.getElementById('settings-exclude-similar');

function getPasswordLength(settingsPasswordLength) {
  const length = settingsPasswordLength.value;
  try {
    return parseInt(length || settingsPasswordLength.getAttribute('placeholder'));
  } catch (e) {
    console.log('error', e);
  }
  return 0;
}

function copyToClipboard() {
  const el = document.createElement('textarea');
  el.style.visibility = 'none';
  el.value = pwdGeneratedEl.innerText;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  alert('Password copied to clipboard');
}

function createPassword() {
  // const password = document.getElementById('password');
  // const passwordLength = document.getElementById('password-length');
  // const passwordLengthValue = parseInt(passwordLength.value);
  // const passwordValue = _.sampleSize('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', passwordLengthValue);
  // password.value = passwordValue.join('');
  // password.select();
  // document.execCommand('copy');
  // password.blur();
  // password.value = '';
  // passwordLength.blur();
  // passwordLength.value = '';
  // alert('Password copied to clipboard');
  // return false;
  console.time('createPassword');

  const PASSWORD_AVAILABLE_CHARS = [
    ...(settingsAllowNumbersEl.checked ? NUMBERS : []),
    ...(settingsAllowUppercaseEl.checked ? UPPERCASE : []),
    ...(settingsAllowLowercaseEl.checked ? LOWERCASE : []),
    ...(settingsAllowSymbolsEl.checked ? SPECIAL_CHARACTERS : []),
  ];

  if (PASSWORD_AVAILABLE_CHARS.length === 0) {
    return '';
  }

  const passwordLength = getPasswordLength(settingsPasswordLengthEl);
  const indexes = crypto.getRandomValues(new Uint32Array(PASSWORD_AVAILABLE_CHARS.length));
  const password = [];

  for (let i = 0; i < passwordLength; i++) {
    password.push(String.fromCharCode(PASSWORD_AVAILABLE_CHARS[indexes[i] % PASSWORD_AVAILABLE_CHARS.length]));
  }
  const passwordAsString = password.join('');

  console.timeEnd('createPassword');
  return passwordAsString;
}

function bindEvents() {
  document.getElementById('action-redo').addEventListener('click', () => {
    pwdGeneratedEl.innerHTML = createPassword();
  });
  document.getElementById('action-copy-to-clipboard').addEventListener('click', () => {
    copyToClipboard();
  });

  for (let el of document.getElementsByClassName('setting-element')) {
    console.log(el);
    el.addEventListener('change', () => {
      pwdGeneratedEl.innerHTML = createPassword();
    });
  }
}

function init() {
  console.log('init');
  document.getElementById('settings-allow-symbols-list').innerHTML = SPECIAL_CHARACTERS.map((el) =>
    String.fromCharCode(el)
  ).join('');

  // Show content only when page is loaded
  document.body.style = 'display: auto';

  // binding

  bindEvents();
  pwdGeneratedEl.innerHTML = createPassword();
}

window.onload = init;
