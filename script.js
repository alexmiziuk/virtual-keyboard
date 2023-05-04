const body = document.querySelector('.body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
body.insertBefore(container, body.firstChild);
const keyboardWrapp = document.createElement('div');
keyboardWrapp.classList.add('keyboard_wrapp');
container.appendChild(keyboardWrapp);
const textInput = document.createElement('textarea');
textInput.classList.add('text');
textInput.setAttribute('autofocus', true);
keyboardWrapp.appendChild(textInput);
const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard_keys');
keyboardWrapp.appendChild(keyboardKeys);
function createKey(selector, text) {
  const keyElement = document.createElement('div');
  keyElement.setAttribute('class', selector);
  keyElement.textContent = text;
  return keyElement;
}
// Ряд 1
const row1 = document.createElement('div');
row1.classList.add('row');
keyboardKeys.appendChild(row1);
const backtick = createKey('keys', '`');
const digit1 = createKey('keys', '1');
const digit2 = createKey('keys', '2');
const digit3 = createKey('keys', '3');
const digit4 = createKey('keys', '4');
const digit5 = createKey('keys', '5');
const digit6 = createKey('keys', '6');
const digit7 = createKey('keys', '7');
const digit8 = createKey('keys', '8');
const digit9 = createKey('keys', '9');
const digit0 = createKey('keys', '0');
const minus = createKey('keys', '-');
const equal = createKey('keys', '=');
const backspace = createKey('keys backspace_key', 'Backspace');
row1.append(backtick, digit1, digit2, digit3, digit4, digit5, digit6, digit7);
row1.append(digit8, digit9, digit0, minus, equal, backspace);
// Ряд 2
const row2 = document.createElement('div');
row2.classList.add('row');
keyboardKeys.appendChild(row2);
const tabs = createKey('keys tab_key', 'Tab');
const keyQ = createKey('keys', 'Q');
const keyW = createKey('keys', 'W');
const keyE = createKey('keys', 'E');
const keyR = createKey('keys', 'R');
const keyT = createKey('keys', 'T');
const keyY = createKey('keys', 'Y');
const keyU = createKey('keys', 'U');
const keyI = createKey('keys', 'I');
const keyO = createKey('keys', 'O');
const keyP = createKey('keys', 'P');
const leftBracket = createKey('keys left_bracket', '{');
const rightBracket = createKey('keys right_bracket', '}');
const backslash = createKey('keys slash_key', '\\');
row2.append(tabs, keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI);
row2.append(keyO, keyP, leftBracket, rightBracket, backslash);
const row3 = document.createElement('div');
row3.classList.add('row');
keyboardKeys.appendChild(row3);
const capsLock = createKey('keys caps_lock_key', 'Caps Lock');
const keyA = createKey('keys', 'A');
const keyS = createKey('keys', 'S');
const keyD = createKey('keys', 'D');
const keyF = createKey('keys', 'F');
const keyG = createKey('keys', 'G');
const keyH = createKey('keys', 'H');
const keyJ = createKey('keys', 'J');
const keyK = createKey('keys', 'K');
const keyL = createKey('keys', 'L');
const semicolon = createKey('keys', ';');
const quote = createKey('keys', "'");
const enter = createKey('keys enter_key', 'Enter');
row3.append(capsLock, keyA, keyS, keyD, keyF, keyG, keyH);
row3.append(keyJ, keyK, keyL, semicolon, quote, enter);
// ряд 4
const row4 = document.createElement('div');
row4.classList.add('row');
keyboardKeys.appendChild(row4);
const leftShift = createKey('keys shift_key shift_left', 'Shift');
const keyZ = createKey('keys', 'Z');
const keyX = createKey('keys', 'X');
const keyC = createKey('keys', 'C');
const keyV = createKey('keys', 'V');
const keyB = createKey('keys', 'B');
const keyN = createKey('keys', 'N');
const keyM = createKey('keys', 'M');
const comma = createKey('keys', ',');
const period = createKey('keys', '.');
const slash = createKey('keys', '/');
const rightShift = createKey('keys shift_key shift_right', 'Shift');
row4.append(leftShift, keyZ, keyX, keyC, keyV, keyB, keyN, keyM, comma, period, slash, rightShift);
// ряд 5
const row5 = document.createElement('div');
row5.classList.add('row');
keyboardKeys.appendChild(row5);
const leftCtrl = createKey('keys ctrl_key ctrl_left', 'Ctrl');
const win = createKey('keys win_key', 'Win');
const leftAlt = createKey('keys alt_key alt_left', 'Alt');
const space = createKey('keys space_key', '\u0020');
const leftArrow = createKey('keys arrow_left', '\u2190');
const upArrow = createKey('keys arrow_up', '\u2191');
const downArrow = createKey('keys arrow_down', '\u2193');
const rightArrow = createKey('keys arrow_right', '\u2192');
const rightAlt = createKey('keys alt_key alt_right', 'Alt');
const del = createKey('keys dell_key', 'Del');
const rightCtrl = createKey('keys ctrl_key ctrl_right', 'Ctrl');
row5.append(leftCtrl, win, leftAlt, space, leftArrow, upArrow);
row5.append(downArrow, rightArrow, rightAlt, del, rightCtrl);
const keyButtons = document.querySelectorAll('.keys');
const backSpaceKey = document.querySelector('.backspace_key');
const tab = document.querySelector('.tab_key');
const spaceKey = document.querySelector('.space_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const capsLockButton = document.querySelector('.caps_lock_key');
const enterKey = document.querySelector('.enter_key');
const ctrlLeft = document.querySelector('.ctrl_left');
const ctrlRight = document.querySelector('.ctrl_right');
const winKey = document.querySelector('.win_key');
const altLeft = document.querySelector('.alt_left');
const altRight = document.querySelector('.alt_right');
const arrowLeft = document.querySelector('.arrow_left');
const arrowUp = document.querySelector('.arrow_up');
const arrowDown = document.querySelector('.arrow_down');
const arrowRight = document.querySelector('.arrow_right');
const dellKey = document.querySelector('.dell_key');
const сyrillic = [
  { qname: 'Ё', qlowname: 'ё' },
  { qname: '1', qlowname: '1' },
  { qname: '2', qlowname: '2' },
  { qname: '3', qlowname: '3' },
  { qname: '4', qlowname: '4' },
  { qname: '5', qlowname: '5' },
  { qname: '6', qlowname: '6' },
  { qname: '7', qlowname: '7' },
  { qname: '8', qlowname: '8' },
  { qname: '9', qlowname: '9' },
  { qname: '0', qlowname: '0' },
  { qname: '-', qlowname: '-' },
  { qname: '=', qlowname: '=' },
  { qname: 'Backspace', qlowname: 'backspace' },
  { qname: 'Tab', qlowname: 'tab' },
  { qname: 'Й', qlowname: 'й' },
  { qname: 'Ц', qlowname: 'ц' },
  { qname: 'У', qlowname: 'у' },
  { qname: 'К', qlowname: 'к' },
  { qname: 'Е', qlowname: 'е' },
  { qname: 'Н', qlowname: 'н' },
  { qname: 'Г', qlowname: 'г' },
  { qname: 'Ш', qlowname: 'ш' },
  { qname: 'Щ', qlowname: 'щ' },
  { qname: 'З', qlowname: 'з' },
  { qname: 'Х', qlowname: 'х' },
  { qname: 'Ъ', qlowname: 'ъ' },
  { qname: '\\', qlowname: '\\' },
  { qname: 'Caps Lock', qlowname: 'сaps Lock' },
  { qname: 'Ф', qlowname: 'ф' },
  { qname: 'Ы', qlowname: 'ы' },
  { qname: 'В', qlowname: 'в' },
  { qname: 'А', qlowname: 'а' },
  { qname: 'П', qlowname: 'п' },
  { qname: 'Р', qlowname: 'р' },
  { qname: 'О', qlowname: 'о' },
  { qname: 'Л', qlowname: 'л' },
  { qname: 'Д', qlowname: 'д' },
  { qname: 'Ж', qlowname: 'ж' },
  { qname: 'Э', qlowname: 'э' },
  { qname: 'Enter', qlowname: 'enter' },
  { qname: 'Shift', qlowname: 'shift' },
  { qname: 'Я', qlowname: 'я' },
  { qname: 'Ч', qlowname: 'ч' },
  { qname: 'С', qlowname: 'с' },
  { qname: 'М', qlowname: 'м' },
  { qname: 'И', qlowname: 'и' },
  { qname: 'Т', qlowname: 'т' },
  { qname: 'Ь', qlowname: 'ь' },
  { qname: 'Б', qlowname: 'б' },
  { qname: 'Ю', qlowname: 'ю' },
  { qname: '.', qlowname: '.' },
  { qname: 'Shift', qlowname: 'shift' },
  { qname: 'Ctrl', qlowname: 'ctrl' },
  { qname: 'Win', qlowname: 'win' },
  { qname: 'Alt', qlowname: 'alt' },
  { qname: '', qlowname: '' },
  { qname: '←', qlowname: '←' },
  { qname: '↑', qlowname: '↑' },
  { qname: '↓', qlowname: '↓' },
  { qname: '→', qlowname: '→' },
  { qname: 'Alt', qlowname: 'alt' },
  { qname: 'Del', qlowname: 'del' },
  { qname: 'Ctrl', qlowname: 'Ctrl' },
];
for (let i = 0; i < keyButtons.length; i += 1) {
  keyButtons[i].setAttribute('keyname', keyButtons[i].innerText);
  keyButtons[i].setAttribute('lowerCaseName', keyButtons[i].innerText.toLowerCase());
  keyButtons[i].setAttribute('qkeyname', сyrillic[i].qname);
  keyButtons[i].setAttribute('qlowerCaseName', сyrillic[i].qlowname);
}
function changeLanguage(language) {
  /* language = "en" */
  const keysl = document.querySelectorAll('.keys');
  keysl.forEach((key) => {
    const latinValue = key.getAttribute('keyname');
    const cyrillicValue = key.getAttribute('qkeyname');
    if (language === 'ru') {
      // eslint-disable-next-line no-param-reassign
      key.textContent = cyrillicValue;
    }
    if (language === 'en') {
      // eslint-disable-next-line no-param-reassign
      key.textContent = latinValue;
    }
  });
} window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keyButtons.length; i += 1) {
    if (e.key === keyButtons[i].getAttribute('keyname') || e.key === keyButtons[i].getAttribute('lowerCaseName') || e.key === keyButtons[i].getAttribute('qkeyname') || e.key === keyButtons[i].getAttribute('qlowerCaseName')) {
      keyButtons[i].classList.add('active');
    }
    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    }
    if (e.code === 'Delete') {
      e.preventDefault();
      spaceKey.classList.add('active');
    }
    if (e.code === 'BracketLeft') {
      leftBracket.classList.add('active');
    }
    if (e.code === 'BracketRight') {
      rightBracket.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.add('active');
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.add('active');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.add('active');
    }
    if (e.code === 'MetaLeft') {
      winKey.classList.add('active');
    }
    if (e.code === 'AltLeft') {
      e.preventDefault();
      altLeft.classList.add('active');
    }
    if (e.code === 'AltRight') {
      altRight.classList.add('active');
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const currentIndent = parseInt(window.getComputedStyle(textInput).getPropertyValue('text-indent'), 10);
      const newIndent = currentIndent + 20;
      textInput.style.display = 'inline-block';
      textInput.style.textIndent = `${newIndent}px`;
    }
    if (e.code === 'Delete') {
      dellKey.classList.add('active');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.add('active');
    }
    if (e.code === 'ArrowDown') {
      arrowDown.classList.add('active');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
    }
    if (e.shiftKey && e.altKey) {
      changeLanguage('ru');
    }
    if (e.code === 'ShiftRight' && e.code === 'AltLeft') {
      e.preventDefault();
      changeLanguage('en');
    }
  }
});
window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keyButtons.length; i += 1) {
    /* console.log(i) */ // проверка всех клавиш
    if (e.key === keyButtons[i].getAttribute('keyname') || e.key === keyButtons[i].getAttribute('lowerCaseName') || e.key === keyButtons[i].getAttribute('qkeyname') || e.key === keyButtons[i].getAttribute('qlowerCaseName')) {
      keyButtons[i].classList.remove('active');
      keyButtons[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code === 'BracketLeft') {
      leftBracket.classList.remove('active');
      leftBracket.classList.add('remove');
    }
    if (e.code === 'BracketRight') {
      rightBracket.classList.remove('active');
      rightBracket.classList.add('remove');
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
      shiftRight.classList.add('remove');
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.add('remove');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.remove('active');
      ctrlLeft.classList.add('remove');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.remove('active');
      ctrlRight.classList.add('remove');
    }
    if (e.code === 'MetaLeft') {
      winKey.classList.remove('active');
      winKey.classList.add('remove');
    }
    if (e.code === 'AltLeft') {
      altLeft.classList.remove('active');
      altLeft.classList.add('remove');
    }
    if (e.code === 'AltRight') {
      altRight.classList.remove('active');
      altRight.classList.add('remove');
    }
    if (e.code === 'Tab') {
      tab.classList.remove('active');
      tab.classList.add('remove');
    }
    if (e.code === 'Delete') {
      dellKey.classList.remove('active');
      dellKey.classList.remove('remove');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
      arrowLeft.classList.add('remove');
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.remove('active');
      arrowUp.classList.add('remove');
    }
    if (e.code === 'ArrowDown') {
      arrowDown.classList.remove('active');
      arrowDown.classList.add('remove');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
      arrowRight.classList.add('remove');
    }
    setTimeout(() => {
      keyButtons[i].classList.remove('remove');
      // spaceKey.classList.remove("active")
    }, 200);
  }
});
for (let i = 0; i < keyButtons.length; i += 1) {
  keyButtons[i].addEventListener('mousedown', () => {
    const key = keyButtons[i].getAttribute('keyname');
    if (capsLockButton.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || shiftLeft.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || tab.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || ctrlLeft.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || ctrlRight.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || winKey.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || altLeft.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || altRight.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || enterKey.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || backSpaceKey.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || arrowLeft.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || arrowUp.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || arrowDown.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || arrowRight.getAttribute('keyname') === keyButtons[i].getAttribute('keyname') || dellKey.getAttribute('keyname') === keyButtons[i].getAttribute('keyname')) {
      textInput.value += '';
    } else {
      textInput.value += key;
    }
    keyButtons[i].style.backgroundColor = 'blue';
    keyButtons[i].style.color = 'white';
  });
  keyButtons[i].addEventListener('mouseup', () => {
    keyButtons[i].style.backgroundColor = '';
    keyButtons[i].style.color = '';
  });
}
spaceKey.addEventListener('click', () => {
  textInput.focus();
  textInput.value += ' ';
});
capsLockButton.addEventListener('click', () => {
  capsLockButton.classList.toggle('active');
  for (let i = 0; i < keyButtons.length; i += 1) {
    const key = keyButtons[i];
    const letter = key.getAttribute('keyname');
    const lowerCaseLetter = key.getAttribute('lowerCaseName');
    if (capsLockButton.classList.contains('active')) {
      key.innerText = letter.toUpperCase();
      key.setAttribute('keyname', letter.toUpperCase());
      key.setAttribute('lowerCaseName', lowerCaseLetter);
    } else {
      key.innerText = letter.toLowerCase();
      key.setAttribute('keyname', letter.toLowerCase());
      key.setAttribute('lowerCaseName', lowerCaseLetter);
    }
  }
});
shiftLeft.addEventListener('click', () => {
  textInput.focus();
});
shiftRight.addEventListener('click', () => {
  textInput.focus();
});
dellKey.addEventListener('click', () => {
  const startPos = textInput.selectionStart;
  const endPos = textInput.selectionEnd;
  if (startPos !== endPos) {
    textInput.setRangeText('', startPos, endPos, 'end');
  } else {
    textInput.setRangeText('', startPos, startPos + 1, 'end');
  }
});
altRight.addEventListener('click', () => {
  textInput.focus();
});
del.addEventListener('click', () => {
  textInput.focus();
});
winKey.addEventListener('click', () => {
  textInput.focus();
});
ctrlLeft.addEventListener('click', () => {
  textInput.focus();
});
ctrlRight.addEventListener('click', () => {
  textInput.focus();
});
shiftLeft.addEventListener('click', () => {
  textInput.focus();
});
enterKey.addEventListener('click', () => {
  textInput.focus();
  textInput.value += '\n';
});
arrowLeft.addEventListener('mousedown', (event) => {
  event.preventDefault();
  const currentCursorPosition = textInput.selectionStart;
  const newCursorPosition = currentCursorPosition - 1;
  textInput.setSelectionRange(newCursorPosition, newCursorPosition);
});
arrowUp.addEventListener('mousedown', (event) => {
  event.preventDefault();
  textInput.focus();
  const currentCursorPosition = textInput.selectionStart;
  const currentLine = textInput.value.substring(0, currentCursorPosition).split('\n').length - 1;
  const newCursorPosition = textInput.value.substring(0, currentCursorPosition).lastIndexOf('\n', currentCursorPosition - 1) + 1;
  const newLine = textInput.value.substring(0, newCursorPosition).split('\n').length - 1;
  const lineDiff = currentLine - newLine;
  const newLineCursorPosition = Math.min(currentCursorPosition - newCursorPosition, textInput.value.substring(newCursorPosition).indexOf('\n')) || textInput.value.length - newCursorPosition;
  textInput.setSelectionRange(newCursorPosition
+ newLineCursorPosition, newCursorPosition + newLineCursorPosition);
  window.scrollBy(0, -textInput.clientHeight * lineDiff);
});
arrowDown.addEventListener('mousedown', (event) => {
  event.preventDefault();
  const currentCursorPosition = textInput.selectionStart;
  const currentLine = textInput.value.substring(0, currentCursorPosition).split('\n').length - 1;
  const newCursorPosition = textInput.value.indexOf('\n', currentCursorPosition) + 1;
  const newLine = textInput.value.substring(0, newCursorPosition).split('\n').length - 1;
  const lineDiff = newLine - currentLine;
  const newLineCursorPosition = Math.min(newCursorPosition - currentCursorPosition, textInput.value.substring(currentCursorPosition).indexOf('\n')) || textInput.value.length - currentCursorPosition;
  textInput.setSelectionRange(newCursorPosition + newLineCursorPosition, newCursorPosition
+ newLineCursorPosition);
  window.scrollBy(0, textInput.clientHeight * lineDiff);
});
arrowRight.addEventListener('mousedown', (event) => {
  event.preventDefault();
  const currentCursorPosition = textInput.selectionStart;
  textInput.setSelectionRange(currentCursorPosition + 1, currentCursorPosition + 1);
});
enterKey.addEventListener('mousedown', (event) => {
  event.preventDefault();
  const currentCursorPosition = textInput.selectionStart;
  const currentLine = textInput.value.substring(0, currentCursorPosition).split('\n').length - 1;
  textInput.setRangeText('\n', currentCursorPosition, currentCursorPosition, 'end');
  let newCursorPosition = currentCursorPosition + 1;
  let newLine = currentLine + 1;
  while (textInput.value.substring(newCursorPosition).indexOf('\n') !== -1) {
    newCursorPosition += textInput.value.substring(newCursorPosition).indexOf('\n') + 1;
    newLine += 1;
  }
  const lineDiff = newLine - currentLine;
  textInput.setSelectionRange(newCursorPosition, newCursorPosition);
  if (lineDiff > 0) {
    window.scrollBy(0, textInput.clientHeight * lineDiff);
  }
});
tab.addEventListener('mousedown', (event) => {
  event.preventDefault();
  textInput.focus();
  const input = document.querySelector('.text');
  const { selectionStart } = input;
  const lines = input.value.substr(0, selectionStart).split('\n');
  const currentLine = lines[lines.length - 1];
  const newLine = ' '.repeat(4) + currentLine;
  input.value = input.value.substr(0, selectionStart - currentLine.length)
  + newLine
  + input.value.substr(selectionStart);

  // eslint-disable-next-line no-multi-assign
  input.selectionStart = input.selectionEnd = selectionStart + 4;
});
backSpaceKey.addEventListener('click', (e) => {
  e.preventDefault();
  textInput.focus();
  const cursorPosition = textInput.selectionStart;
  const inputText = textInput.value;
  const textBeforeCursor = inputText.substring(0, cursorPosition - 1);
  const textAfterCursor = inputText.substring(cursorPosition);
  textInput.value = textBeforeCursor + textAfterCursor;
  textInput.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
});
document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    capsLockButton.classList.toggle('active');
  }
});
