function ClickMe() {
	var Background = document.body.style.backgroundImage = "url('lib/logo.gif')";
	var Speech = document.getElementById("Speech");
	Speech.play();
	Background = "lib/logo.gif";
}