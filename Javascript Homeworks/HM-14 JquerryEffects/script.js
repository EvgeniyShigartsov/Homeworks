
const anchors = $('.anchors-box');
const targets = $('.scroll-target');
const btnToTop = $('.btn-to-top');
const height = document.documentElement.clientHeight;

anchors.on('click', goToAnchor);
btnToTop.on('click', () => slowScroll(0));

function goToAnchor(event){
    const anchor = event.target;
    let top = 0;

    for (let target of targets){
        if ($(anchor).hasClass(`${target.id}`)){
            top = $(`#${target.id}`).offset().top
            console.log(top);
        }
    }
    slowScroll(top)
};

function slowScroll (position){
    $('html, body').animate({
        scrollTop: position
    }, 900)
};

function showButtonToUp(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= height){
            btnToTop.fadeIn();
        } else {
            btnToTop.fadeOut();
        }
    });
};
showButtonToUp();

function slideToggle(){
    $('.slide-toggle').click(function(){
        $('.our-clients').slideToggle({
            duration: 500,
            easing: 'swing'
        });
        if ($('.slide-toggle').text() === 'Скрыть раздел'){
            $('.slide-toggle').text('Вернуть раздел')
        } else {
            $('.slide-toggle').text('Скрыть раздел')
        }
    })
};
slideToggle();