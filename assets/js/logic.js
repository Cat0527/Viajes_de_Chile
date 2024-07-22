const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//jquery

$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide("slow");
    });
});

// Selector para elementos con clase "textD"
$(document).ready(function() {
    $(".textD").click(function() {
        $(this).css({
        "color": "#BA23DB",
        "font-size": "2em",
        "font-weight": 900
        });
    });

    $(".textD").dblclick(function() {
        $(this).css({
        "color": "white",
        "font-size": "1.2em",
        "font-weight": 400
        });
    });
});

//smooth scroll
$(document).ready(function() {
    $('a').click(function(event) {
        event.preventDefault(); 
        const target = $(this).attr('id'); 
        
        $('html, body').animate({
        scrollTop: $(target).offset().top 
        }, 1500); 
    });
});


//Link iconos footer js

const iconosFF = document.querySelectorAll('.iconoFF');
iconosFF.forEach(icono => {
    icono.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.location.href = this.querySelector('a').href;
    });
});

