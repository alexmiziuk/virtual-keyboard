let keys = document.querySelectorAll('.keys');
let backspace_key = document.querySelector(".backspace_key")
let tab = document.querySelector(".tab_key")
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector(".caps_lock_key");
let enter_key = document.querySelector(".enter_key");
let ctrl_left = document.querySelector(".ctrl_left");
let win_key = document.querySelector('.win_key');
let alt_left = document.querySelector('.alt_left');
let fn_key = document.querySelector(".fn_key")
let toggle_circle = document.querySelector(".toggle_circle");
let night_mode = document.querySelector(".night_mode");
let body = document.querySelector("body");
let text_input = document.querySelector(".text");
let change_color = document.querySelector(".change_light_color");
let colors_input = document.querySelector(".colors_input");
let keyboard_lights = document.querySelector(".keyboard_lights");
let keyboard_wrapp = document.querySelector(".keyboard_wrapp");

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

for (let i = 0; i < keys.length; i++) {
	// устанавливаем два атрибута
	keys[i].setAttribute('keyname', keys[i].innerText);
	keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (e) {
	for (let i = 0; i < keys.length; i++) {
		/* console.log(i) */ // проверка всех клавиш
		if (e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
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
	}
})

window.addEventListener('keyup', function (e) {
	for (let i = 0; i < keys.length; i++) {
		/* console.log(i) */ // проверка всех клавиш
		if (e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
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
		setTimeout(() => {
			keys[i].classList.remove("remove");
			//spaceKey.classList.remove("active")
	},200)
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
	for (let i = 0; i < keys.lengh; i++) {
		keys[i].style.color =  colors_input.value
	}
	keyboard_lights.style.background = colors_input.value;
})


 for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener('click', function() {
		let key = keys[i].getAttribute('keyname');
		if (caps_lock_key.getAttribute('keyname') === keys[i].getAttribute('keyname') || shift_left.getAttribute('keyname') === keys[i].getAttribute('keyname') || tab.getAttribute('keyname') === keys[i].getAttribute('keyname') || ctrl_left.getAttribute('keyname') === keys[i].getAttribute('keyname') || win_key.getAttribute('keyname') === keys[i].getAttribute('keyname') || alt_left.getAttribute('keyname') === keys[i].getAttribute('keyname') || fn_key.getAttribute('keyname') === keys[i].getAttribute('keyname') || enter_key.getAttribute('keyname') === keys[i].getAttribute('keyname') || backspace_key.getAttribute('keyname') === keys[i].getAttribute('keyname')) {
			text_input.value += ""
		} else {
			text_input.value += key;
			
		}
		
	});
}

// add event listener to space key
spaceKey.addEventListener('click', function() {
	text_input.value += ' ';
});

// add event listener to caps lock key
caps_lock_key.addEventListener('click', function() {
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
shift_left.addEventListener('click', function() {
	// activate shift functionality for next character/symbol pressed
	// ...
});

shift_right.addEventListener('click', function() {
	// activate shift functionality for next character/symbol pressed
	// ...
});