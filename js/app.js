$(document).foundation()

var menu =  document.getElementById("menu");
var botonMenu =  document.getElementById("closemenu");
var background = document.getElementById("background");
var backgroundblack = document.getElementById("blackb");


var gestosBackground = new Hammer(background);
gestosBackground.on('swipeleft', function(ev){
	console.log(ev.type);
	menu.classList.remove('active');
	backgroundblack.classList.remove('activeb');

});
gestosBackground.on('swiperight', function(ev){
	console.log(ev.type);
	menu.classList.add('active');
	backgroundblack.classList.add('activeb');
});

gestosBackground.on('tap', function(ev){
	console.log(ev.type);	
	console.log("menu esta activo: " + menu.className.includes('active'));
	if(menu.className.includes('active')){
		menu.classList.remove('active');	
	}	 
});

var backgroundBlackH = new Hammer(backgroundblack);
backgroundBlackH.on('tap press', function(ev){
	console.log(ev.type);
	menu.classList.remove('active');
	backgroundblack.classList.remove('activeb');
});
backgroundBlackH.on('swipeleft', function(ev){
	console.log(ev.type);
	menu.classList.remove('active');
	backgroundblack.classList.remove('activeb');

});




var gestosBotonMenu = new Hammer(botonMenu);
gestosBotonMenu.on('tap', function(ev){
	console.log("Evento lanzado por: " + ev.target.getAttribute('id'));
	menu.classList.remove('active');
	backgroundblack.classList.remove('activeb');
});



//funcion de control para el inicio de la app
function iniciar(){
	console.log("test hammer.js");
}
window.addEventListener('load',iniciar,false);