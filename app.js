$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
});

$('#showcase').click(function() {
    console.log('clicked')
});

$('#nav-1').fadeIn()
// $('.show-texts').hide();

const nav1 = document.getElementById("nav-1"); // -Logo
const nav2 = document.getElementById("nav-2"); // About
const nav3 = document.getElementById("nav-3"); // History
const nav4 = document.getElementById("nav-4"); // Hobby
const nav5 = document.getElementById("nav-5"); // Contact

// const header = document.getElementById("header");
const nav = document.getElementById('nav');
const sectionA = document.getElementById("section-a"); // About
const sectionB = document.getElementById("section-z"); 
const sectionC = document.getElementById("section-b");
const sectionD = document.getElementById("section-c");

// console.log(nav.offsetTop)


nav1.addEventListener('click', () => {
    console.log('clicked')

    nav.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
        inline: "nearest"
    });
})
nav2.addEventListener('click', () => {
    sectionA.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})
nav3.addEventListener('click', () => {
    sectionB.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})
nav4.addEventListener('click', () => {
    sectionC.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})
nav5.addEventListener('click', () => {
    sectionD.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})

// $('#read-more').click(function() {
    // $('.important').css('color', 'red');
    // $('#more-text').slideDown();
    // $('#read-more').hide();
    // $('#image-wrapper').slideUp();
//   });

// const bg = $('#bg-image');
// console.log(bg)

// bg.css('background-image: url("img/placeholder.png")');


// console.log($('.moment'), 'hey');
// const $moment = $('.moment');

// console.log($moment);


// $('.moment').click(function() {
//     console.log('Hello')
// })
// const circle = document.querySelector('#js-circle');
// new mojs.Tween({
// 　　repeat: 999,
// 　　delay: 500,
// 　　speed: 0.3,
// 　　onUpdate: function(progress) {
// 　　　　var bounceProgress = mojs.easing.bounce.out(progress);
// 　　　　circle.style.transform = 'translateY(' + 200 * bounceProgress + 'px)';
// 　　}
// }).play();


$(window).on('load scroll', function(){

    const elem = $('.animated');
  
    elem.each(function (e) {

        const elemOffset = Math.round($(this).offset().top);

        const scrollPos = Math.round($(window).scrollTop());

        const wh = $(window).height();

        if(scrollPos > elemOffset - wh){
            $(this).addClass('showUp');
            
            // $(this).removeClass('showOff');
        } 
        // // when elem is top of window, elem off
        // if(scrollPos > elemOffset + 75) {
        //     $(this).addClass('showOff');
        //     $(this).removeClass('showUp');
        // }
        // // keep hiding elem until elem comes into window 
        // if(scrollPos < elemOffset - wh + 75) {
        //     $(this).removeClass('showUp');
        //     $(this).addClass('showOff');
        // }
    });
});



