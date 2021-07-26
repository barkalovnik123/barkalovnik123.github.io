// замена текста в основном блоке.
function mainblock() {
	if (document.getElementById('lang').innerText == 'English version') {
		document.getElementById('mainonindex').innerHTML = `
            <h3>Здесь вы найдёте игры, сделанные мной</h3>
			<h2>
			    <div class="indiv">
				    <div class="header">
					    Уворот
					</div>
				    <img src="images/undertaleimg.png" class="frame">
					Игра основанная на undertale от Toby Foxа
					<br>
					В ней вы должны управлять сердцем и уворачиваться от различных атак.
					<br>
					Сердце управляется стрелочками.
					<br>
					В верхнем левом углу можно увидеть очки жизней (HP) и магии врага (MP).
					<br>
					Если MP опустится до нуля (оно тратится с появлением атак), вы победите! Если же до нуля падут очки жизней, вы проиграете!
					<br>
					Это одна из самых первых моих игр.
					<br>
					<a href="games/undertale game.html">
					<button>
					    Играть онлайн
					</button>
					</a>
					<a href="https://scratch.mit.edu/projects/364581195/">
					<button>
					    Страница игры на Scratch
					</button>
					</a>
					<a href="https://gamejolt.com/games/underdodge/622306">
					<button>
					    Страница игры на GameJolt
					</button>
					</a>
				</div>
				<br>
				<div class="indiv">
				    <div class="header">
					    Стреляй!
					</div>
				    <img src="images/cannon.png" class="frame">
					Игра основанная на RIP
					<br>
					Вы должны уничтожить как можно больше монстров, которых становится всё больше!
					<br>
					Управляйте движением мыши пушку, щелчком производится выстрел.
					<br>
					Во время игры на поле будут появляться бонусы, позволяющие временно защитить или усилить наше орудие.
					<br>
					В начале игры можно выбрать музыку, включить или выключить звуки, увеличить сложность.
					<br>
					<a href="games/cannon game.html">
					<button>
					    Играть онлайн
					</button>
					</a>
					<a href="https://scratch.mit.edu/projects/412442839/">
					<button>
					    Страница игры на Scratch
					</button>
					</a>
					<a href="https://gamejolt.com/games/cannonshot/623024">
					<button>
					    Страница игры на GameJolt
					</button>
					</a>
				</div>
				<div class="indiv">
				    <div class="header">
					    Динозаврик
					</div>
				    <img src="images/dino.png" class="frame">
					Игра основанная на динозаврике из chrome
					<br>
					Нажимайте любые клавиши или кликайте мышью (по экрану, для телефонов) чтобы подпрыгнуть
					<br>
					Как долго вы сможете продержаться?
					<br>
					<a href="games/dino game.html">
					<button>
					    Играть онлайн
					</button>
					</a>
				</div>
				<div class="indiv">
				    <div class="header">
					    Угадай фигуру
					</div>
					<img src="images/figure.png" class="frame">
					Игра, которую я написал для младшего брата. Игра озвучивает фигуру, а игрок должен её найти
					<br>
					<a href="games/figure game.html">
					<button>
						Играть онлайн
					</button>
					</a>
				</div>
				<div class="indiv">
				    <div class="header">
					    Змейка
					</div>
					<img src="images/snake.png" class="frame">
					Классическая "змейка". Основные механики выполнены ITGenio. Я лишь чуть изменил визуальную составляющую.
					<br>
					<a href="games/snake game.html">
					<button>
						Играть онлайн
					</button>
					</a>
				</div>
				<div class="indiv">
				    <div class="header">
					    Танчики
					</div>
					<img src="images/tanks.png" class="frame">
					Танчики! Уничтожьте вражеские танки, после чего игра окончится! Можно играть одному (зелёным танком), или вдвоём (2-ой игрок - синий). Игра очень короткая. Тестировал случайные действия, которые могут выглядеть как ИИ =)
					<br>
					<a href="games/tanks game.html">
					<button>
						Играть онлайн
					</button>
					</a>
				</div>
			</h2>
        `;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/game.png" wight="32" height="32" align="right">
				    Игры
				    <img src="images/game.png" wight="32" height="32" align="left">
			    </big>
		`;
	} else if (document.getElementById('lang').innerText == 'Русская версия') {
		document.getElementById('mainonindex').innerHTML = `
            <h3>Here are games made by me</h3>
			<h2>
			    <div class="indiv">
				    <div class="header">
					    UnderDodge
					</div>
				    <img src="images/undertaleimg.png" class="frame">
					The game is based on UnderTale by Toby Foxа
					<br>
					You need to dodge attacks like you could do in UnderTale!
					<br>
					Control the Soul with arrow-keys
					<br>
					In the upper left corner are showed your HP and MP
					<br>
					When MP is out, you'll win! But if HP will fall to zero, you will lose =(
					<br>
					This is one of my very first games
					<br>
					<a href="games/undertale game.html">
					<button>
					    Play online
					</button>
					</a>
					<a href="https://scratch.mit.edu/projects/364581195/">
					<button>
					    View on Scratch
					</button>
					</a>
					<a href="https://gamejolt.com/games/underdodge/622306">
					<button>
					    View on GameJolt
					</button>
					</a>
				</div>
				<br>
				<div class="indiv">
				    <div class="header">
					    CannonShot
					</div>
				    <img src="images/cannon.png" class="frame">
					The game is based on RIP
					<br>
					Kill as much monsters as ya can!
					<br>
					Rotate the cannon with your mouse and shoot by clicking!
					<br>
					You also can find some bonuses in the process. Collect them with your mouse! They'll help a lot!
					<br>
					In the menu you can choose the music, turn off coughs and increase difficulty!
					<br>
					<a href="games/cannon game.html">
					<button>
					    Play online
					</button>
					</a>
					<a href="https://scratch.mit.edu/projects/412442839/">
					<button>
					    View on Scratch
					</button>
					</a>
					<a href="https://gamejolt.com/games/cannonshot/623024">
					<button>
					    View on GameJolt
					</button>
					</a>
				</div>
				<div class="indiv">
				    <div class="header">
					    Dinosaur
					</div>
				    <img src="images/dino.png" class="frame">
					The game is based on Chrome Dino
					<br>
					Click any button or just mouse click to jump
					<br>
					How much will you survive?
					<br>
					<a href="games/dino game.html">
					<button>
					    Play online
					</button>
					</a>
				</div>
				<div class="indiv">
				    <div class="header">
					    Choose a figure!
					</div>
					<img src="images/figure.png" class="frame">
					I wrote the game for my lil' bro. The programm will 'text-to-voice' the figure you gotta find.
					<br>
					<a href="games/figure game.html">
					<button>
						Play online
					</button>
					</a>
				</div>
				<div class="indiv">
				    <div class="header">
					    Snakie
					</div>
					<img src="images/snake.png" class="frame">
					Classic snage-game! The main mechanics are made by ITGenio, I just upgraded the visualisation!
					<br>
					<a href="games/snake game.html">
					<button>
						Play online
					</button>
					</a>
				</div>
				<div class="indiv">
				    <div class="header">
					    Tanks
					</div>
					<img src="images/tanks.png" class="frame">
					Destroy enemy tanks by clicking space button! The game is quite short, but you can play by yourself or with you friend!
					<br>
					<a href="games/tanks game.html">
					<button>
						Play online!
					</button>
					</a>
				</div>
			</h2>`;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/game.png" wight="32" height="32" align="right">
				    GAMES
				    <img src="images/game.png" wight="32" height="32" align="left">
			    </big>
		`;
	}
}