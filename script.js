let body = document.querySelector(".body");

const container = document.createElement("div");
container.classList.add('container');
body.appendChild(container);
body.insertBefore(container, body.firstChild);

const keyboard_wrapp = document.createElement("div");
keyboard_wrapp.classList.add('keyboard_wrapp');
container.appendChild(keyboard_wrapp);

const text_input = document.createElement('textarea');
text_input.classList.add('text');
text_input.setAttribute("autofocus", true);
keyboard_wrapp.appendChild(text_input);

const keyboard_keys = document.createElement('div');
keyboard_keys.classList.add('keyboard_keys');
keyboard_wrapp.appendChild(keyboard_keys);

// Ряд 1
const row1 = document.createElement("div");
row1.classList.add("row");
keyboard_keys.appendChild(row1);

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

row1.append(backtick, digit1, digit2, digit3, digit4, digit5, digit6, digit7, digit8, digit9, digit0, minus, equal, backspace);

// Ряд 2
const row2 = document.createElement("div");
row2.classList.add("row");
keyboard_keys.appendChild(row2);

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
const leftBracket = createKey('keys', '{');
const rightBracket = createKey('keys', '}');
const backslash = createKey('keys slash_key', '\\');

row2.append(tabs, keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP, leftBracket, rightBracket, backslash);

// Ряд 3

const row3 = document.createElement("div");
row3.classList.add("row");
keyboard_keys.appendChild(row3);

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
const quote = createKey('keys', '"');
const enter = createKey('keys enter_key', 'Enter');

row3.append(capsLock, keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, semicolon, quote, enter);

// ряд 4

const row4 = document.createElement("div");
row4.classList.add("row");
keyboard_keys.appendChild(row4);

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
const upArrow = createKey('keys', '\u2191');
const rightShift = createKey('keys shift_key shift_right', 'Shift');

row4.append(leftShift, keyZ, keyX, keyC, keyV, keyB, keyN, keyM, comma, period, slash, upArrow, rightShift);

// ряд 5

const row5 = document.createElement("div");
row5.classList.add("row");
keyboard_keys.appendChild(row5);

const leftCtrl = createKey('keys ctrl_key ctrl_left', 'Ctrl');
const win = createKey('keys win_key', 'Win');
const leftAlt = createKey('keys alt_key alt_left', 'Alt');
const space = createKey('keys space_key', '\u0020');
const leftArrow = createKey('keys arrow_left', '\u2190');
const uparrow = createKey('keys arrow_up', '\u2191');
const downArrow = createKey('keys arrow_down', '\u2193');
const rightArrow = createKey('keys arrow_right', '\u2192');
const rightAlt = createKey('keys alt_key alt_right', 'Alt');
const del = createKey('keys dell_key', 'Del')
const rightCtrl = createKey('keys ctrl_key ctrl_right', 'Ctrl');

row5.append(leftCtrl, win, leftAlt, space, leftArrow, uparrow, downArrow, rightArrow, rightAlt, del, rightCtrl);

function createKey(selector, text) {
	const keyElement = document.createElement('button');
	keyElement.setAttribute("class", selector);
	keyElement.textContent = text;
	return keyElement;
}

let keys = document.querySelectorAll('.keys');
let backspace_key = document.querySelector(".backspace_key")
let tab = document.querySelector(".tab_key")
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector(".caps_lock_key");
let enter_key = document.querySelector(".enter_key");
let ctrl_left = document.querySelector(".ctrl_left");
let ctrl_right = document.querySelector(".ctrl_right");
let win_key = document.querySelector('.win_key');
let alt_left = document.querySelector('.alt_left');
let alt_right = document.querySelector('.alt_right');
let arrow_left = document.querySelector(".arrow_left");
let arrow_up = document.querySelector(".arrow_up");
let arrow_down = document.querySelector(".arrow_down");
let arrow_right = document.querySelector(".arrow_right");
let dell_key = document.querySelector(".dell_key");
/* console.log(keys);
console.log(spaceKey);
console.log(shift_left);
console.log(shift_right);
console.log(caps_lock_key);
console.log(toggle_circle);
console.log(night_mode);
console.log(body);
console.log(text_input);
console.log(change_color);
console.log(colors_input);
console.log(keyboard_lights);
 */
