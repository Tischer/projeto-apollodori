const swiper = new Swiper('.swiper', {
    grabCursor: true,
    autoplay: {
        delay: 4500
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});