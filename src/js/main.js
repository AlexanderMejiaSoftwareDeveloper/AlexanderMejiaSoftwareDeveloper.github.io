let equis = document.querySelector('.equis');
let menuBurger = document.querySelector('.menu-burger');
var div = document.getElementById('ocultar');
menuBurger.addEventListener('click', e => {
    console.log(div)
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
        menuBurger.style.display = 'none';
        equis.style.display='block'


    }
    console.log('asd')
})


function ocultar() {
    div.style.display = 'none';
    menuBurger.style.display= 'block'
}



var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    startDelay: 1000,
});


AOS.init(); //iniciar animaciones


equis.addEventListener('click', e => {
    equis.style.display = 'none';
    div.style.display = 'none';
    menuBurger.style.display = 'block'
})

//abrir modal pryecto 1

    let proyecto1 = document.querySelector('#proyecto1');
    
    function abrirPro1 () {
        proyecto1.style.display='block'
    }
    function cerrarPro1 () {
        proyecto1.style.display='none'
    }
   


