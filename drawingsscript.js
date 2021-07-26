// замена текста в основном блоке.
function mainblock() {
	if (document.getElementById('lang').innerText == 'English version') {
		document.getElementById('mainonindex').innerHTML = `
            <h3>Здесь находятся мои рисунки! =3</h3>
			<h2>Также большинство моих работ находятся в моём <a href="https://www.instagram.com/nikita.barkalov/">Инстаграме</a></h2>
				<img src="images/paint1.jpg" class="frame imagesindrawings">
				<img src="images/paint2.jpg" class="frame imagesindrawings">
				<img src="images/paint3.png" class="frame imagesindrawings">
				<img src="images/paint4.jpg" class="frame imagesindrawings">
				<img src="images/paint5.png" class="frame imagesindrawings">
				<img src="images/paint6.jpg" class="frame imagesindrawings">
				<img src="images/paint7.jpg" class="frame imagesindrawings">
				<img src="images/paint8.jpg" class="frame imagesindrawings">
				<img src="images/paint9.png" class="frame imagesindrawings">
				<img src="images/paint10.png" class="frame imagesindrawings">
				<img src="images/paint11.jpg" class="frame imagesindrawings">
				<img src="images/paint12.png" class="frame imagesindrawings">
				<img src="images/paint13.png" class="frame imagesindrawings">
        `;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/draw.png" wight="32" height="32" align="right">
				    Рисунки
				    <img src="images/draw.png" wight="32" height="32" align="left">
			    </big>
		`;
	} else if (document.getElementById('lang').innerText == 'Русская версия') {
		document.getElementById('mainonindex').innerHTML = `
            <h3>Here are my drawings! =3</h3>
			<h2>Also most of my works can be found on my <a href="https://www.instagram.com/nikita.barkalov/">Insta!</a></h2>
				<img src="images/paint1.jpg" class="frame imagesindrawings">
				<img src="images/paint2.jpg" class="frame imagesindrawings">
				<img src="images/paint3.png" class="frame imagesindrawings">
				<img src="images/paint4.jpg" class="frame imagesindrawings">
				<img src="images/paint5.png" class="frame imagesindrawings">
				<img src="images/paint6.jpg" class="frame imagesindrawings">
				<img src="images/paint7.jpg" class="frame imagesindrawings">
				<img src="images/paint8.jpg" class="frame imagesindrawings">
				<img src="images/paint9.png" class="frame imagesindrawings">
				<img src="images/paint10.png" class="frame imagesindrawings">
				<img src="images/paint11.jpg" class="frame imagesindrawings">
				<img src="images/paint12.png" class="frame imagesindrawings">
				<img src="images/paint13.png" class="frame imagesindrawings">
			`;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/draw.png" wight="32" height="32" align="right">
				    DRAWINGS
				    <img src="images/draw.png" wight="32" height="32" align="left">
			    </big>
		`;
	}
}