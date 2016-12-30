$(document).foundation()

var menu =  document.getElementById("menu");
var background = document.getElementById("background");

var gestosBackground = new Hammer(background);
gestosBackground.on('swipeleft', function(ev){
	console.log(ev.type);
	menu.classList.remove('active');

});
gestosBackground.on('swiperight', function(ev){
	console.log(ev.type);
	menu.classList.add('active');
});

gestosBackground.on('tap', function(ev){
	console.log(ev.type);
	
	console.log("menu esta activo: " + menu.className.includes('active'));

	if(menu.className.includes('active')){
		menu.classList.remove('active');
	}
	 
});




//funcion de control para el inicio de la app
function iniciar(){
	console.log("test hammer.js");
}
window.addEventListener('load',iniciar,false);