const сyrillic = [
	{ qname: "Ё", qlowname: "ё" },
	{ qname: "1", qlowname: "1" },
	{ qname: "2", qlowname: "2" },
	{ qname: "3", qlowname: "3" },
	{ qname: "4", qlowname: "4" },
	{ qname: "5", qlowname: "5" },
	{ qname: "6", qlowname: "6" },
	{ qname: "7", qlowname: "7" },
	{ qname: "8", qlowname: "8" },
	{ qname: "9", qlowname: "9" },
	{ qname: "0", qlowname: "0" },
	{ qname: "-", qlowname: "-" },
	{ qname: "=", qlowname: "=" },
	{ qname: "Backspace", qlowname: "backspace" },
	{ qname: "Tab", qlowname: "tab" },
	{ qname: "Й", qlowname: "й" },
	{ qname: "Ц", qlowname: "ц" },
	{ qname: "У", qlowname: "у" },
	{ qname: "К", qlowname: "к" },
	{ qname: "Е", qlowname: "е" },
	{ qname: "Н", qlowname: "н" },
	{ qname: "Г", qlowname: "г" },
	{ qname: "Ш", qlowname: "ш" },
	{ qname: "Щ", qlowname: "щ" },
	{ qname: "З", qlowname: "з" },
	{ qname: "Х", qlowname: "х" },
	{ qname: "Ъ", qlowname: "ъ" },
	{ qname: "\\", qlowname: "\\" },
	{ qname: "Caps Lock", qlowname: "сaps Lock" },
	{ qname: "Ф", qlowname: "ф" },
	{ qname: "Ы", qlowname: "ы" },
	{ qname: "В", qlowname: "в" },
	{ qname: "А", qlowname: "а" },
	{ qname: "П", qlowname: "п" },
	{ qname: "Р", qlowname: "р" },
	{ qname: "О", qlowname: "о" },
	{ qname: "Л", qlowname: "л" },
	{ qname: "Д", qlowname: "д" },
	{ qname: "Ж", qlowname: "ж" },
	{ qname: "Э", qlowname: "э" },
	{ qname: "Enter", qlowname: "enter" },
	{ qname: "Shift", qlowname: "shift" },
	{ qname: "Я", qlowname: "я" },
	{ qname: "Ч", qlowname: "ч" },
	{ qname: "С", qlowname: "с" },
	{ qname: "М", qlowname: "м" },
	{ qname: "И", qlowname: "и" },
	{ qname: "Т", qlowname: "т" },
	{ qname: "Ь", qlowname: "ь" },
	{ qname: ",", qlowname: "," },
	{ qname: ".", qlowname: "." },
	{ qname: "/", qlowname: "/" },
	{ qname: "?", qlowname: "?" },
	{ qname: "Shift", qlowname: "shift" },
	{ qname: "Ctrl", qlowname: "ctrl" },
	{ qname: "Win", qlowname: "win" },
	{ qname: "Alt", qlowname: "alt" },
	{ qname: "", qlowname: "" },
	{ qname: "←", qlowname: "←" },
	{ qname: "↑", qlowname: "↑" },
	{ qname: "↓", qlowname: "↓" },
	{ qname: "→", qlowname: "→" },
	{ qname: "Alt", qlowname: "alt" },
	{ qname: "Del", qlowname: "del" },
	{ qname: "Ctrl", qlowname: "Ctrl" }
]

for (let i = 0; i < keys.length; i++) {
	// устанавливаем два атрибута
	keys[i].setAttribute('keyname', keys[i].innerText);
	keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
	keys[i].setAttribute('qkeyname', сyrillic[i].qname);
	keys[i].setAttribute('qlowerCaseName', сyrillic[i].qlowname);
}

window.addEventListener('keydown', function (e) {
	for (let i = 0; i < keys.length; i++) {
		console.log(e.key) // проверка всех клавиш
		if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName') || e.key == keys[i].getAttribute('qkeyname') || e.key == keys[i].getAttribute('qlowerCaseName')) {
			keys[i].classList.add('active')
		}
		if (e.code == 'Space') {
			spaceKey.classList.add("active")
		}
		if (e.code == "ShiftLeft") {
			shift_right.classList.remove("active")
		}
		if (e.code == "ShiftRight") {
			shift_left.classList.remove("active")
		}
		if (e.code == "CapsLock") {
			caps_lock_key.classList.toggle("active");
		}
		if (e.code == "ControlLeft") {
			ctrl_left.classList.add("active")
		}
		if (e.code == "ControlRight") {
			ctrl_right.classList.add("active")
		}
		if (e.code === 'MetaLeft') {
			win_key.classList.add("active");
		}
		if (e.code === 'AltLeft') {
			/* e.preventDefault(); */
			alt_left.classList.add("active");
		}
		if (e.code === 'AltRight') {
			alt_right.classList.add("active");
		}
		
		if (e.key === "Tab") {
			e.preventDefault();
			const currentIndent = parseInt(window.getComputedStyle(text_input).getPropertyValue('text-indent'), 10);
			const newIndent = currentIndent + 20;
			text_input.style.textIndent = newIndent + 'px';
		}
		if (e.code === 'Delete') {
			dell_key.classList.add("active");
		}
		if (e.code === 'ArrowLeft') {
			arrow_left.classList.add("active");
		}
		if (e.code === 'ArrowUp') {
			arrow_up.classList.add("active");
		}
		if (e.code === 'ArrowDown') {
			arrow_down.classList.add("active");
		}
		if (e.code === 'ArrowRight') {
			arrow_right.classList.add("active");
		}

	}
})

