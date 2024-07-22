const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide("slow");
    });
    $(document).ready(function(){
        $("img").click(function(){
            $(this).show(); /*Queria lograr el efecto de clikear la imagen para que apareciera el texto pero no me resulto como queria*/
        });
    });
});

$(document).ready(function() {
    // Selector para elementos con clase "textD"
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
