//Это для книги
function saveToLocal() {
	// функция для сохранения в локалСтор
	var day = document.getElementById("day_id").value;
	var month = document.getElementById("month_id").value;
	var year = document.getElementById("year_id").value;
	if (day == "" || month == "" || year == "") {
		// Если пользователь ничего не ввёл, просим ввести и выходим из функции
		alert("Введите дату!");
		return
	}
	var theKey = day + month + year; // Соединяем день месяц и год в один ключ
	localStorage.setItem(theKey, document.getElementById("text_pole").value); // Сохраняем
	if (!document.getElementById("selection").innerHTML.includes(theKey)) {
		// Добавляем в выпадающий списко
		document.getElementById("selection").innerHTML = document.getElementById("selection").innerHTML + `<option>${theKey}</option>`
	}
}
function loadFromLocal() {
	// Функция для загрузки данных из локалСтор
	var load_day = document.getElementById("day_id").value;
	var load_month = document.getElementById("month_id").value;
	var load_year = document.getElementById("year_id").value;
	if (load_day == "" || load_month == "" || load_year == "") {
		// Если пользователь ничего не ввёл, просим ввести и выходим из функции 
		alert("Введите дату!");
		return
	}
	var load_theKey = load_day + load_month + load_year; // объединяем в ключ
	// Выводим данные в поле ввода
	document.getElementById("text_pole").value = localStorage.getItem(load_theKey);
}

function autoLoad() {
	// Функуия для загрузки даты из выпадающего списка
	if (document.getElementById("selection").value.length == 6) {
		var values = document.getElementById("selection").value.match(/.{1,2}/g); // Разделяем на массив по два символа
		// Выводи
		document.getElementById("day_id").value = values[0];
		document.getElementById("month_id").value = values[1];
		document.getElementById("year_id").value = values[2];
	}
}
// Загружаем записи из локалСтор в выпадающий список
var localKeys = Object.keys(localStorage);
for (var i = 0; i < localKeys.length; i++) {
	if (localKeys[i].length == 6) {
		document.getElementById("selection").innerHTML = document.getElementById("selection").innerHTML + `<option>${localKeys[i]}</option>`;
	}
}
alert(`Здравствуйте! Введите дату (в каждом поле по две цифры) 
Делайте записи и сохраняйте их кнопкой "Сохранить"
После этого вы сможете снова открыть набранный текст, выбрав дату в выпадающем списке и нажав кнопку "Загрузить"
Не стоит использовать данный инструмент для хранения паролей.

Данный инструмент можно использовать как альтернативу обычной записной книге, а также некоторым стационарным программам. Так как не требует скачки, в любой момент можно открыть в своём веб-браузере. Система дат позволяет систематизировать записи. Хранение записей на компьютере имеет свои преимущества: их не так легко потерять.`)