window.addEventListener('keyup', function (e) {
	for (let i = 0; i < keys.length; i++) {
		/* console.log(i) */ // проверка всех клавиш
		if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName') || e.key == keys[i].getAttribute('qkeyname') || e.key == keys[i].getAttribute('qlowerCaseName')) {
			keys[i].classList.remove('active')
			keys[i].classList.add('remove')
		}
		if (e.code == "Space") {
			spaceKey.classList.remove("active");
			spaceKey.classList.add("remove");
		}
		if (e.code == "ShiftLeft") {
			shift_right.classList.remove("active");
			shift_right.classList.remove("remove");
		}
		if (e.code == "ShiftRight") {
			shift_left.classList.remove("active");
			shift_left.classList.remove("remove");
		}
		if (e.code == "ControlLeft") {
			ctrl_left.classList.remove("active");
			ctrl_left.classList.remove("remove");
		}
		if (e.code == "ControlRight") {
			ctrl_right.classList.remove("active");
			ctrl_right.classList.remove("remove");
		}
		if (e.code === 'MetaLeft') {
			win_key.classList.remove("active");
			win_key.classList.remove("remove");
		}
		if (e.code === 'AltLeft') {

			alt_left.classList.remove("active");
			alt_left.classList.remove("remove");
		}

		if (e.code === 'AltRight') {
			alt_right.classList.remove("active");
			alt_right.classList.remove("remove");
		}
		if (e.code === 'Tab') {
			tab.classList.remove("active");
			tab.classList.remove("remove");
		}
		if (e.code === 'Delete') {
			dell_key.classList.remove("active");
			dell_key.classList.remove("remove");
		}
		if (e.code === 'ArrowLeft') {
			arrow_left.classList.remove("active");
			arrow_left.classList.remove("remove");
		}
		if (e.code === 'ArrowUp') {
			arrow_up.classList.remove("active");
			arrow_up.classList.remove("remove");
		}
		if (e.code === 'ArrowDown') {
			arrow_down.classList.remove("active");
			arrow_down.classList.remove("remove");
		}
		if (e.code === 'ArrowRight') {
			arrow_right.classList.remove("active");
			arrow_right.classList.remove("remove");
		}
		setTimeout(() => {
			keys[i].classList.remove("remove");
			//spaceKey.classList.remove("active")
		}, 200)
	}
})

for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener('click', function () {
		let key = keys[i].getAttribute('keyname');
		if (caps_lock_key.getAttribute('keyname') === keys[i].getAttribute('keyname') || shift_left.getAttribute('keyname') === keys[i].getAttribute('keyname') || tab.getAttribute('keyname') === keys[i].getAttribute('keyname') || ctrl_left.getAttribute('keyname') === keys[i].getAttribute('keyname') || ctrl_right.getAttribute('keyname') === keys[i].getAttribute('keyname') || win_key.getAttribute('keyname') === keys[i].getAttribute('keyname') || alt_left.getAttribute('keyname') === keys[i].getAttribute('keyname') || alt_right.getAttribute('keyname') === keys[i].getAttribute('keyname') || enter_key.getAttribute('keyname') === keys[i].getAttribute('keyname') || backspace_key.getAttribute('keyname') === keys[i].getAttribute('keyname') || arrow_left.getAttribute('keyname') === keys[i].getAttribute('keyname') || arrow_up.getAttribute('keyname') === keys[i].getAttribute('keyname') || arrow_down.getAttribute('keyname') === keys[i].getAttribute('keyname') || arrow_right.getAttribute('keyname') === keys[i].getAttribute('keyname')) {
			text_input.value += ""
		} else {
			text_input.value += key;
		}
	});
}
for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener('mousedown', function () {
		keys[i].style.backgroundColor = 'blue';
		keys[i].style.color = 'white';
	});
	keys[i].addEventListener('mouseup', function () {
		keys[i].style.backgroundColor = '';
		keys[i].style.color = '';
	});
}


// add event listener to space key
spaceKey.addEventListener('click', function () {
	text_input.value += ' ';
});

// add event listener to caps lock key
caps_lock_key.addEventListener('click', function () {
	// toggle caps lock functionality
	// ...
	caps_lock_key.classList.toggle("active");

	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];
		let letter = key.getAttribute('keyname');
		let lowerCaseLetter = key.getAttribute('lowerCaseName');
		if (caps_lock_key.classList.contains('active')) {
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

// add event listener to shift keys
shift_left.addEventListener('click', function () {
	// activate shift functionality for next character/symbol pressed
	// ...
});

shift_right.addEventListener('click', function () {
	// activate shift functionality for next character/symbol pressed
	// ...
});

// add event listener to shift keys
backspace_key.addEventListener('click', function () {
	// activate shift functionality for next character/symbol pressed
	// ...

	let inputText = text_input.value;
	inputText = inputText.slice(0, -1);
	text_input.value = inputText;
});


enter_key.addEventListener('click', function () {
	text_input.value += '\n';
});