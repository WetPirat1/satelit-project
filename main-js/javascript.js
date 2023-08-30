let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.burger-item');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})