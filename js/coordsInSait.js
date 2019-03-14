/** ---------------------------------------
 *события при скроле сайта, подсвтека кнопок меню при скроле
 * и появление кнопки чтоб подняться наверх при скроле к блоку about us
 ----------------------------------------*/

window.onscroll = function() {
	var homepage       = document.getElementById('homepage');
	var services       = document.getElementById('services');
	var contact        = document.getElementById('contact');
	var aboutUs        = document.getElementById('aboutUs');
    /** ---------------------------------------
    * getBoundingClientRect собирает всю информацию о блоке, 
    * тоесть его отступы (внутрение и внешние), высоту и ширину
    * отступ сверху считается с самого верха сайта
    * все считается в пикселях
     ----------------------------------------*/
	var aboutUsBlock   = aboutUs.getBoundingClientRect();
	var contactBlock   = contact.getBoundingClientRect();
	var servicesBlock  = services.getBoundingClientRect();
	var homepageBlock  = homepage.getBoundingClientRect();
	var navDesctopLink = document.getElementsByClassName('nav__desctop__link'); 
	var navToHead      = document.getElementById('navToHead');
    /** ---------------------------------------
    * в переменную scrolled записывается то насколько пользователь проскролил
    * вниз, считается с самого верха сайта
    * все считается в пикселях
     ----------------------------------------*/
    var scrolled       = window.pageYOffset || document.documentElement.scrollTop;


    /** ---------------------------------------
    * проверки если пользоваетль проскролил до определенного момента, 
    * то выделять нужный пункт меню
    * тоесть если пользоваетль сейчас находится на блоке services то
    * кнопка services в меню будет выделена
    * если пользоваетль находится на блоке contact то кнопка contact
    * будет выделена, и так далее 
     ----------------------------------------*/
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