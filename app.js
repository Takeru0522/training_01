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

$('#nav-1').on('click', function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });

