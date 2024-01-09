$(document).ready(function () {
    var menu = $("#menu");
    var form = $("#commentForm");
    var search = $("#recherche");
    $("#burger").click(function () {
        if (menu.is(":hidden")) {
            menu.slideDown();
    }else {
        menu.slideUp();
    }
    })
    $(".form").click(function () {
        if (form.is(":hidden")){
            form.css("display", "block")
        }
    })
    $("#croix").click(function () {
        form.css("display", "none")
    })
    $("#search").click(function () {
        if (search.css("opacity", "0")){
            $(search).animate({right:"4em"}, 150, 'linear');
            $(search).css("opacity", "1")
        }
    })
})