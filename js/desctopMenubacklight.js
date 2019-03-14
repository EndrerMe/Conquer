window.onscroll = function() {
    var navDesctopLink = document.getElementsByClassName('nav__desctop__link'); 
	var navToHead = document.getElementById('navToHead');
	var aboutUs = document.getElementById('aboutUs');
	var aboutUsBlock = aboutUs.getBoundingClientRect();
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > aboutUsBlock.top) {
    	for (let i = 0; i < navDesctopLink.length; i++)
            navDesctopLink[i].classList.remove('active');

        navDesctopLink[2].classList.add('active');
    }
}