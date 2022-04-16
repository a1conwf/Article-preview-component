$(document).ready(function () {
    $(".share__btn").click(function () {
        $(this).toggleClass("close");
        $(".share__container").toggleClass("active");
    });
});