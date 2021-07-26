// замена текста в основном блоке.
function mainblock() {
	if (document.getElementById('lang').innerText == 'English version') {
		document.getElementById('mainonindex').innerHTML = `
            <h3>Здесь вы найдёте скринсейверы, сделанные мною</h3>
			<h2>
			    <div class="indiv">
				    Простите, пока нет скринсейверов =(
					Они были, но пока прекратили существование из-за окончания срока поддержки технологии Flash
				</div>
			</h2>
        `;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/scr.png" wight="32" height="32" align="right">
				    Скринсейверы
				    <img src="images/scr.png" wight="32" height="32" align="left">
			    </big>
		`;
	} else if (document.getElementById('lang').innerText == 'Русская версия') {
		document.getElementById('mainonindex').innerHTML = `
            <h3>Here are screensavers made by me</h3>
			<h2>
			    <div class="indiv">
					Sorry, no screensavers yet =(
					They were, but stopped working 'cause of Flash's EoL
				</div>
			</h2>`;
		document.getElementById('logopage').innerHTML = `
		        <big>
			        <img src="images/scr.png" wight="32" height="32" align="right">
				    Screensavers
				    <img src="images/scr.png" wight="32" height="32" align="left">
			    </big>
		`;
	}
}