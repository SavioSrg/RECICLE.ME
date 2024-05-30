$(document).ready(function () {
    $("#agendar-btn").click(function () {
     $(".popup").fadeIn(500);
     $(".cover").fadeTo(500, 0.9);
 });
 $(".btn-editar").click(function () {
     $(".popup").fadeOut(500);
     $(".cover").fadeOut(500);
 });
});

$(document).ready(function () {
    $("#recolher-btn").click(function () {
        $(this).addClass("ativo");
        $("#entregar-btn").removeClass("ativo");
    });

    $("#entregar-btn").click(function () {
        $(this).addClass("ativo");
        $("#recolher-btn").removeClass("ativo");
    });
});

