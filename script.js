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
/* let alt_key =document.querySelector(".alt_key ") */
let alt_left = document.querySelector('.alt_left');
let alt_right = document.querySelector('.alt_right');
let toggle_circle = document.querySelector(".toggle_circle");
let night_mode = document.querySelector(".night_mode");
let body = document.querySelector("body");
let text_input = document.querySelector(".text");
let change_color = document.querySelector(".change_light_color");
let colors_input = document.querySelector(".colors_input");
let keyboard_lights = document.querySelector(".keyboard_lights");
let keyboard_wrapp = document.querySelector(".keyboard_wrapp");
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
		if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName') || e.key == keys[i].getAttribute('qkeyname') || e.key == keys[i].getAttribute('qlowerCaseName') ) {
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
		/* if (e.code === 'Tab') {
			tab.classList.add("active");
		} */
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

night_mode.addEventListener("click", function () {
	toggle_circle.classList.toggle("active");
	body.classList.toggle("active");
	night_mode.classList.toggle("active");
	keyboard_wrapp.classList.toggle("active");
	text_input.classList.toggle("active");
	text_input.classList.toggle("active");
	change_color.classList.toggle("active");
	for (let i = 0; i < keys.length; i++) {
		keys[i].classList.toggle("keys_night");
	}
})

colors_input.addEventListener("input", function () {
	for (let i = 0; i < keys.length; i++) {
		keys[i].style.color = colors_input.value
	}
	keyboard_lights.style.background = colors_input.value;
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