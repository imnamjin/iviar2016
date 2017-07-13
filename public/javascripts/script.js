$(document).scroll(function () {
    var y = $(document).scrollTop(),
        header = $(".global-nav"),
        h = document.body.clientHeight;

    if (y >= h - 80) {
        header.addClass('nav-fixed');
        header.removeClass('nav-absolute');
    } else {
        header.addClass('nav-absolute');
        header.removeClass('nav-fixed');
    }
});


