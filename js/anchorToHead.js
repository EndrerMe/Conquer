window.onscroll = function() {
	var homepage       = document.getElementById('homepage');
	var services       = document.getElementById('services');
	var contact        = document.getElementById('contact');
	var aboutUs        = document.getElementById('aboutUs');
	var aboutUsBlock   = aboutUs.getBoundingClientRect();
	var contactBlock   = contact.getBoundingClientRect();
	var servicesBlock  = services.getBoundingClientRect();
	var homepageBlock  = homepage.getBoundingClientRect();
	var navDesctopLink = document.getElementsByClassName('nav__desctop__link'); 
	var navToHead      = document.getElementById('navToHead');
    var scrolled       = window.pageYOffset || document.documentElement.scrollTop;


    if (homepageBlock.top <= 0) {
    	for (let i = 0; i < navDesctopLink.length; i++)
            navDesctopLink[i].classList.remove('active');
        navDesctopLink[0].classList.add('active');
    }

    if (aboutUsBlock.top <= 0 + 100) {
    	for (let i = 0; i < navDesctopLink.length; i++)
            navDesctopLink[i].classList.remove('active');

        navDesctopLink[1].classList.add('active');
    	navToHead.style.opacity = '1'
    	navToHead.style.zIndex  = '5'
    }


    if (servicesBlock.top <= 0) {
    	for (let i = 0; i < navDesctopLink.length; i++)
            navDesctopLink[i].classList.remove('active');

        navDesctopLink[2].classList.add('active');
    }

    if (contactBlock.top <= 0 + 200) {
    	for (let i = 0; i < navDesctopLink.length; i++)
            navDesctopLink[i].classList.remove('active');

        navDesctopLink[3].classList.add('active');
    }

    if (aboutUsBlock.top > 0) {
    	navToHead.style.opacity = '0'
    }
}