var mobileMenuBtn = document.getElementById('mobileMenuBtn');
var mobileMenu    = document.getElementById('mobileMenu');

/** ---------------------------------------
* при нажатии на кнопку меню (в мобтльной версии сайта)
* меню появлется, при повторном нажатии исчезает 
*  ----------------------------------------*/

var showMobileMenu = function () {
	mobileMenu.style.display = mobileMenu.style.display == 'flex' ? 'none' : 'flex';
}

mobileMenuBtn.addEventListener('click', showMobileMenu);