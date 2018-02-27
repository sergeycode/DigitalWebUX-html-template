
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var navLinks = document.getElementById('nav-links');
var menuLine = document.querySelectorAll('.menu-line');

//Main nav scale effect with menu button change from humburger to X
menu.addEventListener( 'click', function() {
    if (nav.style.visibility === 'hidden') {
        nav.style.visibility = 'visible';
        nav.style.transform = 'scale(1)';
        navLinks.style.opacity = '1';
        menuLine.forEach( function (e) {
            e.classList.add('rotate');
        });
    } else {
        nav.style.visibility = 'hidden';
        nav.style.transform = 'scale(0)';
        navLinks.style.opacity = '0';
        menuLine.forEach( function (e) {
            e.classList.remove('rotate');
        });
    }
});
// close menu after clicking on link
var navLink = navLinks.querySelectorAll('a');
navLink.forEach( function (e) {
    e.addEventListener('click', function () {
        if (nav.style.visibility === 'visible') {
            nav.style.visibility = 'hidden';
            nav.style.transform = 'scale(0)';
            navLinks.style.opacity = '0';
            menuLine.forEach( function (e) {
                e.classList.remove('rotate');
            });
        }
    });
});
