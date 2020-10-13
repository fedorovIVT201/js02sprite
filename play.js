// холст для рисования - игровое поле
let board = document.getElementById('cnv').getContext('2d');

// фоновая клетка 32×32 - трава
let bg = document.getElementById('grass');

// персонаж, спрайт 32×32 – привидение из пакмана
let char = document.getElementById('ghost');

// координаты персонажа, столбец и строка, считая с нуля
let ghostCol = 1, ghostRow = 0;

// абзац с сообщением 
let msg = document.getElementById('msg');

// после загрузки картинок рисуем начальное состояние поля
function init(){
	for (let col = 0; col < 16; col++){
		board.drawImage(bg, col*32, 0);
		if (col === ghostCol) board.drawImage(char, 1*32, 0);
	}	
};

function moveOnce(event){
	board.drawImage(char, 0, 1*32);
	msg.value = "Клик в "+ event.clientX + ", "+ event.clientY +"!";
}
	
window.onload = init;
document.onmouseup = moveOnce;
