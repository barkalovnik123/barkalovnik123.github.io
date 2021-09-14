function calculate() {
		//определяем наши ФО
		var fg1 = +document.getElementById("i1").value;
		var fg2 = +document.getElementById("i2").value;
		var fg3 = +document.getElementById("i3").value;
		var fg4 = +document.getElementById("i4").value;
		var fg5 = +document.getElementById("i5").value;
		var fg6 = +document.getElementById("i6").value;
		var fg7 = +document.getElementById("i7").value;
		var fg8 = +document.getElementById("i8").value;
		var fg9 = +document.getElementById("i9").value;
		var fg10 = +document.getElementById("i10").value;
		
		//определяем СОРы
		var ourSAS1 = +document.getElementById("sas1").value;
		var ourSAS2 = +document.getElementById("sas2").value;
		var ourSAS3 = +document.getElementById("sas3").value;
		var ourSAS4	= +document.getElementById("sas4").value;
		var maxSAS1 = +document.getElementById("maxsas1").value;
		var maxSAS2 = +document.getElementById("maxsas2").value;
		var maxSAS3 = +document.getElementById("maxsas3").value;
		var maxSAS4 = +document.getElementById("maxsas4").value;
		
		//определяем СОЧи
		var SAQ = +document.getElementById("saq").value;
		var maxSAQ = +document.getElementById("maxsaq").value;
		
		//определяем сумму ФО и их кол-во
		var fgSum = fg1*1+fg2*2+fg3*3+fg4*4+fg5*5+fg6*6+fg7*7+fg8*8+fg9*9+fg10*10;
		var fgAmount = fg1+fg2+fg3+fg4+fg5+fg6+fg7+fg8+fg9+fg10;
		
		// определяем сумму СОЧ и сумму максимальных оценок СОЧ
		var ourSASSum = ourSAS1+ourSAS2+ourSAS3+ourSAS4;
		var maxSASSum = maxSAS1+maxSAS2+maxSAS3+maxSAS4;
		
		// считаем результат
		if (document.getElementById("year").checked) {
			// Если выбрали гол
			var result = (((ourSASSum + fgSum) / (maxSASSum + fgAmount * 10)) * 50) + ((SAQ / maxSAQ) * 50);
		} else if (document.getElementById("half_year").checked) {
			// Если выбрали полугодие
			var result = ((ourSASSum + fgSum) / (maxSASSum + fgAmount * 10)) * 100;
		}
		var five_mark = 0;
		
		//Формирование пятибальной оценки
		if (document.getElementById("grade_high").checked) {
			if (result > 0 && result < 40) {
				five_mark = 2;
			} else if (result >= 40 && result < 65) {
				five_mark = 3;
			} else if (result >= 65 && result < 85) {
				five_mark = 4;
			} else if (result >= 85 && result <= 100) {
				five_mark = 5;
			}
		} else if (document.getElementById("grade_small").checked) {
			if (result > 0 && result < 21) {
				five_mark = 2;
			} else if (result >= 21 && result < 51) {
				five_mark = 3;
			} else if (result >= 51 && result < 81) {
				five_mark = 4;
			} else if (result >= 81 && result <= 100) {
				five_mark = 5;
			}
		}
		// Вывод
		document.getElementById("results").innerHTML = `Процентная оценка: ${result+"%"}; <br> Пятибальная оценка: ${five_mark}`;
}

// Прячем или показываем определенные поля ввода в соответствии с выбраными критериями (тип оценивания и класс)
function change() {
	if (document.getElementById("year").checked) {
		document.getElementById("be_hidden").style.display = "block";
		document.getElementById("be_hidden2").style.display = "block";
	} else if (document.getElementById("half_year").checked) {
		document.getElementById("be_hidden").style.display = "none";
		document.getElementById("be_hidden2").style.display = "none";
	}
}

// Функции для показа полей ввода ФО, СОР, СОЧ. Сделано для удобства пользователя: они разворачиваются по нажатию на кнопку
function showOrHideFG() {
	if (document.getElementById("FGForm").style.display == "none") {
		document.getElementById("FGForm").style.display = "block";
	} else {
		document.getElementById("FGForm").style.display = "none";
	}
}
function showOrHideSAS() {
	if (document.getElementById("SASForm").style.display == "none") {
		document.getElementById("SASForm").style.display = "block";
	} else {
		document.getElementById("SASForm").style.display = "none";
	}
}
function showOrHideSAQ() {
	if (document.getElementById("SAQForm").style.display == "none") {
		document.getElementById("SAQForm").style.display = "block";
	} else {
		document.getElementById("SAQForm").style.display = "none";
	}
}
// с самого начала они спрятаны. Показаны будут по нажатию
document.getElementById("FGForm").style.display = "none";
document.getElementById("SASForm").style.display = "none";
document.getElementById("SAQForm").style.display = "none";
alert(`Здравствуйте! Выберите ваш класс и тип оценивания по предмету. 
После чего введите количество определенных отметок ФО, а также СОР и СОЧ 
(Если какие-либо отметки отсутствуют, оставьте поле пустым). 
После нажмите на "Вычислить", вы получите свой процентный балл по предмету, а также пятибальную отметку.

Данный инструмент можно использовать для прогнозирования оценки, контроля успеваемости и может 
помочь в постановке приоритетов в учёбе`)