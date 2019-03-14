var mobileMenuBtn = document.getElementById('mobileMenuBtn');
var mobileMenu    = document.getElementById('mobileMenu');

var showMobileMenu = function () {
	mobileMenu.style.display = mobileMenu.style.display == 'flex' ? 'none' : 'flex';
}

mobileMenuBtn.addEventListener('click', showMobileMenu);