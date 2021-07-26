function Lang() {
	if (document.getElementById('lang').innerText == 'Русская версия') {
		// меню 
		document.getElementById('menu').innerHTML = `
				<ul class="ulleft">
				<a href="games.html">
				<li class="gradientred">
					Игры
				</li>
				</a>
				<a href="drawings.html">				
				<li class="gradientblue">
					Рисунки
				</li>
				</a>
				<a href="scr.html">
				<li class="gradientyellow">
					Скринсейверы
				</li>
				</a>
				<a href="about.html">
				<li class="gradientwhite">
					О себе
				</li>
				</a>
				<a href="index.html">
				<li class="gradientgreen">
					Главная
				</li>
				</a>
				</ul>`;
		// новостной  блок
		document.getElementById('newsblock').innerHTML = `
		        <div class="prokrutka" id="prokrutka">
				<em>
				    <string>
				        НОВОСТИ
				    </string>
				</em>
			    <p class="date">27.08.20</p>
				<p>Новая версия сайта!</p>
	            <p class="date">22.08.20</p>
				<p>Написал новые скринсейверы! Скоро появятся!</p>
				</div>`;
		// заголовки блоков с новостями и меню
		document.getElementById('logosDeBlocks').innerHTML = `
			<!-- LOGO МЕНЮ-->
			    <h2 class="menulogo" id="menulogo">
			        --- МЕНЮ ---
			    </h2>
			<!--logo новостей-->
				<h2 class="newlogo" id="newslogo">
			    - НОВОСТИ -
			    </h2>`;
		// футтер
		document.getElementById('futter').innerHTML = `
				<a href="https://www.instagram.com/nikita.barkalov/">
				    <button id="instagrambutton">
					Я в Instagram
					</button>
				</a>
				<a href="https://scratch.mit.edu/users/barkalovnik123/">
				    <button id="scratchbutton">
					Я в Scratch
					</button>
				</a>
				<a href="https://gamejolt.com/@barkalovnik123">
				    <button id="okbutton">
					 Я в GameJolt
					</button>
				</a>
				<a href="https://ok.ru/profile/561185208059">
				    <button id="okbutton">
					Я в ОК
					</button>
				</a>
				<a href="https://twitter.com/barkalovnik123">
				    <button id="okbutton">
					Я в Twitter
					</button>
				</a>
				<a href="https://barkalovnik123.tumblr.com/">
				    <button id="okbutton">
					Я в Tumblr
					</button>
				</a>
				<a href="https://vk.com/barkalovnik123">
				    <button id="okbutton">
					Я в VK
					</button>
				</a>
			    <p id="writedby">
				    Сайт написан barkalovnik123 на html+css+javascript. Хостинг - github.
				</p>`;
		// мобильное меню
		document.getElementById('mobileMenu1').innerHTML = `
		        <ul>
                <li id="mobileMenu2">
				</li>
				</ul>`;
		document.getElementById('mobileMenu2').innerHTML = 'Меню' + document.getElementById('menu').innerHTML;
		// надпись на кнопке смены языка
		document.getElementById('lang').innerText = "English version"
	} else if (document.getElementById('lang').innerText = "English version") {
		// меню 
		document.getElementById('menu').innerHTML = `
		        <ul class="ulleft">
				<a href="games.html">
				<li class="gradientred">
					Games
				</li>
				</a>
				<a href="drawings.html">				
				<li class="gradientblue">
					Drawings
				</li>
				</a>
				<a href="scr.html">
				<li class="gradientyellow">
					Screensavers
				</li>
				</a>
				<a href="about.html">
				<li class="gradientwhite">
					About
				</li>
				</a>
				<a href="index.html">
				<li class="gradientgreen">
					Main
				</li>
				</a>
				</ul>`;
		// новостной  блок
		document.getElementById('newsblock').innerHTML = `
		        <div class="prokrutka" id="prokrutka">
				<em>
				    <string>
				        News
				    </string>
				</em>
			    <p class="date">27.08.20</p>
				<p>New version o' my site!</p>
	            <p class="date">22.08.20</p>
				<p>Writed new scrs! Coming soon!</p>
				</div>`;
				// заголовки блоков с новостями и меню
		document.getElementById('logosDeBlocks').innerHTML = `
			            <!-- LOGO МЕНЮ-->
			    <h2 class="menulogo" id="menulogo">
			        ----Menu----
			    </h2>
			            <!--logo новостей-->
				<h2 class="newlogo" id="newslogo">
			        -What's new-
			    </h2>`;
		// футтер
		document.getElementById('futter').innerHTML = `
				<a href="https://www.instagram.com/nikita.barkalov/">
				    <button id="instagrambutton">
					My Instagram
					</button>
				</a>
				<a href="https://scratch.mit.edu/users/barkalovnik123/">
				    <button id="scratchbutton">
					My Scratch
					</button>
				</a>
				<a href="https://gamejolt.com/@barkalovnik123">
				    <button id="okbutton">
					My GameJolt
					</button>
				</a>
				<a href="https://ok.ru/profile/561185208059">
				    <button id="okbutton">
					My OK
					</button>
				</a>
				<a href="https://twitter.com/barkalovnik123">
				    <button id="okbutton">
					My Twitter
					</button>
				</a>
				<a href="https://barkalovnik123.tumblr.com/">
				    <button id="okbutton">
					My Tumblr
					</button>
				</a>
				<a href="https://vk.com/barkalovnik123">
				    <button id="okbutton">
					My VK
					</button>
				</a>
			    <p id="writedby">
				    Site is written by barkalovnik123 (Barkalov Nikita) using HTML + CSS + JavaScript. GitHub used as a host.
				</p>`;
		// мобильное меню
		document.getElementById('mobileMenu1').innerHTML = `
		        <ul>
                <li id="mobileMenu2">
				</li>
				</ul>`;
		document.getElementById('mobileMenu2').innerHTML = 'Menu' + document.getElementById('menu').innerHTML;
		// надпись на кнопке смены языка
		document.getElementById('lang').innerText = "Русская версия"
	}
}