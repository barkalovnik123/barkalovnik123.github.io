// замена текста в основном блоке.
function mainblock() {
	if (document.getElementById('lang').innerText == 'English version') {
		document.getElementById('mainonindex').innerHTML = `
		    	<h2 id="text1">
				    Приветствую вас на своём сайте!
				</h2>
				<br>
				<p id="text2">
				    На нём вы найдетё игры, программы, рисунки и тому подобное,
				</p>
				<p id="text3">
				    Сделанное barkalovnik123 (Никитой Баркаловым).
				</p>
				<p id="text4">
				    По сути говоря, данный сайт исполняет роль портфолио.
				</p>
				<h2 id="text5">
				    Быстрые ссылки на страницы сайта:
				</h2>
				    <p>
				        <a href="games.html" id="gamesme">
					    -------Игры-------
					    </a>
				    </p>
				    <p>
				        <a href="drawings.html" id="drawme">
					    -----Рисунки-----
					    </a>
				    </p>
					<p>
					    <a href="scr.html" id="scrme">
					    Скринсейверы
					    </a>
					</p>
					<p>
					    <a href="about.html"  id="aboutme">
					    ------О себе------
					    </a>
					</p>`;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/bulb.png" wight="32" height="32" align="right">
				    ГЛАВНАЯ
				    <img src="images/bulb.png" wight="32" height="32" align="left">
			    </big>
		`;
	} else if (document.getElementById('lang').innerText == 'Русская версия') {
		document.getElementById('mainonindex').innerHTML = `
		    	<h2 id="text1">
				    Hello everyone! This is barkalovnik123's site
				</h2>
				<br>
				<p id="text2">
				    Here is games, drawings, programms and others,
				</p>
				<p id="text3">
				    writed by barkalovnik123 (Barkalov Nikita).
				</p>
				<p id="text4">
				    So, it is something like portpholio.
				</p>
				<h2 id="text5">
				    Fast links:
				</h2>
				    <p>
				        <a href="games.html" id="gamesme">
					    -------Games-------
					    </a>
				    </p>
				    <p>
				        <a href="drawings.html" id="drawme">
					    -----Drawings-----
					    </a>
				    </p>
					<p>
					    <a href="scr.html" id="scrme">
					    Screensavers
					    </a>
					</p>
					<p>
					    <a href="about.html"  id="aboutme">
					    ------About me------
					    </a>
					</p>`;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/bulb.png" wight="32" height="32" align="right">
				    Main
				    <img src="images/bulb.png" wight="32" height="32" align="left">
			    </big>
		`;
	}
}