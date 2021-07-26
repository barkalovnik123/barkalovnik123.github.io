// замена текста в основном блоке.
function mainblock() {
	if (document.getElementById('lang').innerText == 'English version') {
		document.getElementById('mainonindex').innerHTML = `
			<h3>
				Я Баркалов Никита (barkalovnik123)!
				Начинающий программист и разработчик игр =)
				Внизу сайта вы можете найти ссылки на мои соц-сети
			</h3>
        `;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/not.png" wight="32" height="32" align="right">
				    Обо мне
				    <img src="images/not.png" wight="32" height="32" align="left">
			    </big>
		`;
	} else if (document.getElementById('lang').innerText == 'Русская версия') {
		document.getElementById('mainonindex').innerHTML = `
			<h3>
				I am Barkalov Nikita (barkalovnik123)!
				I am an young and novice programmer and game-developer!
				In the end of every page you can find links on my social medias!
			</h3>
		`;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/not.png" wight="32" height="32" align="right">
				    About
				    <img src="images/not.png" wight="32" height="32" align="left">
			    </big>
		`;
	}
}