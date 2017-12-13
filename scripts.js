
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var menuLine = document.querySelectorAll('.menu-line');

//Main nav slide effect with menu button change from humburger to X
menu.addEventListener( 'click', function() {
    if (nav.style.visibility === 'hidden') {
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
        menuLine.forEach( function (e) {
            e.classList.add('rotate');
        });
    } else {
        nav.style.visibility = 'hidden';
        nav.style.opacity = '0';
        menuLine.forEach( function (e) {
            e.classList.remove('rotate');
        });
    }
});


//    $('#arrow-down').click(function(){
//        $.fn.fullpage.moveSectionDown();
//    });