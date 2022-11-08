'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-tema')

    var className = document.body.className;
    if(className == "light-tema") {
        this.textContent = "Escuro";
    }

    else {
        this.textContent = "Claro"
    }

});