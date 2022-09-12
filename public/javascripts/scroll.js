$('.btn').click(() => {
    $('html, body').animate({
        scrollTop: $('.section').offset().top
    }, 1000);
});